// app/contact/page.tsx
import ContactForm from "@/components/contact";

export default function ContactPage({
  searchParams,
}: {
  searchParams: { success?: string; error?: string };
}) {
  const success = searchParams?.success === "1";
  const error = searchParams?.error;

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-zinc-400">Tell us about your project.</p>

        {success && (
          <p className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300">
            Thanks! We’ll get back to you shortly.
          </p>
        )}
        {error && (
          <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300">
            Something’s missing. Please fill all fields.
          </p>
        )}

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
