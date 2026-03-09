import { NextResponse } from "next/server";

const SUPABASE_URL = "https://ylrcspzmsioyaeblmnwc.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Ksrlw1EDcOFYFv5oflbPCw_tLsgnhpI";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/lvas_subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal",
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        source: source || "lvathleticsnation",
      }),
    });

    if (!sbRes.ok && sbRes.status !== 409 && sbRes.status !== 201) {
      await fetch("https://www.thevoiceofcash.com/api/crm/prospect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          business_name: "LVA Subscriber",
          contact_name: email,
          email: email.toLowerCase().trim(),
          source: `${source || "lvathleticsnation"}_subscriber`,
          assigned_to: "cash",
          intake_context: { type: "mailing_list", source_site: source || "lvathleticsnation" },
        }),
      });
    }

    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "Content-Type": "application/json", "api-key": brevoKey },
        body: JSON.stringify({
          sender: { name: "LV Athletics Fan Sites", email: "noreply@thevoiceofcash.com" },
          to: [{ email: "cash@thevoiceofcash.com" }],
          subject: `New subscriber: ${email} (lvathleticsnation)`,
          htmlContent: `<p>New mailing list signup from <strong>lvathleticsnation</strong>:</p><p>${email}</p>`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
