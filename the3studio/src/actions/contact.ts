"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

// Optional: Supabase + Resend (gracefully skip if not configured)
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_TO = process.env.RESEND_TO; // where to receive leads
const RESEND_FROM = process.env.RESEND_FROM ?? "noreply@yourdomain.com";

// Validation schema
const ContactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().min(5),
  email: z.string().email(),
  projectDetails: z.string().min(10),
  company: z.string().optional(), // honeypot
});

type SuccessCfg = { successUrl: string; errorUrl: string };

// Main action (bind success/error URLs from server components)
export async function createContact(cfg: SuccessCfg, formData: FormData) {
  // Extract & validate
  const data = {
    firstName: String(formData.get("firstName") || "").trim(),
    lastName: String(formData.get("lastName") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    projectDetails: String(formData.get("projectDetails") || "").trim(),
    company: String(formData.get("company") || "").trim(), // honeypot
  };

  // Honeypot
  if (data.company) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("🚫 Spam blocked (honeypot):", data);
    }
    redirect(`${cfg.errorUrl}?contact=spam`);
  }

  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("❌ Validation failed:", parsed.error.flatten());
    }
    redirect(`${cfg.errorUrl}?contact=invalid`);
  }

  // DEV logging
  if (process.env.NODE_ENV !== "production") {
    console.log("📩 Contact submission (valid):", parsed.data);
  }

  // Store in DB (optional, if Supabase configured)
  try {
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      const { error } = await supabase.from("contact_messages").insert({
        first_name: parsed.data.firstName,
        last_name: parsed.data.lastName,
        phone: parsed.data.phone,
        email: parsed.data.email,
        project_details: parsed.data.projectDetails,
        source: "website",
      });
      if (error) throw error;
    }
  } catch (e) {
    console.error("Supabase insert failed:", e);
    redirect(`${cfg.errorUrl}?contact=db_error`);
  }

  // Send email (optional, if Resend configured)
  try {
    if (RESEND_API_KEY && RESEND_TO) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: RESEND_FROM,
        to: RESEND_TO,
        subject: "New Contact Lead",
        text: [
          `Name: ${parsed.data.firstName} ${parsed.data.lastName}`,
          `Email: ${parsed.data.email}`,
          `Phone: ${parsed.data.phone}`,
          `Details: ${parsed.data.projectDetails}`,
        ].join("\n"),
      });
    }
  } catch (e) {
    console.error("Resend email failed:", e);
    // Not a hard blocker; still redirect success so you don't lose the lead (it's in DB)
  }

  redirect(`${cfg.successUrl}?contact=success`);
}
