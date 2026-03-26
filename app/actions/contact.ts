"use server";

import { Resend } from "resend";

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface ContactResult {
  success: boolean;
  error?: string;
}

export async function submitContact(data: ContactData): Promise<ContactResult> {
  const { name, email, phone, message } = data;

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      error: "Contact form is not configured. Please email us directly.",
    };
  }

  const resend = new Resend(apiKey);
  const contactEmail = process.env.CONTACT_EMAIL || "hello@1322customs.com";

  try {
    await resend.emails.send({
      from: "1322 Customs Website <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1b2a; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>`
                : ""
            }
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #6b7280; font-weight: 600;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent from 1322customs.com contact form
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again or email us directly.",
    };
  }
}
