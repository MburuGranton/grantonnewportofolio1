import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Log the contact form submission
  console.log("Contact form submission:", {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  });

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with email service (SendGrid, Nodemailer, etc.)

  return res.status(200).json({
    message: "Thank you for your message! I will get back to you soon.",
    success: true,
  });
}
