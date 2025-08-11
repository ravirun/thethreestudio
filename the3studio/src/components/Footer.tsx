"use client";
import React from "react";
import Link from "next/link";
import { Brain, Mail, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  const phone = "+918002845545";
  const email = "thethreestudio@gmail.com";
  const mailto = `mailto:${email}?subject=Project%20Inquiry%20—%20The%203%20Studio`;
  const tel = `tel:${phone}`;

  return (
    <footer className="bg-black/40 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 flex items-center justify-center">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-bold text-lg">The 3 Studio</span>
              <span className="text-xs text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded-full">
                AI-First
              </span>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              We transform businesses with AI-first solutions that drive measurable growth, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex items-center gap-4">
              <a href={tel} className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 80028 45545</span>
              </a>
              <a href={mailto} className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#ai-strategy" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  AI Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#ai-development" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  AI Software Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-integration" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  E-commerce Growth
                </Link>
              </li>
              <li>
                <Link href="/services#ai-marketing" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  AI Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#work" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-300 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            © 2024 The 3 Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-zinc-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
