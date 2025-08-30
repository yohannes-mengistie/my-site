import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('API Key present:', !!process.env.RESEND_API_KEY); // Debug
    if (!process.env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Resend API key is missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const { name, email, message } = await request.json();
    console.log('Request body:', { name, email, message }); // Debug
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['yohannesmengistie634@gmail.com'], 
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('Resend response:', data); // Debug

    if (data.error) {
      console.error('Resend error:', data.error); // Debug
      return new Response(JSON.stringify({ error: data.error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API route error:', error); // Debug
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}