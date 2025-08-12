// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fname, lname, phone, email, message } = body || {};

    // basic validation
    if (!fname || !lname || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: push to CRM / send email / persist to DB
    console.log("CONTACT_FORM:", { fname, lname, phone, email, message });

    return NextResponse.json({ ok: true, message: "Form data received" });
  } catch (err) {
    console.error("CONTACT_FORM_ERROR:", err);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
