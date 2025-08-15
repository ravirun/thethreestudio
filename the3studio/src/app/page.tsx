"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageSquare, TrendingUp, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact";
import { ContactBanner } from "@/components/ContactBanner";
import { createContact } from "@/actions/contact";
import Link from "next/link";

function HomePageClient() {
  
  // Bind success/error destinations for the homepage
  const action = createContact.bind(null, {
    successUrl: "/",
    errorUrl: "/",
  });

  return (
    <main className="bg-black min-h-screen text-white">
      <ContactBanner  />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
      </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-8"
          >
            We Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              {" "}
              Digital
              </span>
            <br />
            Experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-400 text-center mb-12 max-w-3xl mx-auto"
          >
            From concept to launch, we create cutting-edge web applications,
            AI-powered solutions, and digital products that drive real business
            results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="https://calendly.com/rs591090/30min"
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link> 
          </motion.div>
          </div>
        </section>

        {/* Services Section */}
      <section className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              We specialize in creating modern, scalable solutions that help
              businesses grow and succeed in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                  title: "Web Development",
                description:
                  "Custom websites, e-commerce platforms, and web applications built with modern technologies.",
                features: ["React/Next.js", "TypeScript", "Tailwind CSS"],
                },
                {
                icon: MessageSquare,
                  title: "AI Solutions",
                description:
                  "Intelligent chatbots, automation tools, and AI-powered features that enhance user experience.",
                features: ["OpenAI Integration", "Custom AI Models", "Automation"],
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description:
                  "Data-driven marketing strategies that increase visibility and drive conversions.",
                features: ["SEO Optimization", "Content Strategy", "Analytics"],
              },
              ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition-colors"
              >
                <service.icon className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Real projects, real metrics, real impact. Here&apos;s how we&apos;ve helped companies transform their operations with AI-first solutions.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 p-4 rounded-2xl">
                    <MessageSquare className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                    <div className="text-white font-semibold">AI Customer Service Platform</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold">
                  Revolutionizing Customer Support with AI
                </h3>
                <p className="text-zinc-400 text-lg">
                  Built an intelligent chatbot system that handles 80% of customer
                  inquiries automatically, reducing response times from hours to
                  seconds.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">80%</div>
                    <div className="text-sm text-zinc-400">Auto Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-sm text-zinc-400">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">60%</div>
                    <div className="text-sm text-zinc-400">Cost Reduction</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">OpenAI GPT-4</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Next.js</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Supabase</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-zinc-300">AI Assistant Online</span>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-sm text-zinc-300">
                      &quot;How can I help you today? I can assist with orders,
                      returns, and general inquiries.&quot;
                    </p>
                  </div>
                  <div className="bg-emerald-500/20 p-4 rounded-lg ml-8">
                    <p className="text-sm text-emerald-300">
                      &quot;I need to return an item I ordered last week&quot;
                    </p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg">
                    <p className="text-sm text-zinc-300">
                      &quot;I&apos;ll help you with that. Please provide your order
                      number and I&apos;ll guide you through the return process.&quot;
                    </p>
                  </div>
            </div>
          </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-8 rounded-2xl order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">Fraud Detection Dashboard</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-red-400">Live Monitoring</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-emerald-400">₹2.4M</div>
                      <div className="text-xs text-zinc-400">Saved Today</div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-red-400">47</div>
                      <div className="text-xs text-zinc-400">Threats Blocked</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zinc-300">Suspicious Activity</span>
                      <span className="text-red-400">High Risk</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 p-4 rounded-2xl">
                    <div className="text-white font-semibold">Financial Security Platform</div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold">
                  Protecting Millions with AI-Powered Fraud Detection
                </h3>
                <p className="text-zinc-400 text-lg">
                  Developed a real-time fraud detection system that analyzes
                  thousands of transactions per second, preventing financial
                  losses and protecting customer data.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">₹50M+</div>
                    <div className="text-sm text-zinc-400">Fraud Prevented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-zinc-400">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">60%</div>
                    <div className="text-sm text-zinc-400">Fraud Detection</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Machine Learning</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Real-time Processing</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Python</span>
          </div>
              </div>
            </motion.div>
          </div>
            </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Let&apos;s discuss your project and turn your vision into reality.
              We&apos;re here to help you succeed.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <ContactForm action={action} />
          </div>
      </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    // <Suspense fallback={null}>
      <HomePageClient />
    // </Suspense>
  );
}
