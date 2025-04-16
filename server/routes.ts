import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Message interface for contact form submissions
interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      
      // In a real application, you would send this message via email or store it
      // For now, we'll just return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      return res.status(200).json({ 
        message: "Message received successfully",
        success: true
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Server error processing your request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
