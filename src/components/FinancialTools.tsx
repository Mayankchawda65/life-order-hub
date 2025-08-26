import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TrendingUp, PiggyBank, Target, DollarSign, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const savingTips = [
  "Set up automatic transfers to savings accounts",
  "Use the 50/30/20 budgeting rule",
  "Cancel unused subscriptions regularly",
  "Buy generic brands for everyday items",
  "Meal prep to reduce food expenses",
  "Use cashback credit cards responsibly",
  "Compare insurance rates annually",
  "Negotiate bills and subscriptions"
];

const investmentOptions = [
  { name: "High-Yield Savings", risk: "Low", return: "2-4%", description: "Safe option for emergency funds" },
  { name: "Index Funds", risk: "Medium", return: "7-10%", description: "Diversified stock market exposure" },
  { name: "Real Estate", risk: "Medium-High", return: "8-12%", description: "Property investment opportunities" },
  { name: "Bonds", risk: "Low-Medium", return: "3-6%", description: "Fixed income investments" },
  { name: "Crypto", risk: "High", return: "Variable", description: "High-risk, high-reward digital assets" },
];

const FinancialTools = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: "Emergency Fund", target: 15000, current: 6750, description: "Save 3-6 months of expenses" },
    { id: 2, name: "Vacation Fund", target: 5000, current: 1250, description: "Save $5,000 for dream vacation" }
  ]);
  
  const [cashFlow, setCashFlow] = useState({
    monthlyIncome: 4500,
    monthlyExpenses: 3200,
    netSavings: 1300
  });

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "success";
      case "Medium": return "warning";
      case "Medium-High": return "warning";
      case "High": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Financial Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Smart tips and investment options to grow your wealth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Tips to Save Money */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-success/5 to-success/10 border border-success/20">
                <PiggyBank className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Money Saving Tips</h3>
                <p className="text-sm text-muted-foreground">Learn how to reduce expenses</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-success" />
                  Money Saving Tips
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-3">
                {savingTips.map((tip, index) => (
                  <div key={index} className="p-3 bg-success/5 rounded-lg border border-success/20">
                    <p className="text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Investment Options */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Investment Options</h3>
                <p className="text-sm text-muted-foreground">Explore ways to invest</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Investment Options
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                {investmentOptions.map((option, index) => (
                  <div key={index} className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{option.name}</h4>
                      <div className="flex gap-2">
                        <Badge variant={getRiskColor(option.risk) as any} className="text-xs">
                          {option.risk} Risk
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {option.return}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Goals */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-warning/5 to-warning/10 border border-warning/20">
                <Target className="w-12 h-12 text-warning mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Financial Goals</h3>
                <p className="text-sm text-muted-foreground">Set and track your goals</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-warning" />
                  Financial Goals
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{goal.name}</h4>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Goal: {goal.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="goalName">Goal Name</Label>
                              <Input id="goalName" defaultValue={goal.name} />
                            </div>
                            <div>
                              <Label htmlFor="targetAmount">Target Amount</Label>
                              <Input id="targetAmount" type="number" defaultValue={goal.target} />
                            </div>
                            <div>
                              <Label htmlFor="currentAmount">Current Amount</Label>
                              <Input id="currentAmount" type="number" defaultValue={goal.current} />
                            </div>
                            <Button className="w-full">Update Goal</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{goal.description}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-warning h-2 rounded-full" 
                        style={{ width: `${Math.min((goal.current / goal.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.round((goal.current / goal.target) * 100)}% complete (${goal.current.toLocaleString()} / ${goal.target.toLocaleString()})
                    </p>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Cash Flow */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-6 text-center cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
                <DollarSign className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Cash Flow</h3>
                <p className="text-sm text-muted-foreground">Future financial projections</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-secondary" />
                  Future Cash Flow Projection
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">Cash Flow Analysis</h4>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Cash Flow</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="income">Monthly Income</Label>
                          <Input id="income" type="number" defaultValue={cashFlow.monthlyIncome} />
                        </div>
                        <div>
                          <Label htmlFor="expenses">Monthly Expenses</Label>
                          <Input id="expenses" type="number" defaultValue={cashFlow.monthlyExpenses} />
                        </div>
                        <Button className="w-full">Update Cash Flow</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-success/5 rounded-lg text-center">
                    <h4 className="font-semibold text-success">Monthly Income</h4>
                    <p className="text-2xl font-bold">${cashFlow.monthlyIncome.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-destructive/5 rounded-lg text-center">
                    <h4 className="font-semibold text-destructive">Monthly Expenses</h4>
                    <p className="text-2xl font-bold">${cashFlow.monthlyExpenses.toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <h4 className="font-semibold text-primary">Net Savings</h4>
                    <p className="text-2xl font-bold">${cashFlow.netSavings.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-card rounded-lg border">
                  <h4 className="font-semibold mb-2">6-Month Projection</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on current spending patterns, you'll save approximately <span className="font-semibold text-primary">${(cashFlow.netSavings * 6).toLocaleString()}</span> in the next 6 months.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default FinancialTools;