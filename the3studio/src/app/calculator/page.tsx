"use client";

import { useMemo, useState } from "react";
import {  ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { OptionCard } from "@/components";

// ------------------------------
// Types
// ------------------------------
export type Option = {
  name: string;
  description?: string;
  price: number; // base unit price
  icon?: string; // emoji or string
  allowQty?: boolean; // if true, show +/- qty control
  minQty?: number;
  maxQty?: number;
  stepQty?: number;
};

export type Step = {
  id: string; // stable key
  title: string;
  subtitle?: string;
  mode?: "single" | "multi"; // single = pick one, multi = pick many
  optional?: boolean; // user can skip if true
  options: Option[];
};

type StepsResolver = Step[] | ((args: { selections: SelectionState }) => Step[]);

export type CalculatorSchema = {
  key: string;
  label: string;
  accent: string; // tailwind color name for accents (e.g., "orange", "green", "violet")
  steps: StepsResolver;
};

// ------------------------------
// Utils
// ------------------------------
const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(" ");

// ------------------------------
// Reusable UI Bits (Tailwind, dark theme)
// ------------------------------
function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cx("inline-flex items-center rounded-xl px-3 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  );
}



function ProgressBar({ value, accent }: { value: number; accent: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-zinc-400">
        <span>Progress</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className={`h-2 rounded-full bg-${accent}-500 transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

// ------------------------------
// Core: Schema-Driven Calculator
// ------------------------------

type SelectionState = Record<string, { // stepId -> selection
  mode: "single" | "multi";
  items: { name: string; price: number; qty?: number }[];
}>;

function useCost(schema: CalculatorSchema, selections: SelectionState, promoCode: string) {
  const subtotal = useMemo(() => {
    return Object.values(selections).reduce((sum, sel) => {
      return (
        sum + sel.items.reduce((s, it) => s + it.price * (it.qty ?? 1), 0)
      );
    }, 0);
  }, [selections]);

  const discount = promoCode.trim().toUpperCase() === "MISFIT10" ? Math.round(subtotal * 0.1) : 0;
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
}

function StepView({
  step,
  accent,
  selection,
  setSelection,
}: {
  step: Step;
  accent: string;
  selection: SelectionState[string] | undefined;
  setSelection: (sel: SelectionState[string]) => void;
}) {
  const items = selection?.items ?? [];
  const isSelected = (opt: Option) => items.some((i) => i.name === opt.name);
  const findQty = (opt: Option) => items.find((i) => i.name === opt.name)?.qty ?? (opt.minQty ?? 1);

  const toggleSingle = (opt: Option) => {
    setSelection({ mode: "single", items: [{ name: opt.name, price: opt.price, qty: opt.allowQty ? findQty(opt) : undefined }] });
  };
  const toggleMulti = (opt: Option) => {
    if (isSelected(opt)) {
      const next = items.filter((i) => i.name !== opt.name);
      setSelection({ mode: "multi", items: next });
    } else {
      setSelection({ mode: "multi", items: [...items, { name: opt.name, price: opt.price, qty: opt.allowQty ? findQty(opt) : undefined }] });
    }
  };

  const setQty = (opt: Option, qty: number) => {
    const next = items.map((i) => (i.name === opt.name ? { ...i, qty } : i));
    setSelection({ mode: selection?.mode ?? step.mode ?? "single", items: next });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">{step.title}</h2>
          {step.subtitle && <p className="mt-1 text-zinc-400">{step.subtitle}</p>}
        </div>
        <Pill className="bg-zinc-800 text-zinc-300">{step.mode === "multi" ? "Pick any" : "Pick one"}</Pill>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {step.options.map((opt) => {
          const selected = isSelected(opt);
          return (
            <OptionCard
              key={opt.name}
              option={opt}
              selected={selected}
              accent={accent}
              onSelect={() => (step.mode === "multi" ? toggleMulti(opt) : toggleSingle(opt))}
              qty={opt.allowQty ? findQty(opt) : undefined}
              onQtyChange={opt.allowQty ? (n) => setQty(opt, n) : undefined}
            />
          );
        })}
      </div>

      {step.optional && (
        <button
          type="button"
          onClick={() => setSelection({ mode: step.mode ?? "single", items: [] })}
          className="text-sm text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
        >
          Skip this step
        </button>
      )}
    </div>
  );
}

function Summary({
  selections,
  total,
  subtotal,
  discount,
  onReset,
}: {
  selections: SelectionState;
  total: number;
  subtotal: number;
  discount: number;
  onReset: () => void;
}) {
  const lines: { label: string; price: number }[] = [];
  Object.entries(selections).forEach(([, sel]) => {
    sel.items.forEach((i) => {
      lines.push({ label: `${i.name}${i.qty && i.qty > 1 ? ` x${i.qty}` : ""}`, price: i.price * (i.qty ?? 1) });
    });
  });

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
      <h3 className="mb-4 text-xl font-bold text-zinc-100">Cost Summary</h3>
      <div className="space-y-2">
        {lines.length === 0 && <div className="text-zinc-400">No selections yet.</div>}
        {lines.map((l) => (
          <div key={l.label} className="flex items-center justify-between text-zinc-300">
            <span>{l.label}</span>
            <span className="font-semibold">{formatINR(l.price)}</span>
          </div>
        ))}
      </div>
      <div className="my-4 border-t border-white/10" />
      <div className="space-y-1 text-zinc-200">
        <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatINR(subtotal)}</span></div>
        <div className="flex items-center justify-between text-emerald-400"><span>Discount</span><span>-{formatINR(discount)}</span></div>
        <div className="flex items-center justify-between text-lg font-bold text-zinc-100"><span>Total</span><span>{formatINR(total)}</span></div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link 
          href="https://calendly.com/rs591090/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-xl bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 hover:bg-white text-center transition-colors"
        >
          Schedule Free Call
        </Link>     
        <button 
          onClick={() => {
            const emailSubject = encodeURIComponent(`Project Quote - ${total.toLocaleString('en-IN')} INR`);
            const emailBody = encodeURIComponent(`Hi,\n\nI'm interested in getting a quote for my project.\n\nProject Details:\n${lines.map(l => `- ${l.label}: ${formatINR(l.price)}`).join('\n')}\n\nTotal: ${formatINR(total)}\n\nPlease send me a detailed quote.\n\nThanks!`);
            window.open(`mailto:rs591090@gmail.com?subject=${emailSubject}&body=${emailBody}`, '_blank');
          }}
          className="rounded-xl border border-white/10 px-5 py-3 font-semibold text-zinc-100 hover:bg-zinc-800 transition-colors"
        >
          Email Me The Quote
        </button>
      </div>
      <button onClick={onReset} className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200">
        <RefreshCw size={14} /> Reset
      </button>
    </div>
  );
}

