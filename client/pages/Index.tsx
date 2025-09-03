import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ChefHat, Utensils, ArrowRight } from "lucide-react";

export default function Index() {
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

                {/* Pure HTML Form for Deployment Reliability */}
                <form
                  action="https://formspree.io/f/mvgbwenq"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
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
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="h-12"
                      required
                    />
                  </div>

                  {/* Hidden fields for Formspree */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Meat Delicacy Waitlist Signup"
                  />
                  <input
                    type="hidden"
                    name="message"
                    value="New waitlist signup for Meat Delicacy"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value={`${window.location.origin}/success`}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-brand-charcoal hover:bg-brand-iron text-white font-medium"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Join Waitlist
                      <ArrowRight className="h-4 w-4" />
                    </div>
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
