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
  const contactEmail = process.env.CONTACT_EMAIL || "shawn@1322customs.com";
  const firstName = name.split(" ")[0];

  try {
    // Send lead notification to you
    await resend.emails.send({
      from: "1322 Customs Website <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0c1b2a; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
            New Lead from 1322customs.com
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
            <p style="margin: 0 0 8px; color: #6b7280; font-weight: 600;">Details</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; color: #9ca3af; font-size: 12px;">
            Sent from 1322customs.com lead form
          </p>
        </div>
      `,
    });

    // Send confirmation email to the submitter
    await resend.emails.send({
      from: "1322 Customs <onboarding@resend.dev>",
      to: email,
      replyTo: contactEmail,
      subject: "We got your request — here's what happens next",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #1a3d5c;">
          <div style="padding: 32px 0 24px; border-bottom: 2px solid #2563eb;">
            <h1 style="margin: 0; font-size: 24px; color: #0c1b2a;">
              Hey ${firstName}, we're on it.
            </h1>
          </div>

          <div style="padding: 24px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 16px;">
              Thanks for reaching out to 1322 Customs. We've received your request
              and our team is already reviewing it.
            </p>

            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 0 0 24px;">
              Here's what happens next:
            </p>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 16px; vertical-align: top; width: 36px;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">1</div>
                </td>
                <td style="padding: 12px 0;">
                  <strong style="color: #0c1b2a;">We review your submission</strong>
                  <p style="margin: 4px 0 0; font-size: 14px; color: #6b7280;">We'll look at your current site and put together some initial thoughts.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; vertical-align: top;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">2</div>
                </td>
                <td style="padding: 12px 0;">
                  <strong style="color: #0c1b2a;">We schedule a quick call</strong>
                  <p style="margin: 4px 0 0; font-size: 14px; color: #6b7280;">A 15-minute conversation to understand your goals and answer any questions.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; vertical-align: top;">
                  <div style="width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #2563eb, #4f46e5); color: white; font-size: 13px; font-weight: 700; text-align: center; line-height: 28px;">3</div>
                </td>
                <td style="padding: 12px 0;">
                  <strong style="color: #0c1b2a;">We agree on scope &amp; price</strong>
                  <p style="margin: 4px 0 0; font-size: 14px; color: #6b7280;">Simple, transparent proposal. No surprises, no hidden fees.</p>
                </td>
              </tr>
            </table>

            <p style="font-size: 16px; line-height: 1.6; color: #374151; margin: 24px 0 0;">
              Expect to hear from us within 24 hours. If you need anything sooner,
              just reply to this email.
            </p>
          </div>

          <div style="padding: 20px 0; border-top: 1px solid #e8e0d4; margin-top: 16px;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              — The 1322 Customs Team
            </p>
            <p style="margin: 8px 0 0; font-size: 12px; color: #9ca3af;">
              1322 Customs LLC &bull; Charleston, SC &bull;
              <a href="https://1322customs.com" style="color: #2563eb; text-decoration: none;">1322customs.com</a>
            </p>
          </div>
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
