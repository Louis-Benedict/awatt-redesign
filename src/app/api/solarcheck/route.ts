import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { roofArea, orientation, consumption, zip, firstName, lastName, email } =
    await request.json();

  if (!roofArea || !orientation || !consumption || !zip || !firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Solarcheck <onboarding@resend.dev>',
    to: ['anfrage@pv-hh.de'],
    replyTo: email,
    subject: `Neuer Solarcheck: ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `E-Mail: ${email}`,
      '',
      `Dachfläche: ${roofArea} m²`,
      `Ausrichtung: ${orientation}`,
      `Stromverbrauch: ${consumption} kWh/Jahr`,
      `Postleitzahl: ${zip}`,
    ].join('\n'),
  });

  if (error) {
    console.error('[solarcheck] Resend error:', error);
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
