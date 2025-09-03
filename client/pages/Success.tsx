import { Button } from "@/components/ui/button";
import { ChefHat, CheckCircle, Home } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-background meat-texture">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-brand-charcoal" />
            <span className="text-lg font-semibold text-brand-charcoal">
              Meat Delicacy
            </span>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal">
                Welcome to the Waitlist!
              </h1>
              <p className="text-xl text-brand-ash leading-relaxed">
                Thank you for joining the Meat Delicacy waitlist. You're now
                among the exclusive group who will get early access to premium
                meat delivery.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                What happens next?
              </h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-iron rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Ruchitha has been notified of your signup
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-iron rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    You'll receive updates about our launch progress
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-iron rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    Be the first to experience premium meat delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => (window.location.href = "/")}
            size="lg"
            className="bg-brand-charcoal hover:bg-brand-iron text-white"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-brand-charcoal" />
              <span className="font-medium text-brand-charcoal">
                Meat Delicacy
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Meat Delicacy. Premium meat delivery reimagined.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