// ------------------------------
// Default Schemas (Website, AI Agent, Automation)
// ------------------------------

const WebsiteSchema: CalculatorSchema = {
  key: "website",
  label: "Website",
  accent: "orange",
  steps: ({ selections }) => {
    const siteType = selections["site_type"]?.items?.[0]?.name as string | undefined;
    const stackChoice = selections["stack"]?.items?.[0]?.name as string | undefined;

    const baseFirst: Step = {
      id: "site_type",
      title: "Bana Kya Rahe Ho?",
      subtitle: "What do you want us to build?",
      mode: "single",
      options: [
        { name: "Landing Page", description: "single page to convert", price: 20000, icon: "🎯" },
        { name: "Dashboard", description: "for your business", price: 30000, icon: "💻" },
        { name: "E-commerce", description: "sell products online", price: 80000, icon: "🛒" },
      ],
    };

    // Step 2: Tech stack conditioned on siteType
    const stackOptions = (() => {
      switch (siteType) {
        case "E-commerce":
          return [
            { name: "Shopify", description: "Best for ecom, plugins, SEO", price: 20000, icon: "🛒" },
            { name: "Next.js", description: "Custom storefront / headless", price: 30000, icon: "⚡" },
          ];
        case "Dashboard":
          return [
            { name: "Next.js", description: "Full control, performance", price: 30000, icon: "⚡" },
          ];
        case "Landing Page":
          return [
            { name: "Framer", description: "Beautiful marketing sites", price: 20000, icon: "🎨" },
            { name: "Next.js", description: "Super fast, custom", price: 25000, icon: "⚡" },
          ];
        default:
          return [
            { name: "Framer", description: "Beautiful marketing sites", price: 20000, icon: "🎨" },
            { name: "Next.js", description: "Full control, performance", price: 30000, icon: "⚡" },
          ];
      }
    })();

    const techStack: Step = {
      id: "stack",
      title: "Tech Stack Toh Batayo",
      subtitle: "Choose your building platform",
      mode: "single",
      options: stackOptions,
    };

    // Step 3: Conditional pages or products
    const pages: Step = {
      id: "pages",
      title: "Ginti Toh Batao Boss!",
      subtitle: "How many pages do you need?",
      mode: "single",
      options: [
        { name: "Under 10 Pages", description: "Basic website structure", price: 20000, icon: "📄" },
        { name: "10-25 Pages", description: "Medium complexity", price: 80000, icon: "📚" },
        { name: "25-40 Pages", description: "Full-featured website", price: 120000, icon: "📖" },
      ],
    };

    const products: Step = {
      id: "products",
      title: "Kitne Products?",
      subtitle: "How many SKUs to start with?",
      mode: "single",
      options: [
        { name: "Up to 50", description: "Starter catalog", price: 30000, icon: "🧾" },
        { name: "50–200", description: "Growing store", price: 70000, icon: "📦" },
        { name: "200+", description: "Large catalog", price: 120000, icon: "🏬" },
      ],
    };

    // Step 4: Conditional config based on stack
    const shopifyConfig: Step = {
      id: "shopify_setup",
      title: "Shopify Setup",
      subtitle: "Payments & Shipping",
      mode: "multi",
      optional: true,
      options: [
        { name: "Razorpay Payments", description: "Gateway setup", price: 8000, icon: "💳" },
        { name: "Stripe Payments", description: "Gateway setup", price: 10000, icon: "💳" },
        { name: "Shiprocket Shipping", description: "Carrier + rules", price: 12000, icon: "🚚" },
        { name: "GST + Taxes", description: "Tax config", price: 7000, icon: "📑" },
      ],
    };

    const nextHosting: Step = {
      id: "next_hosting",
      title: "Hosting & Infra",
      subtitle: "Pick your deployment target",
      mode: "single",
      options: [
        { name: "Vercel", description: "Edge + analytics", price: 12000, icon: "☁️" },
        { name: "Netlify", description: "Solid CI/CD", price: 10000, icon: "☁️" },
        { name: "Custom Cloud", description: "Docker + VPS", price: 18000, icon: "🖥️" },
      ],
    };

    const framerExtras: Step = {
      id: "framer_extras",
      title: "Framer Extras",
      subtitle: "Optional enhancements",
      mode: "multi",
      optional: true,
      options: [
        { name: "CMS Collections", description: "Blog/Case studies", price: 8000, icon: "🗂️" },
        { name: "Animations Pack", description: "Micro interactions", price: 6000, icon: "🎞️" },
      ],
    };

    const assets: Step = {
      id: "assets",
      title: "Images ka scene?",
      subtitle: "Who will provide the images?",
      mode: "single",
      options: [
        { name: "Paracat Assistant", description: "We provide AI-generated images", price: 20000, icon: "🤖" },
        { name: "Your Assistant", description: "You provide the images", price: 0, icon: "👤" },
        { name: "I'll Provide", description: "You provide the images", price: 0, icon: "📸" },
      ],
    };

    const timeline: Step = {
      id: "timeline",
      title: "Kab tak chahiye",
      subtitle: "How fast do you need it?",
      mode: "single",
      options: [
        { name: "Flexible", description: "5-6 weeks", price: 0, icon: "⏰" },
        { name: "Standard", description: "4 weeks", price: 20000, icon: "📅" },
        { name: "Fast Track", description: "2-3 weeks", price: 40000, icon: "🚀" },
      ],
    };

    const addons: Step = {
      id: "addons",
      title: "Extras & Add-ons",
      subtitle: "Pick anything you want included",
      mode: "multi",
      optional: true,
      options: [
        { name: "Copywriting", description: "Home + 5 pages", price: 15000, icon: "✍️" },
        { name: "Analytics & Dashboards", description: "GA4 + Hotjar setup", price: 12000, icon: "📊" },
        { name: "Blog Migrations", description: "Per 10 posts", price: 8000, icon: "🧳", allowQty: true, minQty: 1, maxQty: 20 },
        { name: "Monthly Care Plan", description: "Ongoing changes", price: 5000, icon: "🛠️", allowQty: true, minQty: 1, maxQty: 12 },
      ],
    };

    const conditionStep = siteType === "E-commerce" ? products : pages;

    const stackSpecific = stackChoice === "Shopify" ? [shopifyConfig] : stackChoice === "Next.js" ? [nextHosting] : stackChoice === "Framer" ? [framerExtras] : [];

    // Additional 5 steps for all project types
    const designStyle: Step = {
      id: "design_style",
      title: "Design Style",
      subtitle: "What's your visual preference?",
      mode: "single",
      options: [
        { name: "Modern Minimal", description: "Clean, simple, elegant", price: 0, icon: "✨" },
        { name: "Bold & Creative", description: "Eye-catching, unique", price: 15000, icon: "🎨" },
        { name: "Corporate Professional", description: "Trustworthy, established", price: 0, icon: "💼" },
        { name: "Playful & Fun", description: "Colorful, engaging", price: 10000, icon: "🎪" },
      ],
    };

    const features: Step = {
      id: "features",
      title: "Key Features",
      subtitle: "What functionality do you need?",
      mode: "multi",
      optional: true,
      options: [
        { name: "Contact Forms", description: "Lead capture", price: 5000, icon: "📝" },
        { name: "Newsletter Signup", description: "Email marketing", price: 4000, icon: "📧" },
        { name: "Live Chat", description: "Customer support", price: 8000, icon: "💬" },
        { name: "Booking System", description: "Appointment scheduling", price: 12000, icon: "📅" },
        { name: "Payment Gateway", description: "Online payments", price: 15000, icon: "💳" },
        { name: "Multi-language", description: "International support", price: 20000, icon: "🌍" },
      ],
    };

    const seo: Step = {
      id: "seo",
      title: "SEO & Marketing",
      subtitle: "How visible do you want to be?",
      mode: "single",
      options: [
        { name: "Basic SEO", description: "Essential optimization", price: 0, icon: "🔍" },
        { name: "Advanced SEO", description: "Full optimization + analytics", price: 15000, icon: "📈" },
        { name: "SEO + Content", description: "Optimization + blog setup", price: 25000, icon: "📝" },
        { name: "Full Marketing", description: "SEO + ads + social", price: 40000, icon: "🚀" },
      ],
    };

    const mobile: Step = {
      id: "mobile",
      title: "Mobile Experience",
      subtitle: "How important is mobile?",
      mode: "single",
      options: [
        { name: "Responsive Design", description: "Works on all devices", price: 0, icon: "📱" },
        { name: "Mobile-First", description: "Optimized for mobile", price: 10000, icon: "📲" },
        { name: "Progressive Web App", description: "App-like experience", price: 20000, icon: "📱" },
        { name: "Native App", description: "iOS/Android apps", price: 80000, icon: "📱" },
      ],
    };

    const support: Step = {
      id: "support",
      title: "Support & Maintenance",
      subtitle: "What level of ongoing support?",
      mode: "single",
      options: [
        { name: "Launch Only", description: "Just go-live support", price: 0, icon: "🚀" },
        { name: "3 Months Support", description: "Post-launch assistance", price: 15000, icon: "🛠️" },
        { name: "6 Months Support", description: "Extended support", price: 25000, icon: "🔧" },
        { name: "1 Year Support", description: "Full year maintenance", price: 40000, icon: "⭐" },
      ],
    };

    const upsell: Step = {
      id: "upsell",
      title: "Upsell & Cross-sell",
      subtitle: "Boost your revenue with smart recommendations",
      mode: "multi",
      optional: true,
      options: [
        { name: "Product Recommendations", description: "AI-powered suggestions", price: 12000, icon: "🎯" },
        { name: "Bundle Offers", description: "Create product bundles", price: 8000, icon: "📦" },
        { name: "Limited Time Offers", description: "Urgency & scarcity", price: 6000, icon: "⏰" },
        { name: "Loyalty Program", description: "Points & rewards system", price: 15000, icon: "🏆" },
        { name: "Email Sequences", description: "Automated follow-ups", price: 10000, icon: "📧" },
        { name: "Exit Intent Popups", description: "Last chance offers", price: 5000, icon: "🚪" },
      ],
    };

    const recurring: Step = {
      id: "recurring",
      title: "Recurring Revenue",
      subtitle: "Set up subscription models",
      mode: "multi",
      optional: true,
      options: [
        { name: "Subscription Plans", description: "Monthly/yearly billing", price: 20000, icon: "🔄" },
        { name: "Membership Site", description: "Gated content access", price: 25000, icon: "🔒" },
        { name: "SaaS Features", description: "User management & billing", price: 35000, icon: "☁️" },
        { name: "Recurring Payments", description: "Stripe subscriptions", price: 12000, icon: "💳" },
        { name: "Usage-based Billing", description: "Pay per use model", price: 18000, icon: "📊" },
        { name: "Tiered Pricing", description: "Multiple plan levels", price: 10000, icon: "📈" },
      ],
    };

    const analytics: Step = {
      id: "analytics",
      title: "Analytics & Optimization",
      subtitle: "Track performance & optimize conversions",
      mode: "multi",
      optional: true,
      options: [
        { name: "Conversion Tracking", description: "Goal & funnel tracking", price: 8000, icon: "📈" },
        { name: "A/B Testing", description: "Split testing tools", price: 12000, icon: "🧪" },
        { name: "Heatmaps", description: "User behavior analysis", price: 6000, icon: "🔥" },
        { name: "Personalization", description: "Dynamic content", price: 15000, icon: "👤" },
        { name: "Retargeting Setup", description: "Ad pixel integration", price: 8000, icon: "🎯" },
        { name: "Revenue Analytics", description: "Advanced reporting", price: 10000, icon: "💰" },
      ],
    };

    return [baseFirst, techStack, conditionStep, ...stackSpecific, designStyle, features, seo, mobile, support, upsell, recurring, analytics, assets, timeline, addons];
  },
};

