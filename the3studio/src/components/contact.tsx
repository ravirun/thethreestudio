
"use client";

import { useFormStatus } from "react-dom";

// Accept server action from parent (Server Component)
export function ContactForm({
  action,
  title = "Tell us about your project",
}: {
  action: (formData: FormData) => void; // Server Action
  title?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <form
      action={action}
      className="space-y-6 max-w-2xl text-white"
      autoComplete="off"
    >
      <h3 className="text-2xl font-semibold">{title}</h3>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">First Name</label>
          <input
            name="firstName"
            required
            className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2"
            placeholder="Ravi"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Last Name</label>
          <input
            name="lastName"
            required
            className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2"
            placeholder="Badshah"
          />
        </div>
      </div>

      {/* Email + Phone in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2"
            placeholder="you@domain.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input
            name="phone"
            required
            className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2"
            placeholder="+91 9xxxxxxxxx"
          />
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-sm mb-1">Project Details</label>
        <textarea
          name="projectDetails"
          required
          rows={5}
          className="w-full rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-2"
          placeholder="Tell us what you're building and the outcome you want..."
        />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-white text-black px-5 py-2.5 font-medium disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
