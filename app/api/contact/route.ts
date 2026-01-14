import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Server-side validation
    if (!body.name?.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }
    if (!body.surname?.trim()) {
      return NextResponse.json(
        { error: "Surname is required" },
        { status: 400 }
      );
    }
    if (!body.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    if (!body.phone?.trim()) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }
    if (!body.message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_EMAIL;

    if (!recipientEmail) {
      console.error("CONTACT_EMAIL environment variable not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: "All Sorted Contact Form <onboarding@resend.dev>",
      to: recipientEmail,
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name} ${body.surname}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name} ${body.surname}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <h3>Message:</h3>
        <p>${body.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
