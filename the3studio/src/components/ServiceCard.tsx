import { ReactNode } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from './Card';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  bullets: string[];
  accent: string;
}

/**
 * ServiceCard Component
 * 
 * A reusable card component for displaying service offerings with:
 * - Icon, title, and pricing
 * - Feature bullet points with checkmarks
 * - Gradient accent line
 * - Call-to-action link
 * 
 * @example
 * ```tsx
 * <ServiceCard
 *   icon={<PenTool className="h-5 w-5" />}
 *   title="Websites that Convert"
 *   price="from ₹20,000"
 *   bullets={["Framer / Next.js / Shopify", "CRO-first design", "SEO and speed as defaults"]}
 *   accent="from-orange-500 to-amber-400"
 * />
 * ```
 */
export function ServiceCard({ icon, title, price, bullets, accent }: ServiceCardProps) {
  return (
    <Card padding="md" radius="lg" hover={true}>
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
        {icon}
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        <span className="text-xs text-zinc-400">{price}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-zinc-300">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-400" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className={`mt-5 h-px w-full bg-gradient-to-r ${accent} opacity-60`} />
      <Link 
        href="#cta" 
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white transition-colors"
      >
        Get started <ArrowRight size={16} />
      </Link>
    </Card>
  );
}