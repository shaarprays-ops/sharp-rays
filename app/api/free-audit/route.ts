
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing Resend environment variables.");

      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const name = String(data.name || "").trim();
    const businessName = String(data.businessName || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const rawWebsite = String(data.website || "").trim();
    const service = String(data.service || "").trim();
    const challenge = String(data.challenge || "").trim();

    if (!name || !email || !service) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and service are required.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const website = rawWebsite
      ? /^https?:\/\//i.test(rawWebsite)
        ? rawWebsite
        : `https://${rawWebsite}`
      : "";

    const resend = new Resend(apiKey);

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    });

    const safe = {
      name: escapeHtml(name),
      businessName: escapeHtml(businessName || "Not provided"),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      website: escapeHtml(website || "Not provided"),
      service: escapeHtml(service),
      challenge: escapeHtml(challenge || "Not provided"),
      submittedAt: escapeHtml(submittedAt),
    };

    // 1. Send enquiry notification to Sharp Rays
    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Free Audit Request — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#122847;">
          <div style="background:#122847;padding:28px 32px;color:#ffffff;">
            <h1 style="margin:0;font-size:24px;">New Free Audit Request</h1>
            <p style="margin:8px 0 0;color:#dce8f5;">Sharp Rays Website</p>
          </div>

          <div style="padding:28px 32px;border:1px solid #e5eaf0;">
            <p>A new digital audit request has been submitted.</p>

            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Name</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.name}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Business</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.businessName}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Email</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.email}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Phone</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.phone}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Website</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.website}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Service</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.service}</td></tr>
              <tr><td style="padding:12px;border-bottom:1px solid #eee;"><b>Challenge</b></td><td style="padding:12px;border-bottom:1px solid #eee;">${safe.challenge}</td></tr>
            </table>

            <p style="margin-top:24px;color:#718096;font-size:12px;">
              Submitted: ${safe.submittedAt}
            </p>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error("Admin email error:", adminEmail.error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your request. Please try again.",
        },
        { status: 500 }
      );
    }

    // 2. Send confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We Received Your Free Audit Request | Sharp Rays",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#122847;border:1px solid #e5eaf0;">
          <div style="background:#122847;padding:30px;color:#ffffff;">
            <h1 style="margin:0;font-size:25px;">Thank You, ${safe.name}!</h1>
            <p style="margin:10px 0 0;color:#dce8f5;">Your audit request has reached Sharp Rays.</p>
          </div>

          <div style="padding:30px;">
            <p style="font-size:15px;line-height:1.8;">
              Thank you for sharing your business details with us.
              We've successfully received your free digital marketing audit request.
            </p>

            <div style="background:#f5f8fc;padding:20px;border-radius:10px;margin:24px 0;">
              <b>Your selected area:</b>
              <p style="margin-bottom:0;">${safe.service}</p>
            </div>

            <p style="font-size:14px;line-height:1.8;color:#52647a;">
              Our team will review the information you provided and consider
              the most relevant areas to explore.
            </p>

            <p style="margin-top:28px;font-size:14px;">
              Regards,<br/>
              <b>Team Sharp Rays</b><br/>
              <a href="https://www.sharprays.com" style="color:#6285ad;">www.sharprays.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (customerEmail.error) {
      // The admin notification was already sent successfully.
      console.error("Customer confirmation email error:", customerEmail.error);
    }

    return NextResponse.json({
      success: true,
      message: "Audit request received successfully.",
    });
  } catch (error) {
    console.error("FREE AUDIT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit audit request.",
      },
      { status: 500 }
    );
  }
}