const AIAgentSchema: CalculatorSchema = {
  key: "ai-agent",
  label: "AI Agent",
  accent: "green",
  steps: ({ selections }) => {
    const agentType = selections["agent_type"]?.items?.[0]?.name as string | undefined;

    const agentTypeStep: Step = {
      id: "agent_type",
      title: "AI Agent Type",
      subtitle: "What type of AI agent do you need?",
      mode: "single",
      options: [
        { name: "Customer Support Bot", description: "Handle customer inquiries 24/7", price: 50000, icon: "🤖" },
        { name: "Sales Assistant", description: "Qualify leads & boost conversions", price: 75000, icon: "💼" },
        { name: "Data Analyst", description: "Process & analyze business data", price: 100000, icon: "📊" },
        { name: "Content Creator", description: "Generate articles & social posts", price: 60000, icon: "✍️" },
        { name: "Custom Agent", description: "Tailored to your needs", price: 120000, icon: "⚙️" },
      ],
    };

    const integration: Step = {
      id: "integration",
      title: "Integration Complexity",
      subtitle: "How complex should the integration be?",
      mode: "single",
      options: [
        { name: "Basic API", description: "Simple REST integration", price: 25000, icon: "🔌" },
        { name: "Advanced API", description: "Multi-platform integration", price: 50000, icon: "🔗" },
        { name: "Custom Platform", description: "Built from ground up", price: 100000, icon: "🏗️" },
      ],
    };

    // Conditional step based on agent type
    const supportChannels: Step = {
      id: "support_channels",
      title: "Support Channels",
      subtitle: "Where will this bot live?",
      mode: "multi",
      optional: true,
      options: [
        { name: "Website Chat", description: "Widget embed", price: 8000, icon: "💬" },
        { name: "WhatsApp", description: "WA Business API", price: 15000, icon: "📱" },
        { name: "Instagram DM", description: "Inbox automation", price: 12000, icon: "📸" },
        { name: "Messenger", description: "FB pages", price: 8000, icon: "📨" },
      ],
    };

    const salesCrm: Step = {
      id: "sales_crm",
      title: "CRM Integration",
      subtitle: "Where should leads go?",
      mode: "single",
      options: [
        { name: "HubSpot", description: "Contacts + pipelines", price: 15000, icon: "🗄️" },
        { name: "Zoho", description: "Budget-friendly", price: 10000, icon: "🗂️" },
        { name: "Sheets-only", description: "Lean MVP", price: 5000, icon: "📄" },
      ],
    };

    const dataSources: Step = {
      id: "data_sources",
      title: "Data Sources",
      subtitle: "Connect your data",
      mode: "multi",
      optional: true,
      options: [
        { name: "Docs + PDFs", description: "Knowledge base", price: 10000, icon: "📚" },
        { name: "DB Connector", description: "SQL/NoSQL", price: 20000, icon: "🗃️" },
        { name: "Analytics", description: "GA4, Mixpanel", price: 12000, icon: "📈" },
      ],
    };

    const training: Step = {
      id: "training",
      title: "Training Data",
      subtitle: "What training data will be used?",
      mode: "single",
      options: [
        { name: "Public Models", description: "Use existing models", price: 20000, icon: "📚" },
        { name: "Custom Training", description: "Train on your data", price: 80000, icon: "🎯" },
        { name: "Hybrid Approach", description: "Public + custom", price: 50000, icon: "🔄" },
      ],
    };

    const latency: Step = {
      id: "latency",
      title: "Response Time",
      subtitle: "How fast should the agent respond?",
      mode: "single",
      options: [
        { name: "Standard", description: "1-3 seconds", price: 30000, icon: "⏱️" },
        { name: "Fast", description: "Under 1 second", price: 60000, icon: "⚡" },
        { name: "Real-time", description: "Instant", price: 100000, icon: "🚀" },
      ],
    };

    const maintenance: Step = {
      id: "maintenance",
      title: "Maintenance Level",
      subtitle: "What level of maintenance do you need?",
      mode: "single",
      options: [
        { name: "Basic", description: "Monthly updates & monitoring", price: 15000, icon: "🔧" },
        { name: "Premium", description: "Weekly + 24/7 monitoring", price: 40000, icon: "⭐" },
        { name: "Enterprise", description: "Daily + dedicated support", price: 80000, icon: "🏢" },
      ],
    };

    const addons: Step = {
      id: "addons",
      title: "Add-ons",
      subtitle: "Pick any extras",
      mode: "multi",
      optional: true,
      options: [
        { name: "Hallucination Guardrails", description: "Safety, restricted actions", price: 20000, icon: "🛡️" },
        { name: "Audit Logs + Analytics", description: "Usage, CSAT, funnels", price: 25000, icon: "📈" },
        { name: "Knowledge Base Uploader", description: "Per 100 docs", price: 10000, icon: "🗂️", allowQty: true, minQty: 1, maxQty: 20 },
      ],
    };

    const conditional = agentType === "Customer Support Bot" ? [supportChannels]
      : agentType === "Sales Assistant" ? [salesCrm]
      : agentType === "Data Analyst" ? [dataSources]
      : [];

    return [agentTypeStep, integration, ...conditional, training, latency, maintenance, addons];
  },
};

