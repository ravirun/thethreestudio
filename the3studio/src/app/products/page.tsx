"use client";

import { useState } from "react";
import { Package, Download, Star, Users, Zap, Shield, Globe, ArrowRight, ExternalLink } from "lucide-react";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Products", icon: <Package className="h-4 w-4" /> },
    { id: "templates", name: "Templates", icon: <Download className="h-4 w-4" /> },
    { id: "tools", name: "Tools", icon: <Zap className="h-4 w-4" /> },
    { id: "services", name: "Services", icon: <Users className="h-4 w-4" /> },
  ];

  const products = [
    {
      id: "nextjs-template",
      name: "Next.js Business Template",
      category: "templates",
      description: "Complete business website template built with Next.js 14, TypeScript, and Tailwind CSS.",
      price: "₹9,999",
      originalPrice: "₹19,999",
      rating: 4.8,
      reviews: 127,
      image: "🚀",
      features: [
        "Next.js 14 with App Router",
        "TypeScript support",
        "Tailwind CSS styling",
        "Responsive design",
        "SEO optimized",
        "Dark/Light mode",
        "Contact forms",
        "Blog functionality",
        "Analytics integration",
        "Performance optimized"
      ],
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demo: "https://demo.example.com",
      download: "#",
      featured: true
    },
    {
      id: "ai-chatbot",
      name: "AI Chatbot Kit",
      category: "tools",
      description: "Ready-to-deploy AI chatbot with OpenAI integration and customizable responses.",
      price: "₹15,999",
      originalPrice: "₹29,999",
      rating: 4.9,
      reviews: 89,
      image: "🤖",
      features: [
        "OpenAI GPT integration",
        "Custom knowledge base",
        "Multi-language support",
        "Human handoff",
        "Analytics dashboard",
        "Easy customization",
        "API documentation",
        "Deployment guide",
        "24/7 support",
        "Regular updates"
      ],
      tech: ["React", "Node.js", "OpenAI API", "MongoDB"],
      demo: "https://chatbot.example.com",
      download: "#",
      featured: true
    },
    {
      id: "ecommerce-theme",
      name: "E-commerce Theme",
      category: "templates",
      description: "Modern e-commerce theme with advanced features and mobile-first design.",
      price: "₹12,999",
      originalPrice: "₹24,999",
      rating: 4.7,
      reviews: 156,
      image: "🛒",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment integration",
        "Order management",
        "Inventory tracking",
        "Customer reviews",
        "Wishlist functionality",
        "Search & filters",
        "Mobile responsive",
        "Admin dashboard"
      ],
      tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      demo: "https://ecommerce.example.com",
      download: "#",
      featured: false
    },
    {
      id: "dashboard-kit",
      name: "Analytics Dashboard Kit",
      category: "tools",
      description: "Complete dashboard solution with charts, analytics, and real-time data visualization.",
      price: "₹18,999",
      originalPrice: "₹34,999",
      rating: 4.8,
      reviews: 73,
      image: "📊",
      features: [
        "Real-time charts",
        "Data visualization",
        "Custom widgets",
        "Export functionality",
        "User management",
        "Role-based access",
        "API integration",
        "Mobile responsive",
        "Dark theme",
        "Performance optimized"
      ],
      tech: ["React", "Chart.js", "D3.js", "Node.js"],
      demo: "https://dashboard.example.com",
      download: "#",
      featured: false
    },
    {
      id: "landing-page-builder",
      name: "Landing Page Builder",
      category: "tools",
      description: "Drag-and-drop landing page builder with conversion optimization features.",
      price: "₹8,999",
      originalPrice: "₹16,999",
      rating: 4.6,
      reviews: 94,
      image: "🎯",
      features: [
        "Drag & drop editor",
        "Pre-built templates",
        "A/B testing",
        "Lead capture forms",
        "Analytics integration",
        "SEO tools",
        "Mobile optimization",
        "Custom domains",
        "Email integration",
        "Performance tracking"
      ],
      tech: ["React", "Framer Motion", "Supabase", "Vercel"],
      demo: "https://builder.example.com",
      download: "#",
      featured: false
    },
    {
      id: "website-audit",
      name: "Website Performance Audit",
      category: "services",
      description: "Comprehensive website audit with actionable recommendations for improvement.",
      price: "₹4,999",
      originalPrice: "₹9,999",
      rating: 4.9,
      reviews: 45,
      image: "🔍",
      features: [
        "Performance analysis",
        "SEO audit",
        "Security review",
        "Accessibility check",
        "Mobile optimization",
        "Speed optimization",
        "Detailed report",
        "Action plan",
        "Follow-up support",
        "Implementation guide"
      ],
      tech: ["Lighthouse", "GTmetrix", "SEO Tools", "Security Scanners"],
      demo: "https://audit.example.com",
      download: "#",
      featured: false
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder",
      company: "TechStart",
      content: "The Next.js template saved us weeks of development time. Clean code and excellent documentation!",
      rating: 5
    },
    {
      name: "Rahul Patel",
      role: "CTO",
      company: "EcomPro",
      content: "The AI chatbot kit is incredible. We deployed it in 2 days and our customer satisfaction went up by 40%.",
      rating: 5
    },
    {
      name: "Anjali Desai",
      role: "Marketing Director",
      company: "GrowthCo",
      content: "The landing page builder helped us create high-converting pages without any coding knowledge.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            Digital Products
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Ready-to-use templates, tools, and services to accelerate your digital projects. 
            Built with modern technologies and best practices.
          </p>
        </div>

        {/* Featured Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Featured Products</h2>
            <p className="text-zinc-400">Our most popular and highest-rated products</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.filter(p => p.featured).map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 hover:border-emerald-500/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{product.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-zinc-100">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="text-zinc-400 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-zinc-500">•</span>
                        <span className="text-zinc-400 text-sm">{product.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 mb-6">{product.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-emerald-400">{product.price}</span>
                    <span className="text-zinc-500 line-through">{product.originalPrice}</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-semibold">
                      50% OFF
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tech.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & All Products */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-2">All Products</h2>
              <p className="text-zinc-400">Browse our complete product catalog</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-emerald-500 text-black"
                    : "border border-white/10 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedProduct === product.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-100">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-zinc-400 text-xs">{product.rating}</span>
                      </div>
                      <span className="text-zinc-500 text-xs">•</span>
                      <span className="text-zinc-400 text-xs">{product.reviews}</span>
                    </div>
                  </div>
                  <ArrowRight 
                    size={16} 
                    className={`text-zinc-400 transition-transform ${
                      selectedProduct === product.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <p className="text-sm text-zinc-300 mb-4">{product.description}</p>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-emerald-400 font-semibold">{product.price}</span>
                  <span className="text-zinc-500 line-through text-sm">{product.originalPrice}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tech.slice(0, 2).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {product.tech.length > 2 && (
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                      +{product.tech.length - 2}
                    </span>
                  )}
                </div>

                {selectedProduct === product.id && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2 text-sm">Features:</h4>
                      <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
                        {product.features.slice(0, 5).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">What Our Customers Say</h2>
            <p className="text-zinc-400">Real feedback from developers and businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl border border-white/10 bg-zinc-900/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-100">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-300 italic text-sm">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Why Choose Our Products?</h2>
            <p className="text-zinc-400">Built with quality and performance in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Ready to Deploy</h3>
              <p className="text-zinc-400">Get started immediately with production-ready code</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Quality Assured</h3>
              <p className="text-zinc-400">Thoroughly tested and optimized for performance</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Regular Updates</h3>
              <p className="text-zinc-400">Stay current with the latest features and security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
