import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./sendgrid";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;
      
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const submission = await storage.createContactSubmission({ 
        firstName, lastName, email, subject, message 
      });

      try {
        await sendContactEmail({ firstName, lastName, email, subject, message });
        await storage.updateContactSubmissionEmailSent(submission.id, true);
      } catch (emailError) {
        console.error("Failed to send email notification, but submission saved:", emailError);
      }
      
      res.json({ success: true, message: "Message received successfully! We'll get back to you soon." });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  return httpServer;
}
