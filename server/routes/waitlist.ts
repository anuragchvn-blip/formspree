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

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email to admin (ruchitha500058@gmail.com)
    // 3. Send confirmation email to user
    // 4. Add to email marketing list

    // For now, we'll log the submission
    console.log("New waitlist submission:", submission);

    // Simulate email notification to admin
    console.log(`📧 Notification would be sent to: ruchitha500058@gmail.com`);
    console.log(`Subject: New Meat Delicacy Waitlist Signup - ${submission.name}`);
    console.log(`Message: ${submission.name} (${submission.email}) joined the waitlist at ${submission.timestamp}`);

    res.status(200).json({
      success: true,
      message: "Successfully joined the waitlist",
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
