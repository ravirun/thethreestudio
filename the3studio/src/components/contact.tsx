import { redirect } from "next/navigation";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  async function createContact(formData: FormData) {
    "use server";

    // Basic extraction
    const fname = String(formData.get("fname") || "").trim();
    const lname = String(formData.get("lname") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Honeypot (optional anti-spam)
    const company = String(formData.get("company") || "");
    if (company) {
      // Bot filled hidden field—silently accept.
      redirect("/contact?success=1");
    }

    // Minimal validation
    if (!fname || !lname || !phone || !email || !message) {
      redirect("/contact?error=missing");
    }

    // TODO: Persist or notify (DB/Sheets/CRM/Email)
    console.log("CONTACT_FORM (server-action):", {
      fname, lname, phone, email, message,
    });

    // Example: send email via Resend/Sendgrid here
    // await resend.emails.send({ ... })

    redirect("/contact?success=1");
  }

  return (
    <form action={createContact} className="space-y-6">

      {/* Honeypot (hidden from humans) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">First Name</label>
          <input
            name="fname"
            required
            placeholder="Your first name"
            className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-white ring-1 ring-white/10 placeholder-zinc-500 transition focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">Last Name</label>
          <input
            name="lname"
            required
            placeholder="Your last name"
            className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-white ring-1 ring-white/10 placeholder-zinc-500 transition focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">Phone</label>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            required
            placeholder="Your phone number"
            className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-white ring-1 ring-white/10 placeholder-zinc-500 transition focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="your.email@company.com"
            className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-white ring-1 ring-white/10 placeholder-zinc-500 transition focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-zinc-300">Project Details</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project, challenges, and goals..."
          className="w-full rounded-xl bg-zinc-950 px-4 py-3 text-white ring-1 ring-white/10 placeholder-zinc-500 transition focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <SubmitButton />
    </form>
  );
}
