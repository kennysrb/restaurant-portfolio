import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set.");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

interface ReservationBody {
  name: string;
  phone: string;
  date: string;
  time: string;
}

export async function POST(request: Request) {
  try {
    const body: ReservationBody = await request.json();
    const { name, phone, date, time } = body;

    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const resend = getResend();

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Bistro Central <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL || "info@bistrocentral.si",
      subject: `New Reservation: ${name} — ${formattedDate} at ${time}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; color: #f5f5f5; border-radius: 8px; overflow: hidden;">
          <div style="background: #d4a853; padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 24px; color: #1a1a1a;">New Reservation Request</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a3a3a3; width: 120px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a3a3a3;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <a href="tel:${phone.replace(/\s/g, "")}" style="color: #d4a853; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); color: #a3a3a3;">Date</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); font-weight: 600;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #a3a3a3;">Time</td>
                <td style="padding: 12px 0; font-weight: 600;">${time}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #0f0f0f; text-align: center; font-size: 12px; color: #a3a3a3;">
            Bistro Central Ljubljana — Reservation System
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reservation email failed:", error);
    return NextResponse.json(
      { error: "Failed to send reservation. Please try again." },
      { status: 500 }
    );
  }
}
