import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Mail, Smartphone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Bill Manager?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for busy adults who want to take control of their financial life without the stress.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Email Reminders</h3>
              <p className="text-muted-foreground text-sm">Never miss a payment with friendly email notifications sent days before your bills are due.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-secondary/5 to-secondary/10">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Save Time Daily</h3>
              <p className="text-muted-foreground text-sm">Spend just 5 minutes setting up, then let our system handle the mental load of tracking everything.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-warning/5 to-warning/10">
              <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-muted-foreground text-sm">Your financial data is encrypted and secure. We never share your information with third parties.</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-accent/30 to-accent/10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Works Everywhere</h3>
              <p className="text-muted-foreground text-sm">Access your bills from any device. Perfect for busy lifestyles and on-the-go management.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Demo */}
      <Dashboard />

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

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
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