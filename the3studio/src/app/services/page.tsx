"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, ShoppingCart, Megaphone, Wrench, LineChart, ArrowRight, Zap, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Strategy & Consulting",
    description: "Comprehensive AI readiness assessment, use case identification, and implementation roadmaps that transform your business operations.",
    features: [
      "AI readiness assessment and gap analysis",
      "Use case identification and prioritization",
      "Implementation roadmap and timeline",
      "Change management strategy",
      "ROI projections and business case development"
    ],
    benefits: ["40% average cost reduction", "12+ AI use cases identified", "3-year transformation plan", "Executive buy-in secured"]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Software Development",
    description: "Custom applications with AI at their core — from generative AI solutions to autonomous agentic systems that work 24/7.",
    features: [
      "Custom AI applications and platforms",
      "Generative AI solutions (text, image, code)",
      "Autonomous AI agents and workflows",
      "Real-time AI processing systems",
      "AI-powered APIs and integrations"
    ],
    benefits: ["90% accuracy in AI responses", "24/7 autonomous operation", "Scalable AI infrastructure", "Custom AI models"]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Integration & Modernization",
    description: "Seamlessly integrate AI into existing workflows, with data readiness, API connections, and intelligent automation systems.",
    features: [
      "Legacy system AI integration",
      "Data pipeline optimization",
      "API development and integration",
      "Workflow automation with AI",
      "System modernization planning"
    ],
    benefits: ["Seamless legacy integration", "80% workflow automation", "Real-time data processing", "Future-proof architecture"]
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "AI-First E-commerce Growth",
    description: "Hyper-personalized campaigns, autonomous marketing systems, and predictive analytics for D2C scale and profitability.",
    features: [
      "AI-powered customer segmentation",
      "Predictive product recommendations",
      "Dynamic pricing optimization",
      "Autonomous marketing campaigns",
      "Customer lifetime value optimization"
    ],
    benefits: ["3.6x ROAS improvement", "Personalized customer experience", "Automated campaign management", "Increased conversion rates"]
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: "AI Marketing & Automation",
    description: "Autonomous marketing agents, predictive campaign optimization, and hyper-personalized content at scale.",
    features: [
      "AI-powered content generation",
      "Predictive campaign optimization",
      "Autonomous marketing agents",
      "Multi-channel campaign management",
      "Real-time performance analytics"
    ],
    benefits: ["24/7 autonomous operation", "Hyper-personalized content", "Predictive optimization", "Multi-channel coordination"]
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "AI-Native Product Engineering",
    description: "From v0 to v10, building products that leverage AI for rapid prototyping, iteration, and intelligent user experiences.",
    features: [
      "AI-first product architecture",
      "Rapid prototyping with AI",
      "Intelligent user interfaces",
      "AI-powered user experience",
      "Scalable AI product development"
    ],
    benefits: ["10x faster prototyping", "Intelligent user experiences", "AI-native architecture", "Scalable AI products"]
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "AI-Powered Analytics",
    description: "Predictive business intelligence, customer behavior forecasting, and decision pipelines you can trust for growth.",
    features: [
      "Predictive business intelligence",
      "Customer behavior forecasting",
      "Real-time decision pipelines",
      "AI-powered data visualization",
      "Automated reporting systems"
    ],
    benefits: ["85% prediction accuracy", "Real-time insights", "Automated decision making", "Trusted data pipelines"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Responsible AI Frameworks",
    description: "Ethical AI governance, transparency protocols, and secure AI systems that align with your business values.",
    features: [
      "AI ethics and governance",
      "Transparency and explainability",
      "Bias detection and mitigation",
      "Security and privacy compliance",
      "AI risk assessment and management"
    ],
    benefits: ["Ethical AI deployment", "Regulatory compliance", "Trusted AI systems", "Risk mitigation"]
  }
];

const processSteps = [
  { id: 1, title: "Discovery", description: "90-minute deep dive into your business, challenges, and AI opportunities." },
  { id: 2, title: "Strategy", description: "One-page AI transformation plan with KPIs, timeline, and accountable owners." },
  { id: 3, title: "Implementation", description: "Ship core AI solutions, automations, and integrations in 2-4 weeks." },
  { id: 4, title: "Optimization", description: "Continuous improvement and scaling of AI systems and processes." },
  { id: 5, title: "Scale", description: "Expand AI capabilities across departments and business functions." }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-200">
      <Header />
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6"
          >
            AI-First Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-zinc-300"
          >
            Transform your business with our comprehensive AI-first solutions. From strategy to implementation, 
            we deliver measurable results that drive growth and efficiency.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Deliver</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Each service is designed to deliver measurable business impact with AI at its core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-8 hover:bg-zinc-900 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white group-hover:bg-emerald-500/20 group-hover:ring-emerald-500/30 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-zinc-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-black/40 to-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Delivery Process</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Proven methodology that ensures successful AI implementation and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-6 h-full">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900/60 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your specific needs and create a custom AI strategy that drives measurable growth.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 text-black px-8 py-4 font-semibold hover:bg-emerald-600 transition text-lg"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