const AutomationSchema: CalculatorSchema = {
  key: "automation",
  label: "AI Automation",
  accent: "violet",
  steps: ({ selections }) => {
    const autoType = selections["auto_type"]?.items?.[0]?.name as string | undefined;

    const autoTypeStep: Step = {
      id: "auto_type",
      title: "Automation Type",
      subtitle: "What type of automation do you need?",
      mode: "single",
      options: [
        { name: "Email Marketing", description: "Campaigns & sequences", price: 40000, icon: "📧" },
        { name: "Social Media", description: "Auto-post & schedule", price: 50000, icon: "📱" },
        { name: "Data Processing", description: "ETL, enrich, analyze", price: 80000, icon: "📊" },
        { name: "Customer Service", description: "Support ticket flows", price: 60000, icon: "🎧" },
        { name: "Custom Workflow", description: "Tailored processes", price: 100000, icon: "⚙️" },
      ],
    };

    // Conditional platform details
    const emailPlatforms: Step = {
      id: "email_platforms",
      title: "Email Platform",
      subtitle: "Pick your ESP",
      mode: "single",
      options: [
        { name: "Klaviyo", description: "Ecom-focused", price: 12000, icon: "✉️" },
        { name: "Mailchimp", description: "General purpose", price: 8000, icon: "🐵" },
        { name: "ConvertKit", description: "Creator-first", price: 10000, icon: "📬" },
      ],
    };

    const socialPlatforms: Step = {
      id: "social_platforms",
      title: "Social Platforms",
      subtitle: "Select channels",
      mode: "multi",
      optional: true,
      options: [
        { name: "Instagram", description: "Posting + inbox", price: 8000, icon: "📸" },
        { name: "YouTube Shorts", description: "Auto publish", price: 8000, icon: "▶️" },
        { name: "LinkedIn", description: "Scheduling", price: 6000, icon: "🔗" },
        { name: "Twitter/X", description: "Queue + DMs", price: 6000, icon: "🐦" },
      ],
    };

    const dataStack: Step = {
      id: "data_stack",
      title: "Data Stack",
      subtitle: "Where does data live?",
      mode: "multi",
      optional: true,
      options: [
        { name: "Google Sheets", description: "Lean storage", price: 5000, icon: "🧾" },
        { name: "Airtable", description: "Ops DB", price: 8000, icon: "🗄️" },
        { name: "Postgres", description: "Prod DB", price: 12000, icon: "🐘" },
      ],
    };

    const platforms: Step = {
      id: "platforms",
      title: "Platform Integration",
      subtitle: "Which platforms need to be connected?",
      mode: "single",
      options: [
        { name: "Single Platform", description: "One system", price: 20000, icon: "🔗" },
        { name: "Multiple Platforms", description: "3–5 systems", price: 50000, icon: "🧩" },
        { name: "Enterprise Suite", description: "Full biz stack", price: 100000, icon: "🏢" },
      ],
    };

    const intelligence: Step = {
      id: "intelligence",
      title: "AI Intelligence Level",
      subtitle: "How smart should it be?",
      mode: "single",
      options: [
        { name: "Basic Rules", description: "If-then automation", price: 30000, icon: "📋" },
        { name: "AI-Powered", description: "ML optimization", price: 70000, icon: "🧠" },
        { name: "Advanced AI", description: "Predictive & insights", price: 120000, icon: "🚀" },
      ],
    };

    const scale: Step = {
      id: "scale",
      title: "Volume & Scale",
      subtitle: "What's the expected volume?",
      mode: "single",
      options: [
        { name: "Small Scale", description: "Up to 1,000 ops/mo", price: 25000, icon: "📈" },
        { name: "Medium Scale", description: "1,000–10,000 ops/mo", price: 60000, icon: "📊" },
        { name: "Large Scale", description: "10,000+ ops/mo", price: 100000, icon: "🚀" },
      ],
    };

    const monitoring: Step = {
      id: "monitoring",
      title: "Monitoring & Analytics",
      subtitle: "What level of insights do you need?",
      mode: "single",
      options: [
        { name: "Basic Reports", description: "Simple metrics", price: 20000, icon: "📊" },
        { name: "Advanced Analytics", description: "Detailed dashboards", price: 50000, icon: "📈" },
        { name: "Real-time Monitoring", description: "Live tracking & alerts", price: 80000, icon: "⚡" },
      ],
    };

    const addons: Step = {
      id: "addons",
      title: "Add-ons",
      subtitle: "Pick any extras",
      mode: "multi",
      optional: true,
      options: [
        { name: "Human-in-the-Loop", description: "Approval steps", price: 20000, icon: "🙋" },
        { name: "SLA + On-call", description: "Priority support", price: 35000, icon: "📞" },
        { name: "Extra Workflows", description: "Per workflow", price: 15000, icon: "🧪", allowQty: true, minQty: 1, maxQty: 50 },
      ],
    };

    const conditional = autoType === "Email Marketing" ? [emailPlatforms]
      : autoType === "Social Media" ? [socialPlatforms]
      : autoType === "Data Processing" ? [dataStack]
      : [];

    return [autoTypeStep, ...conditional, platforms, intelligence, scale, monitoring, addons];
  },
};

