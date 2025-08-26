import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, PiggyBank, Target, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
                <div className="p-4 bg-warning/5 rounded-lg border border-warning/20">
                  <h4 className="font-semibold mb-2">Emergency Fund</h4>
                  <p className="text-sm text-muted-foreground mb-2">Save 3-6 months of expenses</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">45% complete</p>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-2">Vacation Fund</h4>
                  <p className="text-sm text-muted-foreground mb-2">Save $5,000 for dream vacation</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">25% complete</p>
                </div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-success/5 rounded-lg text-center">
                    <h4 className="font-semibold text-success">Monthly Income</h4>
                    <p className="text-2xl font-bold">$4,500</p>
                  </div>
                  <div className="p-4 bg-destructive/5 rounded-lg text-center">
                    <h4 className="font-semibold text-destructive">Monthly Expenses</h4>
                    <p className="text-2xl font-bold">$3,200</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg text-center">
                    <h4 className="font-semibold text-primary">Net Savings</h4>
                    <p className="text-2xl font-bold">$1,300</p>
                  </div>
                </div>
                
                <div className="p-4 bg-card rounded-lg border">
                  <h4 className="font-semibold mb-2">6-Month Projection</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on current spending patterns, you'll save approximately <span className="font-semibold text-primary">$7,800</span> in the next 6 months.
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