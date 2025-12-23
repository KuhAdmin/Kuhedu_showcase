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

      await sendContactEmail({ firstName, lastName, email, subject, message });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error: any) {
      console.error("Error sending contact email:", error);
      if (error.response?.body?.errors) {
        console.error("SendGrid errors:", JSON.stringify(error.response.body.errors, null, 2));
      }
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  return httpServer;
}
