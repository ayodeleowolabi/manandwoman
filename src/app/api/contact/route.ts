import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, subject } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const recipients = process.env.CONTACT_RECIPIENTS || process.env.GMAIL_USER;

  await transporter.sendMail({
    from: `"Man & Woman Site" <${process.env.GMAIL_USER}>`,
    to: recipients,
    replyTo: email,
    subject: `New message from ${name}${subject ? ` — ${subject}` : ""}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0d0d0d;">
        <h2 style="border-bottom: 1px solid #e8e4de; padding-bottom: 1rem; color: #0d0d0d;">
          New Contact from Man & Woman
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 0.6rem 0; color: #6b6b6b; width: 100px;">Name</td>
            <td style="padding: 0.6rem 0; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 0.6rem 0; color: #6b6b6b;">Email</td>
            <td style="padding: 0.6rem 0;">
              <a href="mailto:${email}" style="color: #c8923a;">${email}</a>
            </td>
          </tr>
          ${subject ? `
          <tr>
            <td style="padding: 0.6rem 0; color: #6b6b6b;">Subject</td>
            <td style="padding: 0.6rem 0;">${subject}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 1.5rem; padding: 1.5rem; background: #faf9f7; border-left: 3px solid #c8923a;">
          <p style="margin: 0; line-height: 1.8; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 2rem; font-size: 0.75rem; color: #6b6b6b;">
          Sent from manandwomanduets.com — hit reply to respond directly to ${name}.
        </p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}