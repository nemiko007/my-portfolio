import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // --- Environment Variable Validation ---
  const apiKey = import.meta.env.BREVO_API_KEY;
  const senderEmail = import.meta.env.EMAIL_USER;
  const receiverEmail = import.meta.env.EMAIL_TO;

  if (!apiKey || !senderEmail || !receiverEmail) {
    console.error("CRITICAL: One or more environment variables are missing. Please check your .env file and restart the server.");
    return redirect('/?contact=error#contact', 307);
  }

  // --- Form Data Parsing ---
  const bodyText = await request.text();
  const formData = new URLSearchParams(bodyText);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    console.error("Form data is missing required fields.");
    return redirect('/?contact=error#contact', 307);
  }

  // --- Brevo API Call ---
  const brevoApiUrl = 'https://api.brevo.com/v3/smtp/email';
  const emailData = {
    sender: {
      name: "My Portfolio Contact Form", // Use a static, safe name
      email: senderEmail,
    },
    to: [ { email: receiverEmail } ],
    // replyTo is omitted for safety
    subject: `Message from Portfolio Contact Form`, // Use a static, safe subject
    htmlContent: `
      <html><body>
        <h1>New message from your portfolio!</h1>
        <p>
          <strong>From:</strong> ${name.toString()}<br>
          <strong>Email (Reply to this address):</strong> ${email.toString()}
        </p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message.toString().replace(/\n/g, '<br>')}</p>
      </body></html>
    `,
  };

  try {
    const response = await fetch(brevoApiUrl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      throw new Error(`Brevo API responded with status ${response.status}`);
    }

    return redirect('/?contact=success#contact', 307);

  } catch (error) {
    console.error("Failed to send email via Brevo:", error);
    return redirect('/?contact=error#contact', 307);
  }
};