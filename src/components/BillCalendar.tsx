import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { format, parseISO, isSameDay } from "date-fns";

interface Bill {
  id: number;
  name: string;
  amount: number;
  dueDate: string;
  category: string;
  status: "paid" | "due" | "overdue" | "upcoming";
}

interface BillCalendarProps {
  bills: Bill[];
}

const BillCalendar = ({ bills }: BillCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const getBillsForDate = (date: Date) => {
    return bills.filter(bill => 
      isSameDay(parseISO(bill.dueDate), date)
    );
  };

  const billDates = bills.map(bill => parseISO(bill.dueDate));
  
  const selectedDateBills = selectedDate ? getBillsForDate(selectedDate) : [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue": return "destructive";
      case "due": return "warning";
      case "upcoming": return "primary";
      case "paid": return "success";
      default: return "secondary";
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Bill Calendar</h2>
          <p className="text-muted-foreground">
            View your bill deadlines at a glance and plan ahead
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calendar */}
          <Card className="p-6 bg-gradient-to-br from-card to-accent/5">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-0 mx-auto"
              modifiers={{
                overdue: bills.filter(b => b.status === 'overdue').map(b => parseISO(b.dueDate)),
                due: bills.filter(b => b.status === 'due').map(b => parseISO(b.dueDate)),
                upcoming: bills.filter(b => b.status === 'upcoming').map(b => parseISO(b.dueDate)),
                paid: bills.filter(b => b.status === 'paid').map(b => parseISO(b.dueDate)),
              }}
              modifiersStyles={{
                overdue: { 
                  backgroundColor: "hsl(var(--destructive))",
                  color: "white",
                  fontWeight: "bold"
                },
                due: { 
                  backgroundColor: "hsl(var(--warning))",
                  color: "white",
                  fontWeight: "bold"
                },
                upcoming: { 
                  backgroundColor: "hsl(142 70% 70%)",
                  color: "white",
                  fontWeight: "bold"
                },
                paid: { 
                  backgroundColor: "hsl(var(--success))",
                  color: "white",
                  fontWeight: "bold"
                }
              }}
            />
          </Card>

          {/* Bills for Selected Date */}
          <Card className="p-6 bg-gradient-to-br from-card to-accent/5">
            <h3 className="text-xl font-semibold mb-4">
              {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Select a date"}
            </h3>
            
            {selectedDateBills.length > 0 ? (
              <div className="space-y-3">
                {selectedDateBills.map(bill => (
                  <div key={bill.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                    <div>
                      <div className="font-medium">{bill.name}</div>
                      <div className="text-sm text-muted-foreground">{bill.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${bill.amount.toFixed(2)}</div>
                      <Badge variant={getStatusColor(bill.status) as any} className="text-xs">
                        {bill.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No bills due on this date</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BillCalendar;