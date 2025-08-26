import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Plus, Calendar, DollarSign, AlertCircle, Package } from "lucide-react";
import BillCard from "./BillCard";
import { useToast } from "@/hooks/use-toast";

const mockBills = [
  { id: 1, name: "Netflix", amount: 15.99, dueDate: "2024-08-27", category: "Streaming", status: "due" as const, note: "" },
  { id: 2, name: "Electric Bill", amount: 89.50, dueDate: "2024-08-24", category: "Utilities", status: "paid" as const, note: "Paid via autopay" },
  { id: 3, name: "Spotify", amount: 9.99, dueDate: "2024-08-30", category: "Streaming", status: "upcoming" as const, note: "" },
  { id: 4, name: "Phone Bill", amount: 45.00, dueDate: "2024-08-28", category: "Utilities", status: "due" as const, note: "Call to negotiate rate" },
  { id: 5, name: "Gym Membership", amount: 29.99, dueDate: "2024-09-01", category: "Health", status: "upcoming" as const, note: "" },
  { id: 6, name: "Car Insurance", amount: 120.00, dueDate: "2024-08-26", category: "Insurance", status: "overdue" as const, note: "Need to pay ASAP!" },
];

const Dashboard = () => {
  const { toast } = useToast();
  const [bills, setBills] = useState(mockBills);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingBill, setEditingBill] = useState<typeof mockBills[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    dueDate: "",
    category: "Streaming",
    frequency: "monthly",
    customMonths: [1],
    customYears: [1]
  });
  
  const totalMonthly = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const dueSoon = bills.filter(bill => bill.status === "due").length;
  const paidThisMonth = bills.filter(bill => bill.status === "paid").length;

  const handleStatusChange = (billId: number, newStatus: typeof mockBills[0]['status']) => {
    setBills(prevBills => 
      prevBills.map(bill => 
        bill.id === billId ? { ...bill, status: newStatus } : bill
      )
    );
  };

  const handleEdit = (billId: number) => {
    const bill = bills.find(b => b.id === billId);
    if (bill) {
      setEditingBill(bill);
      setFormData({
        name: bill.name,
        amount: bill.amount.toString(),
        dueDate: bill.dueDate,
        category: bill.category,
        frequency: "monthly",
        customMonths: [1],
        customYears: [1]
      });
      setIsEditMode(true);
    }
  };

  const handleDelete = (billId: number) => {
    setBills(prevBills => prevBills.filter(bill => bill.id !== billId));
  };

  const handleNoteChange = (billId: number, note: string) => {
    setBills(prevBills => 
      prevBills.map(bill => 
        bill.id === billId ? { ...bill, note } : bill
      )
    );
  };

  // Sort bills by priority: overdue, due, upcoming, paid
  const sortedBills = [...bills].sort((a, b) => {
    const statusPriority = { overdue: 0, due: 1, upcoming: 2, paid: 3 };
    return statusPriority[a.status] - statusPriority[b.status];
  });

  return (
    <section id="dashboard" className="py-16 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-6 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Financial Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See all your bills at a glance. Stay organized, stress-free, and always on top of your payments.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-1">${totalMonthly.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Total Monthly Bills</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in [animation-delay:0.1s]">
            <AlertCircle className="w-8 h-8 text-warning mx-auto mb-3" />
            <div className="text-3xl font-bold text-warning mb-1">{dueSoon}</div>
            <div className="text-sm text-muted-foreground">Bills Due Soon</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-fade-in [animation-delay:0.2s]">
            <Calendar className="w-8 h-8 text-success mx-auto mb-3" />
            <div className="text-3xl font-bold text-success mb-1">{paidThisMonth}</div>
            <div className="text-sm text-muted-foreground">Paid This Month</div>
          </Card>
        </div>

        {/* Bills Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Bills List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Your Bills</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-secondary to-success hover:shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Bill
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Add New Bill</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Service Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g., Netflix, Electricity"
                      />
                    </div>
                    <div>
                      <Label htmlFor="amount">Amount</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                        placeholder="0.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={formData.dueDate}
                        onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Streaming">Streaming</SelectItem>
                          <SelectItem value="Utilities">Utilities</SelectItem>
                          <SelectItem value="Insurance">Insurance</SelectItem>
                          <SelectItem value="Health">Health</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select value={formData.frequency} onValueChange={(value) => setFormData({...formData, frequency: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {formData.frequency === "custom" && (
                      <div className="space-y-3">
                        <div>
                          <Label>Custom Months (1-12)</Label>
                          <Slider
                            value={formData.customMonths}
                            onValueChange={(value) => setFormData({...formData, customMonths: value})}
                            max={12}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Every {formData.customMonths[0]} month{formData.customMonths[0] > 1 ? 's' : ''}
                          </p>
                        </div>
                        <div>
                          <Label>Custom Years (1-5)</Label>
                          <Slider
                            value={formData.customYears}
                            onValueChange={(value) => setFormData({...formData, customYears: value})}
                            max={5}
                            min={1}
                            step={1}
                            className="mt-2"
                          />
                          <p className="text-sm text-muted-foreground mt-1">
                            Every {formData.customYears[0]} year{formData.customYears[0] > 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                    )}
                    <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                      Add Bill
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {sortedBills.length === 0 ? (
              <Card className="p-12 text-center bg-gradient-to-br from-muted/20 to-muted/10">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Bills Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start by adding your first bill to take control of your finances
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-primary to-primary-glow">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Your First Bill
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    {/* Same form content as above */}
                  </DialogContent>
                </Dialog>
              </Card>
            ) : (
              <div className="space-y-4">
                {sortedBills.map((bill, index) => (
                  <div
                    key={bill.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <BillCard 
                      bill={bill} 
                      onStatusChange={handleStatusChange}
                      onEdit={handleEdit}
                      onNoteChange={handleNoteChange}
                      onDelete={handleDelete}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Add Form */}
          <Card className="lg:w-80 p-6 h-fit bg-gradient-to-br from-card to-accent/10 border-0 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Quick Add Bill</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Service Name</label>
                <input 
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                  placeholder="e.g., Netflix, Electricity" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <input 
                  type="number" 
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                  placeholder="0.00" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input 
                  type="date" 
                  className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Streaming</option>
                  <option>Utilities</option>
                  <option>Insurance</option>
                  <option>Health</option>
                  <option>Other</option>
                </select>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Add Bill
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;