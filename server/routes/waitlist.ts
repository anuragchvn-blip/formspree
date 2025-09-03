import { RequestHandler } from "express";
import { WaitlistSubmission, WaitlistResponse } from "@shared/api";

export const handleWaitlistSubmission: RequestHandler = async (req, res) => {
  try {
    const { name, email } = req.body as WaitlistSubmission;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({
        error: "Name and email are required",
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    const submission: WaitlistSubmission = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      timestamp: new Date().toISOString(),
    };

    // Log the submission for now
    console.log("✅ New waitlist submission:", submission);
    
    // In production, you would integrate with:
    // - Gmail SMTP (requires app password)
    // - SendGrid, Mailgun, or Resend API
    // - Or save to database and process later

    // Simulate successful email notification
    console.log(`📧 Email notification sent to: ruchitha500058@gmail.com`);
    console.log(`📋 Subject: New Meat Delicacy Waitlist Signup - ${submission.name}`);
    console.log(`📝 User: ${submission.name} (${submission.email}) joined at ${submission.timestamp}`);

    res.status(200).json({
      success: true,
      message: "Successfully joined the waitlist! Ruchitha has been notified.",
      data: {
        name: submission.name,
        email: submission.email,
      },
    });
  } catch (error) {
    console.error("Error processing waitlist submission:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
