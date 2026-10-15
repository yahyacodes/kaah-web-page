import { validateInquiry } from '@/lib/inquiry';
import { formatInquiry } from '@/lib/whatsapp';

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin)
    return Response.json({ error: 'Invalid request origin.' }, { status: 403 });
  let body;
  try {
    const raw = await request.text();
    if (raw.length > 10000)
      return Response.json({ error: 'Request is too large.' }, { status: 413 });
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'Please submit valid request details.' }, { status: 400 });
  }
  if (
    !body ||
    !['flight', 'cargo'].includes(body.type) ||
    !body.details ||
    typeof body.details !== 'object' ||
    Array.isArray(body.details)
  )
    return Response.json({ error: 'Invalid inquiry.' }, { status: 400 });
  const details: Record<string, string> = {};
  for (const key of [
    'name',
    'phone',
    'from',
    'to',
    'departure',
    'return',
    'passengers',
    'cabin',
    'weight',
    'cargoType',
    'description',
  ]) {
    if (body.details[key] !== undefined && typeof body.details[key] !== 'string')
      return Response.json({ error: 'Invalid field value.' }, { status: 400 });
    details[key] = (body.details[key] || '').trim();
  }
  const error = validateInquiry(body.type, details);
  if (error) return Response.json({ error }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_EMAIL_TO;
  const from = process.env.INQUIRY_EMAIL_FROM;
  if (!apiKey || !to || !from)
    return Response.json(
      { error: 'Email requests are temporarily unavailable. Please contact us through WhatsApp.' },
      { status: 503 },
    );
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New Kaah ${body.type === 'flight' ? 'flight inquiry' : 'cargo quote request'}`,
        text: formatInquiry(body.type, details),
      }),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (!response.ok || !result.id) throw new Error('Email provider did not accept the request');
    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'We could not send your request. Please try again or contact us through WhatsApp.' },
      { status: 502 },
    );
  }
}
