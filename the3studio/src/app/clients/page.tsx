"use client";

import { useState } from "react";
import { Star, ArrowRight, Users, TrendingUp, Award, Clock, Target } from "lucide-react";

export default function Clients() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const caseStudies = [
    {
      id: "ecommerce-store",
      title: "E-commerce Store",
      client: "Fashion Brand",
      category: "E-commerce",
      duration: "6 weeks",
      budget: "₹2.5L",
      description: "Built a complete Shopify store with custom design, payment integration, and inventory management.",
      challenge: "Client needed a scalable e-commerce solution that could handle 1000+ products with complex inventory management.",
      solution: "Developed a custom Shopify theme with advanced filtering, automated inventory sync, and integrated payment gateways.",
      results: [
        "300% increase in online sales",
        "50% reduction in cart abandonment",
        "Improved page load speed by 60%"
      ],
      tech: ["Shopify", "Liquid", "JavaScript", "CSS3", "Razorpay"],
      image: "🛒"
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Support Bot",
      client: "Tech Startup",
      category: "AI Automation",
      duration: "4 weeks",
      budget: "₹1.8L",
      description: "Developed an intelligent chatbot that handles customer inquiries 24/7 with 95% accuracy.",
      challenge: "Startup was overwhelmed with customer support requests and needed automated solutions.",
      solution: "Built a custom AI chatbot using OpenAI API with knowledge base integration and human handoff capabilities.",
      results: [
        "95% customer satisfaction rate",
        "80% reduction in support tickets",
        "24/7 customer support coverage"
      ],
      tech: ["OpenAI API", "Node.js", "React", "MongoDB", "WebSocket"],
      image: "🤖"
    },
    {
      id: "dashboard-app",
      title: "Business Dashboard",
      client: "SaaS Company",
      category: "Dashboard",
      duration: "8 weeks",
      budget: "₹3.2L",
      description: "Created a comprehensive analytics dashboard for real-time business insights and reporting.",
      challenge: "Company needed a centralized dashboard to visualize data from multiple sources and track KPIs.",
      solution: "Built a responsive dashboard with real-time data visualization, custom charts, and automated reporting.",
      results: [
        "Real-time data visualization",
        "50% faster decision making",
        "Automated report generation"
      ],
      tech: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "AWS"],
      image: "📊"
    },
    {
      id: "landing-page",
      title: "High-Converting Landing Page",
      client: "Marketing Agency",
      category: "Landing Page",
      duration: "3 weeks",
      budget: "₹1.2L",
      description: "Designed and developed a conversion-focused landing page that increased leads by 200%.",
      challenge: "Agency needed a landing page that could convert visitors into qualified leads effectively.",
      solution: "Created a conversion-optimized landing page with A/B testing, lead capture forms, and analytics tracking.",
      results: [
        "200% increase in lead generation",
        "40% improvement in conversion rate",
        "Reduced bounce rate by 35%"
      ],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Google Analytics", "Hotjar"],
      image: "🎯"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      company: "Fashion Brand",
      content: "The team at The3Studio delivered our e-commerce store exactly as promised. The site is fast, beautiful, and has already increased our sales by 300%. Highly recommended!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Rahul Patel",
      role: "CTO",
      company: "Tech Startup",
      content: "Our AI chatbot has transformed our customer support. We went from being overwhelmed with tickets to having 95% customer satisfaction. The team's technical expertise is outstanding.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Anjali Desai",
      role: "Marketing Director",
      company: "SaaS Company",
      content: "The dashboard they built for us provides incredible insights into our business. It's intuitive, fast, and has helped us make data-driven decisions. Excellent work!",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "Vikram Singh",
      role: "Founder",
      company: "Marketing Agency",
      content: "Our landing page conversion rate went from 2% to 6% in just 3 weeks. The team understood our goals perfectly and delivered results that exceeded our expectations.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Happy Clients",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <Star className="h-6 w-6" />
    },
    {
      number: "200%",
      label: "Average ROI",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const clientLogos = [
    "🏢", "🏭", "🏪", "🏨", "🏥", "🏦", "🏫", "🏬"
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We&apos;ve helped businesses of all sizes transform their digital presence. 
            From startups to enterprises, we deliver results that drive growth.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl border border-white/10 bg-zinc-900/60">
                <div className="text-emerald-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-zinc-100 mb-2">{stat.number}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Trusted By</h2>
            <p className="text-zinc-400">Companies that trust us with their digital transformation</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-900 transition-colors">
                <span className="text-3xl">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Case Studies</h2>
            <p className="text-zinc-400">Real projects, real results</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedCase === study.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{study.image}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{study.title}</h3>
                      <p className="text-sm text-zinc-400">{study.client}</p>
                    </div>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`text-zinc-400 transition-transform ${
                      selectedCase === study.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target size={16} />
                    <span>{study.budget}</span>
                  </div>
                  <div className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                    {study.category}
                  </div>
                </div>

                <p className="text-zinc-300 mb-4">{study.description}</p>

                {selectedCase === study.id && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Challenge:</h4>
                      <p className="text-sm text-zinc-400">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Solution:</h4>
                      <p className="text-sm text-zinc-400">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Results:</h4>
                      <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                        {study.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 px-6 rounded-xl transition-colors">
                      View Full Case Study
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">What Our Clients Say</h2>
            <p className="text-zinc-400">Don&apos;t just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl border border-white/10 bg-zinc-900/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-zinc-100">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-300 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-100 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-zinc-400 mb-8">
            Let&apos;s discuss how we can help transform your business with our digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 px-8 rounded-xl transition-colors">
              Start Your Project
            </button>
            <button className="border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-semibold py-3 px-8 rounded-xl transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}