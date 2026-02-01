import fs from 'fs';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, company } = body || {};

    // simple honeypot to deter bots
    if (company && company.trim().length > 0) {
      return new Response(JSON.stringify({ ok: false, error: 'spam' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'missing_fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    // If a forwarding endpoint is configured (e.g., Formspree), forward the payload
    const forwardUrl = process.env.FORM_PROVIDER_URL;
    if (forwardUrl) {
      try {
        const resp = await fetch(forwardUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        if (!resp.ok) {
          return new Response(JSON.stringify({ ok: false, error: 'forward_failed' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
        }
        return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: 'forward_error' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
      }
    }

    // Fallback: append to a local log file (note: serverless filesystems are ephemeral)
    try {
      const logLine = `${new Date().toISOString()}\t${name}\t${email}\t${message.replace(/\n/g, ' ')}\n`;
      fs.appendFileSync('messages.log', logLine);
    } catch (err) {
      // ignore write errors in serverless environments
      console.error('Failed to append message to file', err);
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: 'server_error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
