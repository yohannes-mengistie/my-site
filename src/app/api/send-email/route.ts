import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email is not configured on the server yet." },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["yohannesmengistie634@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email,
    });

    if (data.error) {
      return Response.json({ error: data.error.message }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully" });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
