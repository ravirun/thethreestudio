"use client";
import { MessageSquare, Calendar, Brain, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const calendly = "https://calendly.com/rs591090/30min";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 ring-1 ring-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-600 to-blue-500 flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <Link href="/" className="text-white font-bold tracking-tight text-lg">
            The 3 Studio
          </Link>
          <span className="hidden sm:inline-block text-xs text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded-full">
            AI-First
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition">
            <MessageSquare className="h-4 w-4" /> Get Started
          </Link>
          <Link href={calendly} className="inline-flex items-center gap-2 rounded-xl bg-white text-black hover:bg-zinc-200 px-4 py-2 text-sm font-semibold transition">
            <Calendar className="h-4 w-4" /> Book Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <nav className="space-y-3">
              <Link href="/services" className="block text-white hover:text-emerald-400 transition-colors py-2">Services</Link>
              <Link href="/#process" className="block text-white hover:text-emerald-400 transition-colors py-2">Process</Link>
              <Link href="/#work" className="block text-white hover:text-emerald-400 transition-colors py-2">Work</Link>
              <Link href="/#contact" className="block text-white hover:text-emerald-400 transition-colors py-2">Contact</Link>
            </nav>
            <div className="pt-4 space-y-3 border-t border-white/10">
              <Link href="/#contact" className="block w-full text-center bg-emerald-500 text-black font-semibold py-3 px-4 rounded-xl">
                Get Started
              </Link>
              <Link href={calendly} className="block w-full text-center bg-white text-black font-semibold py-3 px-4 rounded-xl">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
