"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-emerald-500 px-6 py-4 text-lg font-semibold text-black transition hover:bg-emerald-600 disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}