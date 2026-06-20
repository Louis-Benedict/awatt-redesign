import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { subject, firstName, lastName, email, phone, message } = await request.json();

  if (!firstName || !lastName || !email || !message || !subject) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Anfrage <onboarding@resend.dev> ',
    to: ['anfrage@pv-hh.de'],
    replyTo: email,
    subject: `Neue Anfrage: ${subject}`,
    text: [
      `Leistung: ${subject}`,
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email}`,
      phone ? `Telefon: ${phone}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n'),
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
