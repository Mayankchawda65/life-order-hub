import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, DollarSign, AlertCircle } from "lucide-react";
import BillCard from "./BillCard";
import { useToast } from "@/hooks/use-toast";

const mockBills = [
  { id: 1, name: "Netflix", amount: 15.99, dueDate: "2024-08-27", category: "Streaming", status: "due" as const },
  { id: 2, name: "Electric Bill", amount: 89.50, dueDate: "2024-08-24", category: "Utilities", status: "paid" as const },
  { id: 3, name: "Spotify", amount: 9.99, dueDate: "2024-08-30", category: "Streaming", status: "upcoming" as const },
  { id: 4, name: "Phone Bill", amount: 45.00, dueDate: "2024-08-28", category: "Utilities", status: "due" as const },
  { id: 5, name: "Gym Membership", amount: 29.99, dueDate: "2024-09-01", category: "Health", status: "upcoming" as const },
  { id: 6, name: "Car Insurance", amount: 120.00, dueDate: "2024-08-26", category: "Insurance", status: "overdue" as const },
];

const Dashboard = () => {
  const { toast } = useToast();
  const [bills, setBills] = useState(mockBills);
  
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
    // Placeholder for edit functionality
    console.log('Edit bill:', billId);
  };

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
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-bounce-in">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3 animate-float" />
            <div className="text-3xl font-bold text-primary mb-1">${totalMonthly.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Total Monthly Bills</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-bounce-in [animation-delay:0.1s]">
            <AlertCircle className="w-8 h-8 text-warning mx-auto mb-3 animate-float [animation-delay:0.5s]" />
            <div className="text-3xl font-bold text-warning mb-1">{dueSoon}</div>
            <div className="text-sm text-muted-foreground">Bills Due Soon</div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-success/10 to-success/5 border border-success/20 hover:shadow-xl hover:scale-105 transition-all duration-500 animate-bounce-in [animation-delay:0.2s]">
            <Calendar className="w-8 h-8 text-success mx-auto mb-3 animate-float [animation-delay:1s]" />
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
              <Button className="bg-gradient-to-r from-secondary to-success hover:shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Add New Bill
              </Button>
            </div>

            <div className="space-y-4">
              {bills.map((bill, index) => (
                <div
                  key={bill.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BillCard 
                    bill={bill} 
                    onStatusChange={handleStatusChange}
                    onEdit={handleEdit}
                  />
                </div>
              ))}
            </div>
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