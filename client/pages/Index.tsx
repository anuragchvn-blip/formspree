import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, ChefHat, Utensils, ArrowRight } from "lucide-react";
import { WaitlistResponse } from "@shared/api";

export default function Index() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please fill in both your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree webhook
      const response = await fetch("https://formspree.io/f/mvgbwenq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: `New waitlist signup for Meat Delicacy from ${name} (${email}) at ${new Date().toLocaleString()}`,
          _subject: `New Meat Delicacy Waitlist Signup - ${name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Welcome to the waitlist!",
          description: "You've been added and Ruchitha will be notified.",
        });
        setEmail("");
        setName("");
      } else {
        throw new Error("Failed to join waitlist");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background meat-texture">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-brand-charcoal" />
              <span className="text-lg font-semibold text-brand-charcoal">
                Meat Delicacy
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Utensils className="h-4 w-4" />
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pearl rounded-full text-sm font-medium text-brand-charcoal border border-border">
                  <span className="w-2 h-2 bg-brand-ash rounded-full animate-pulse"></span>
                  Launching Soon
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-brand-charcoal leading-tight">
                  No more{" "}
                  <span className="line-through text-brand-ash decoration-2">
                    Licious
                  </span>
                  <br />
                  but yes to{" "}
                  <span className="text-brand-iron">Meat Delicacy</span>
                </h1>

                <p className="text-xl text-brand-ash leading-relaxed">
                  Experience premium meat delivery that redefines quality,
                  taste, and freshness. Join our exclusive waitlist for early
                  access to the finest cuts.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-brand-smoke">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-iron rounded-full"></div>
                  Premium Quality
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-iron rounded-full"></div>
                  Farm Fresh
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-iron rounded-full"></div>
                  Fast Delivery
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Join the Waitlist
                  </h2>
                  <p className="text-muted-foreground">
                    Be among the first to experience Meat Delicacy
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-brand-charcoal hover:bg-brand-iron text-white font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Joining...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Join Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
