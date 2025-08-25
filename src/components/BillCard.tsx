import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, AlertTriangle, Clock, Edit } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Bill {
  id: number;
  name: string;
  amount: number;
  dueDate: string;
  category: string;
  status: "paid" | "due" | "overdue" | "upcoming";
}

interface BillCardProps {
  bill: Bill;
  onStatusChange?: (billId: number, newStatus: Bill['status']) => void;
  onEdit?: (billId: number) => void;
}

const BillCard = ({ bill, onStatusChange, onEdit }: BillCardProps) => {
  const { toast } = useToast();

  const handleMarkAsPaid = () => {
    onStatusChange?.(bill.id, "paid");
    toast({
      title: "Bill Marked as Paid",
      description: `${bill.name} has been marked as paid successfully.`,
    });
  };

  const handleEdit = () => {
    onEdit?.(bill.id);
    toast({
      title: "Edit Bill",
      description: `Opening edit form for ${bill.name}.`,
    });
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid": return "success";
      case "due": return "warning";
      case "overdue": return "destructive";
      case "upcoming": return "primary";
      default: return "muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <Check className="w-4 h-4" />;
      case "due": return <AlertTriangle className="w-4 h-4" />;
      case "overdue": return <AlertTriangle className="w-4 h-4" />;
      case "upcoming": return <Clock className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "paid": return "Paid ✓";
      case "due": return "Due Soon";
      case "overdue": return "Overdue!";
      case "upcoming": return "Upcoming";
      default: return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const statusColor = getStatusColor(bill.status);

  return (
    <Card className={cn(
      "p-4 border transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-pointer animate-fade-in-up hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:-translate-y-1",
      statusColor === "success" && "bg-gradient-to-r from-success/5 to-success/10 border-success/20 hover:border-success/40",
      statusColor === "warning" && "bg-gradient-to-r from-warning/5 to-warning/10 border-warning/20 hover:border-warning/40",
      statusColor === "destructive" && "bg-gradient-to-r from-destructive/5 to-destructive/10 border-destructive/20 hover:border-destructive/40",
      statusColor === "primary" && "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40"
    )}>
      <div className="flex items-center justify-between">
        {/* Left Side - Bill Info */}
        <div className="flex items-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm animate-float",
            "shadow-lg transition-all duration-300 hover:scale-110",
            statusColor === "success" && "bg-gradient-to-br from-success to-success/80 shadow-success/20",
            statusColor === "warning" && "bg-gradient-to-br from-warning to-warning/80 shadow-warning/20",
            statusColor === "destructive" && "bg-gradient-to-br from-destructive to-destructive/80 shadow-destructive/20",
            statusColor === "primary" && "bg-gradient-to-br from-primary to-primary/80 shadow-primary/20"
          )}>
            {bill.name.charAt(0).toUpperCase()}
          </div>
          
          <div>
            <h4 className="font-semibold text-lg">{bill.name}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-2 py-1 bg-accent rounded-full">{bill.category}</span>
              <span>•</span>
              <span>{formatDate(bill.dueDate)}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Amount & Status */}
        <div className="text-right">
          <div className="text-2xl font-bold">${bill.amount.toFixed(2)}</div>
          <div className={cn(
            "flex items-center gap-1 text-sm font-medium",
            statusColor === "success" && "text-success",
            statusColor === "warning" && "text-warning",
            statusColor === "destructive" && "text-destructive",
            statusColor === "primary" && "text-primary"
          )}>
            {getStatusIcon(bill.status)}
            {getStatusText(bill.status)}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        {bill.status !== "paid" && (
          <Button 
            size="sm" 
            onClick={handleMarkAsPaid}
            className="flex-1 bg-gradient-to-r from-success to-success/80 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Check className="w-4 h-4 mr-1" />
            Mark as Paid
          </Button>
        )}
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleEdit}
          className="flex-1 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
        >
          <Edit className="w-4 h-4 mr-1" />
          Edit
        </Button>
      </div>
    </Card>
  );
};

export default BillCard;