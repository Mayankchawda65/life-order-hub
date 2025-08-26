import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Check, AlertTriangle, Clock, Edit, StickyNote, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface Bill {
  id: number;
  name: string;
  amount: number;
  dueDate: string;
  category: string;
  status: "paid" | "due" | "overdue" | "upcoming";
  note: string;
}

interface BillCardProps {
  bill: Bill;
  onStatusChange?: (billId: number, newStatus: Bill['status']) => void;
  onEdit?: (billId: number) => void;
  onNoteChange?: (billId: number, note: string) => void;
  onDelete?: (billId: number) => void;
}

const BillCard = ({ bill, onStatusChange, onEdit, onNoteChange, onDelete }: BillCardProps) => {
  const { toast } = useToast();
  const [noteText, setNoteText] = useState(bill.note);

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

  const handleSaveNote = () => {
    onNoteChange?.(bill.id, noteText);
    toast({
      title: "Note Saved",
      description: `Note for ${bill.name} has been updated.`,
    });
  };

  const handleDelete = () => {
    onDelete?.(bill.id);
    toast({
      title: "Bill Deleted",
      description: `${bill.name} has been deleted permanently.`,
      variant: "destructive",
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
      "p-4 border transition-all duration-500 hover:shadow-xl hover:scale-[1.02] cursor-pointer animate-fade-in-up hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 relative",
      statusColor === "success" && "bg-gradient-to-r from-success/5 to-success/10 border-success/20 hover:border-success/40",
      statusColor === "warning" && "bg-gradient-to-r from-warning/5 to-warning/10 border-warning/20 hover:border-warning/40",
      statusColor === "destructive" && "bg-gradient-to-r from-destructive/5 to-destructive/10 border-destructive/20 hover:border-destructive/40",
      statusColor === "primary" && "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40"
    )}>
      {/* Delete Button */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-destructive/20 hover:text-destructive"
          >
            <X className="w-3 h-3" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Bill</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{bill.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/80">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
            {bill.note && (
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <StickyNote className="w-3 h-3" />
                <span className="truncate max-w-[200px]">{bill.note}</span>
              </div>
            )}
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
        
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              size="sm" 
              variant="outline"
              className="hover:bg-warning/10 hover:border-warning hover:scale-105 transition-all duration-300"
            >
              <StickyNote className="w-4 h-4 mr-1" />
              Note
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Note for {bill.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note about this bill..."
                className="min-h-[100px]"
              />
              <Button onClick={handleSaveNote} className="w-full">
                Save Note
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default BillCard;