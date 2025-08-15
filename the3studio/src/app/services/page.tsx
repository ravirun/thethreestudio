"use client";

import { motion } from "framer-motion";
import {  Check, Rocket, ShieldCheck, Workflow, Zap, PhoneCall, Mail, Calendar, Star, Layers, PenTool, ShoppingCart, Bot, Cable, BarChart3, Boxes, Building2 } from "lucide-react";
import Link from "next/link";
import { ServiceCard } from "@/components";     
import { Card } from "@/components/Card";

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">


      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,153,0,0.2),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl"
          >
            Services that scale 
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent"> fast.</span>
          </motion.h1>
          <p className="mt-4 max-w-2xl text-pretty text-zinc-400 md:text-lg">
            We build AI-first solutions that drive measurable growth, efficiency, and competitive advantage.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            
            <Link href="https://calendly.com/rs591090/30min" className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white">Get Started</Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-zinc-500">
            <div className="inline-flex items-center gap-2"><ShieldCheck size={16} /> 30-day warranty</div>
            <div className="inline-flex items-center gap-2"><Zap size={16} /> Fast turnarounds</div>
            <div className="inline-flex items-center gap-2"><Star size={16} /> Unlimited revisions during build</div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Services</h2>
            <p className="mt-1 text-zinc-400">Plug-and-play growth engines. Pick one or stack them.</p>
          </div>
          <Link href="/calculator" className="hidden rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-zinc-800 md:inline-flex">Estimate my project</Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<PenTool className="h-5 w-5" />}
            title="Websites that Convert"
            price="from ₹20,000"
            bullets={["Framer / Next.js / Shopify", "CRO-first design", "SEO and speed as defaults"]}
            accent="from-orange-500 to-amber-400"
          />
          <ServiceCard
            icon={<ShoppingCart className="h-5 w-5" />}
            title="E‑commerce Setups"
            price="from ₹80,000"
            bullets={["Shopify storefronts", "Catalog onboarding", "Payments & shipping config"]}
            accent="from-emerald-500 to-lime-400"
          />
          <ServiceCard
            icon={<Bot className="h-5 w-5" />}
            title="AI Agents"
            price="from ₹60,000"
            bullets={["Support, Sales, Analytics", "Knowledge + API integrations", "Guardrails & analytics"]}
            accent="from-sky-500 to-cyan-300"
          />
          <ServiceCard
            icon={<Workflow className="h-5 w-5" />}
            title="AI Automations"
            price="from ₹1,20,000"
            bullets={["Email/Social/Data flows", "Human-in-the-loop", "Dashboards & alerts"]}
            accent="from-violet-500 to-fuchsia-400"
          />
          <ServiceCard
            icon={<Cable className="h-5 w-5" />}
            title="Headless & Integrations"
            price="custom"
            bullets={["Shopify Hydrogen", "Payments, CRMs, ERPs", "Custom APIs & webhooks"]}
            accent="from-teal-500 to-emerald-400"
          />
          <ServiceCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="CRO & Analytics"
            price="from ₹15,000"
            bullets={["GA4/Hotjar", "Experimentation", "Funnel dashboards"]}
            accent="from-yellow-400 to-orange-400"
          />
        </div>
      </section>


      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">How We Ship</h2>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">Fast. Predictable. Documented.</span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { icon: <Layers className="h-5 w-5" />, t: "Scope", d: "We define outcomes, not deliverables." },
            { icon: <PenTool className="h-5 w-5" />, t: "Design", d: "CRO-first, on-brand, accessible." },
            { icon: <Rocket className="h-5 w-5" />, t: "Build", d: "Production quality from day one." },
            { icon: <ShieldCheck className="h-5 w-5" />, t: "Launch", d: "Test, document, deploy, support." },
          ].map((s, i) => (
            <Card key={i} padding="md" radius="lg">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
                {s.icon}
              </div>
              <div className="font-semibold text-zinc-100">{s.t}</div>
              <p className="mt-1 text-sm text-zinc-400">{s.d}</p>
            </Card>
          ))}
        </div>
      </section>





      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:col-span-2">
            <div className="flex items-center gap-2 text-sm text-zinc-400"><Calendar size={16} /> 15‑min discovery call</div>
            <h3 className="mt-2 text-2xl font-bold">Let’s scope it in one call</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">Bring your goals. We’ll map the shortest path to ROI and quote it on the spot.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link 
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white" 
                href="https://calendly.com/rs591090/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall size={16} /> Book a Call
              </Link>
              <Link 
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm font-semibold hover:bg-zinc-800"
                href="mailto:rs591090@gmail.com?subject=Project%20Brief%20-%20Services%20Inquiry&body=Hi%20The%203%20Studio%2C%0A%0AI'm%20interested%20in%20your%20services.%20Please%20send%20me%20a%20brief%20about%20your%20offerings%20and%20pricing.%0A%0AThanks!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={16} /> Email the Brief
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-5 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1"><Star size={14} /> Avg. 4.9/5</span>
              <span className="inline-flex items-center gap-1"><Building2 size={14} /> 50+ projects shipped</span>
              <span className="inline-flex items-center gap-1"><Boxes size={14} /> 7 active verticals</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
            <h4 className="text-lg font-bold">What you can expect</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {[
                "CRO‑driven UX and copy",
                "Clean, fast, accessible builds",
                "Automation‑first thinking",
                "Documentation and clear handover",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


    </main>
  );
}



// function TierCard({ title, price, tagline, features, cta, popular = false }: { title: string; price: string; tagline: string; features: string[]; cta: string; popular?: boolean }) {
//   return (
//     <div className={`relative rounded-2xl border ${popular ? "border-orange-500/50" : "border-white/10"} bg-zinc-900/60 p-6`}>
//       {popular && (
//         <span className="absolute right-4 top-4 rounded-full bg-orange-500/20 px-2 py-1 text-xs font-semibold text-orange-300">Popular</span>
//       )}
//       <div className="text-lg font-bold">{title}</div>
//       <div className="mt-1 text-3xl font-extrabold tracking-tight">{price}</div>
//       <div className="mt-1 text-sm text-zinc-400">{tagline}</div>
//       <ul className="mt-4 space-y-2 text-sm text-zinc-300">
//         {features.map((f) => (
//           <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> {f}</li>
//         ))}
//       </ul>
//       <Link href="#cta" className={`mt-5 inline-flex items-center gap-2 rounded-xl ${popular ? "bg-orange-500 text-black hover:brightness-110" : "border border-white/10 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"} px-4 py-2 text-sm font-semibold`}>
//         {cta} <ArrowRight size={16} />
//       </a>
//     </div>
//   );
// }