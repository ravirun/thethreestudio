import { ContactForm } from "@/components/contact";
import { ContactBanner } from "@/components/ContactBanner";
import { createContact } from "@/actions/contact";

type BannerType = "success" | "error" | "spam" | "invalid" | "db_error" | undefined;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ contact?: string }>;
}) {
  const params = await searchParams;
  // Bind different redirect targets for the dedicated page
  const action = createContact.bind(null, {
    successUrl: "/contact",
    errorUrl: "/contact",
  });

  return (
    <div className="bg-black min-h-screen text-white">
      <ContactBanner type={params?.contact as BannerType} />
      <div className="container mx-auto px-6 py-16">
        <ContactForm action={action} title="Let's build something memorable" />
      </div>
    </div>
  );
}
