import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChefHat, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background meat-texture">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6 text-brand-charcoal" />
            <span className="text-lg font-semibold text-brand-charcoal">Meat Delicacy</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold text-brand-charcoal">404</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-brand-iron">
              Page Not Found
            </h2>
            <p className="text-lg text-brand-ash leading-relaxed">
              Looks like this page has gone missing, just like the old meat delivery services. 
              Let's get you back to something delicious.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="h-12 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              size="lg"
              className="h-12 bg-brand-charcoal hover:bg-brand-iron text-white"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-brand-charcoal" />
              <span className="font-medium text-brand-charcoal">Meat Delicacy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Meat Delicacy. Premium meat delivery reimagined.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
