import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight } from "lucide-react";

export function FormspreeForm() {
  return (
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
        name="_next"
        value={`${window.location.origin}/?success=true`}
      />
      <input
        type="hidden"
        name="message"
        value="New waitlist signup for Meat Delicacy"
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
  );
}