const DEFAULT_SCHEMAS: CalculatorSchema[] = [WebsiteSchema, AIAgentSchema, AutomationSchema];

// ------------------------------
// Main Component
// ------------------------------
export default function ProjectCalculator() {
  const schemas = DEFAULT_SCHEMAS;
  const [active, setActive] = useState(schemas[0].key);
  const current = schemas.find((s) => s.key === active)!;
  const [stepIndex, setStepIndex] = useState(0);
  const [promo, setPromo] = useState("");
  const [selections, setSelections] = useState<SelectionState>({});

  const resolvedSteps = useMemo(() => (typeof current.steps === "function" ? (current.steps as (args: { selections: SelectionState }) => Step[])({ selections }) : current.steps), [current, selections]);

  const progress = ((stepIndex + 1) / resolvedSteps.length) * 100;
  const { subtotal, discount, total } = useCost(current, selections, promo);

  const setSelection = (stepId: string, sel: SelectionState[string]) =>
    setSelections((prev) => ({ ...prev, [stepId]: sel }));

  const goNext = () => setStepIndex((i) => Math.min(resolvedSteps.length - 1, i + 1));
  const goPrev = () => setStepIndex((i) => Math.max(0, i - 1));

  const canNext = () => {
    const step = resolvedSteps[stepIndex];
    if (!step) return false;
    const sel = selections[step.id];
    if (step.optional) return true;
    return sel && sel.items && sel.items.length > 0;
  };

  const resetAll = () => {
    setSelections({});
    setPromo("");
    setStepIndex(0);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Plan Your Project — Like a Pro
          </h1>
          <p className="mt-3 text-zinc-400">Schema-driven. Flexible. Dark mode. Built for speed and clarity.</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {schemas.map((s) => {
            const activeTab = s.key === active;
            return (
              <button
                key={s.key}
                onClick={() => {
                  setActive(s.key);
                  setSelections({});
                  setPromo("");
                  setStepIndex(0);
                }}
                className={cx(
                  "rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors",
                  activeTab
                    ? `border-${s.accent}-500/50 bg-${s.accent}-950/40 text-zinc-100`
                    : "border-white/10 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-900"
                )}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Progress */}
        <div className="mb-6">
          <ProgressBar value={progress} accent={current.accent} />
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
              <StepView
                step={resolvedSteps[stepIndex]}
                accent={current.accent}
                selection={selections[resolvedSteps[stepIndex].id]}
                setSelection={(sel) => setSelection(resolvedSteps[stepIndex].id, sel)}
              />

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={goPrev}
                  disabled={stepIndex === 0}
                  className={cx(
                    "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
                    stepIndex === 0
                      ? "cursor-not-allowed border border-white/10 bg-zinc-800 text-zinc-500"
                      : `border border-white/10 bg-zinc-900 text-zinc-100 hover:bg-zinc-800`
                  )}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <div className="flex items-center gap-3">
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Promo code (try MISFIT10)"
                    className="hidden md:block rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700"
                  />
                  <button
                    onClick={goNext}
                    disabled={!canNext() || stepIndex === resolvedSteps.length - 1}
                    className={cx(
                      "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
                      !canNext() || stepIndex === resolvedSteps.length - 1
                        ? "cursor-not-allowed border border-white/10 bg-zinc-800 text-zinc-500"
                        : `border border-white/10 bg-zinc-100 text-zinc-900 hover:bg-white`
                    )}
                  >
                    Next <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Finalize CTA (only at last step) */}
            {stepIndex === resolvedSteps.length - 1 && (
              <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">Ready to see the estimate?</h3>
                    <p className="text-zinc-400">Lock your choices and review the full breakdown on the right.</p>
                  </div>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`rounded-xl bg-${current.accent}-500 px-5 py-3 font-semibold text-black hover:brightness-110`}
                  >
                    Scroll to Summary
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-zinc-100">Your {current.label} Estimate</h3>
                <Pill className={`bg-${current.accent}-500/20 text-${current.accent}-300`}>{Math.round(progress)}% complete</Pill>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-extrabold text-zinc-100">{formatINR(total)}</div>
                <div className="mt-1 text-sm text-zinc-400">Subtotal {formatINR(subtotal)} {discount > 0 && (
                  <span className="text-emerald-400"> · Saved {formatINR(discount)}</span>
                )}
                </div>
              </div>
              <Summary selections={selections} total={total} subtotal={subtotal} discount={discount} onReset={resetAll} />
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6">
              <h4 className="mb-2 text-lg font-bold text-zinc-100">What’s always included</h4>
              <ul className="grid list-disc gap-2 pl-5 text-zinc-300">
                <li>Source code + documentation</li>
                <li>Deployment support</li>
                <li>Unlimited revision window during build</li>
                <li>24/7 support during go-live week</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-6 text-zinc-400 text-sm">
              Tip: This calculator is schema-driven. Pass your own steps via the <code>schemas</code> prop to reuse for any quote workflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
