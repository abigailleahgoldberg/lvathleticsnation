import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'invalid email' }, { status: 400 });
    }
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY || '',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [5],
        updateEnabled: true,
        attributes: { SOURCE: 'lvathleticsnation.com', SIGNED_UP: new Date().toISOString().split('T')[0] },
      }),
    });
    if (res.ok || res.status === 204) return NextResponse.json({ ok: true });
    const body = await res.json().catch(() => ({}));
    if (body?.code === 'duplicate_parameter') return NextResponse.json({ ok: true });
    return NextResponse.json({ error: 'service_error' }, { status: 500 });
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
