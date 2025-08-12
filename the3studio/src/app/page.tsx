"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Phone, Mail, Brain, Megaphone, MessageSquare, LineChart } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, title: "Audit", desc: "90‑min diagnosis of growth, ops, and leverage gaps." },
  { id: 2, title: "Strategy", desc: "One-page plan with KPIs, systems, and accountable owners." },
  { id: 3, title: "Build", desc: "Ship core automations, funnels, and product in 2–4 weeks." },
  { id: 4, title: "Automate", desc: "Turn playbooks into bots. Remove manual work, add velocity." },
  { id: 5, title: "Scale", desc: "Dial spend, expand channels, and compound cashflow." },
];

// const CaseCard = ({tag, title, metric, blurb}:{tag:string; title:string; metric:string; blurb:string;}) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.4 }}
//     className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-6 hover:bg-zinc-900"
//   >
//     <div className="text-xs uppercase tracking-wider text-zinc-400">{tag}</div>
//     <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
//     <div className="mt-3 text-3xl font-bold text-white">{metric}</div>
//     <p className="mt-3 text-sm text-zinc-400">{blurb}</p>
//   </motion.div>
// );



export default function TheThreeStudioLanding() {
  const phone = "+918002845545";
  const email = "thethreestudio@gmail.com";
  // const whatsapp = `https://wa.me/918002845545?text=Hi%20The%203%20Studio%20—%20I%20want%20to%20discuss%20AI-first%20growth.`;
  const mailto = `mailto:${email}?subject=Project%20Inquiry%20—%20The%203%20Studio`;
  const tel = `tel:${phone}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-200">
      
      {/* Hero */}

      
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-fuchsia-600 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-600 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            AI‑First Digital Tech Agency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-lg text-zinc-300"
          >
            We do great things together. Unlock online growth with our proven AI RAG systems, fine-tuned models, and digital marketing techniques. With our data-driven solutions, you can raise exposure, draw customers, increase conversions, and keep up with the competition.
          </motion.p>
          
          {/* Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8"
          >
            <Link 
              href="https://calendly.com/rs591090/30min"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 font-semibold text-black text-lg hover:bg-emerald-600 transition"
            >
              <Calendar className="h-6 w-6" /> Book Your Ruthless Audit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-gradient-to-b from-black/40 to-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Zero‑Fluff Delivery</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div key={s.id} className="rounded-2xl bg-zinc-900/60 ring-1 ring-white/10 p-5">
                <div className="text-xs text-zinc-400">Step {s.id}</div>
                <div className="mt-1 text-white font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-zinc-300">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Work That Drives Results</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Real projects, real metrics, real impact. Here&apos;s how we&apos;ve helped companies transform their operations with AI-first solutions.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full">AI Strategy</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">Enterprise</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enterprise AI Transformation</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Comprehensive AI readiness assessment and implementation roadmap for a Fortune 500 manufacturing company. 
                    We identified 12 high-impact AI use cases and built a 3-year transformation plan.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-emerald-400">40%</div>
                      <div className="text-sm text-zinc-400">Cost Reduction</div>
                    </div>
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-400">12</div>
                      <div className="text-sm text-zinc-400">AI Use Cases</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">AI Strategy</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Process Automation</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Data Analytics</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Change Management</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="h-16 w-16 text-emerald-400 mx-auto mb-4" />
                      <div className="text-white font-semibold">AI Transformation Dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative lg:order-2">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Megaphone className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                      <div className="text-white font-semibold">Autonomous Marketing System</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">AI Marketing</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full">E-commerce</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Autonomous Marketing System</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Built an AI-powered marketing platform for a D2C beauty brand that manages campaigns 24/7. 
                    The system autonomously optimizes ad spend, creative performance, and audience targeting.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-400">3.6x</div>
                      <div className="text-sm text-zinc-400">ROAS Improvement</div>
                    </div>
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-400">24/7</div>
                      <div className="text-sm text-zinc-400">Autonomous Operation</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">AI Agents</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Predictive Analytics</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Creative Optimization</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Facebook Ads API</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">AI Product</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">SaaS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Intelligent Customer Platform</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Developed a customer service platform powered by AI agents that handle inquiries, 
                    process orders, and provide personalized recommendations with 90% accuracy.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-400">90%</div>
                      <div className="text-sm text-zinc-400">Accuracy Rate</div>
                    </div>
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-cyan-400">5x</div>
                      <div className="text-sm text-zinc-400">Faster Response</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Natural Language Processing</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">AI Agents</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Real-time Analytics</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Multi-channel Support</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <div className="text-white font-semibold">AI Customer Service Platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative lg:order-2">
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                      <div className="text-white font-semibold">Predictive Analytics Engine</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full">Data Science</span>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm font-medium rounded-full">FinTech</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Predictive Analytics Engine</h3>
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    Built a machine learning platform for a fintech company that predicts customer churn, 
                    identifies fraud patterns, and optimizes pricing strategies in real-time.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-400">85%</div>
                      <div className="text-sm text-zinc-400">Prediction Accuracy</div>
                    </div>
                    <div className="bg-zinc-900/60 rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400">60%</div>
                      <div className="text-sm text-zinc-400">Fraud Detection</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Machine Learning</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Real-time Processing</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Predictive Models</span>
                    <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg">Data Pipeline</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-zinc-900/60 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to See These Results for Your Business?
              </h3>
              <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your specific challenges and build an AI-first solution that drives measurable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Contact */}
      <section id="contact" className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s Build Something Amazing</h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              Ready to transform your business with AI-first solutions? Get in touch and let&apos;s discuss your project.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
                <p className="text-zinc-300 mb-6">
                  Whether you have a specific project in mind or just want to explore possibilities, 
                  we&apos;re here to help you navigate the AI landscape and find the right solutions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <Link href={tel} className="text-zinc-300 hover:text-white transition-colors">+91 80028 45545</Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <Link href={mailto} className="text-zinc-300 hover:text-white transition-colors">{email}</Link>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Response Time</div>
                    <div className="text-zinc-300">Within 24 hours</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">What to Expect</h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Detailed project proposal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Transparent pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Ongoing support
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-zinc-900/60 rounded-2xl ring-1 ring-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
              <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-4 right-4 flex gap-2 sm:hidden">
        <Link href={mailto} className="rounded-2xl bg-white px-4 py-3 text-black font-semibold shadow-lg">Email</Link>
        <Link href={tel} className="rounded-2xl bg-emerald-500 px-4 py-3 text-black font-semibold shadow-lg">Call</Link>
      </div>
    </div>
  );
}
