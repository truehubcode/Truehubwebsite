import { NextResponse } from "next/server";

/**
 * Quote / enquiry endpoint.
 * Currently validates the payload and logs it on the server.
 *
 * TODO (optional): forward the enquiry by email or to a CRM. For example with Resend:
 *   npm i resend
 *   const { Resend } = await import("resend");
 *   await new Resend(process.env.RESEND_API_KEY).emails.send({ from, to, subject, text });
 */
export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as Record<string, string> | null;

  if (!data || !data.name?.trim() || !data.phone?.trim()) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }
  if (data.website) {
    // Honeypot field filled in — silently accept and drop.
    return NextResponse.json({ ok: true });
  }

  console.log("[quote-enquiry]", JSON.stringify({ ...data, receivedAt: new Date().toISOString() }));
  return NextResponse.json({ ok: true });
}
