import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import BillCalendar from "@/components/BillCalendar";
import FinancialTools from "@/components/FinancialTools";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Mail, Smartphone, MapPin } from "lucide-react";

const mockBills = [
  { id: 1, name: "Netflix", amount: 15.99, dueDate: "2024-08-27", category: "Streaming", status: "due" as const, note: "" },
  { id: 2, name: "Electric Bill", amount: 89.50, dueDate: "2024-08-24", category: "Utilities", status: "paid" as const, note: "Paid via autopay" },
  { id: 3, name: "Spotify", amount: 9.99, dueDate: "2024-08-30", category: "Streaming", status: "upcoming" as const, note: "" },
  { id: 4, name: "Phone Bill", amount: 45.00, dueDate: "2024-08-28", category: "Utilities", status: "due" as const, note: "Call to negotiate rate" },
  { id: 5, name: "Gym Membership", amount: 29.99, dueDate: "2024-09-01", category: "Health", status: "upcoming" as const, note: "" },
  { id: 6, name: "Car Insurance", amount: 120.00, dueDate: "2024-08-26", category: "Insurance", status: "overdue" as const, note: "Need to pay ASAP!" },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div id="hero" className="pt-16">
        <Hero />
      </div>

      {/* Dashboard Demo */}
      <Dashboard />

      {/* Bill Calendar */}
      <div id="calendar">
        <BillCalendar bills={mockBills} />
      </div>

      {/* Financial Tools */}
      <FinancialTools />
      
      {/* Features Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-6 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Why Choose Our Bill Manager?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.1s]">
              Designed specifically for busy adults who want to take control of their financial life without the stress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-primary/5 to-primary/10 animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Email Reminders</h3>
              <p className="text-muted-foreground text-sm">Never miss a payment with friendly email notifications sent days before your bills are due.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 animate-scale-in [animation-delay:0.1s]">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-full flex items-center justify-center mx-auto mb-4 animate-glow [animation-delay:0.5s]">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Save Time Daily</h3>
              <p className="text-muted-foreground text-sm">Spend just 5 minutes setting up, then let our system handle the mental load of tracking everything.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-warning/5 to-warning/10 animate-scale-in [animation-delay:0.2s]">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow [animation-delay:1s]">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">Your financial data is encrypted and secure. We never share your information with third parties.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-accent/30 to-accent/10 animate-scale-in [animation-delay:0.3s]">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 animate-glow [animation-delay:1.5s]">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Works Everywhere</h3>
              <p className="text-muted-foreground text-sm">Access your bills from any device. Perfect for busy lifestyles and on-the-go management.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already simplified their financial life. Start your stress-free bill management journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
            <button className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.1s]">
            Have questions or need support? We're here to help you take control of your financial life.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-3 text-lg animate-slide-in-left">
              <Mail className="w-6 h-6 text-primary animate-float" />
              <a href="mailto:meerachawda49255@gmail.com" className="text-primary hover:text-primary-glow transition-colors">
                meerachawda49255@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3 text-lg animate-slide-in-right">
              <MapPin className="w-6 h-6 text-primary animate-float [animation-delay:0.5s]" />
              <span className="text-muted-foreground">Chattisgarh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Life-Admin & Bills Manager</h3>
            <p className="text-background/80 mb-6">Your Personal Assistant for Bills & Subscriptions</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-glow transition-colors">Contact Support</a>
            </div>
            <div className="mt-6 text-background/60 text-sm">
              © 2024 Life-Admin & Bills Manager. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;