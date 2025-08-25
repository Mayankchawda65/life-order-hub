import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-accent/30 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
              Take Control of Your Bills & Subscriptions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Your Personal Assistant for Bills & Subscriptions. Ditch the stress and never miss a payment again with smart reminders and easy tracking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Visual Preview */}
          <div className="flex-1 relative">
            <Card className="p-6 bg-gradient-to-br from-card to-accent/20 shadow-xl border-0 transform rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Upcoming Bills</h3>
                  <span className="text-sm text-muted-foreground">This Week</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-warning/10 border border-warning/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <span className="font-medium">Netflix</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$15.99</div>
                      <div className="text-xs text-warning font-medium">Due in 2 days</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-success/10 border border-success/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="font-medium">Electricity</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$89.50</div>
                      <div className="text-xs text-success font-medium">Paid ✓</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="font-medium">Spotify</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$9.99</div>
                      <div className="text-xs text-primary font-medium">Due in 5 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;