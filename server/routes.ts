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

  // Blog views endpoints
  
  // Get all blog views
  app.get("/api/views", async (req, res) => {
    try {
      const views = await storage.getAllViews();
      return res.status(200).json(views);
    } catch (error) {
      console.error("Error fetching views:", error);
      return res.status(500).json({ message: "Server error fetching views" });
    }
  });

  // Get views for a specific blog post
  app.get("/api/views/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const views = await storage.getViewsBySlug(slug);
      return res.status(200).json({ slug, views });
    } catch (error) {
      console.error("Error fetching views:", error);
      return res.status(500).json({ message: "Server error fetching views" });
    }
  });

  // Increment views for a blog post
  app.post("/api/views/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const views = await storage.incrementViews(slug);
      return res.status(200).json({ slug, views });
    } catch (error) {
      console.error("Error incrementing views:", error);
      return res.status(500).json({ message: "Server error incrementing views" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
