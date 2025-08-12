"use client";

import { useState } from "react";
import { ArrowRight, Filter, Eye, Code, Palette, Zap } from "lucide-react";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Projects", icon: <Eye className="h-4 w-4" /> },
    { id: "website", name: "Websites", icon: <Code className="h-4 w-4" /> },
    { id: "ecommerce", name: "E-commerce", icon: <Zap className="h-4 w-4" /> },
    { id: "ai", name: "AI Solutions", icon: <Palette className="h-4 w-4" /> },
    { id: "dashboard", name: "Dashboards", icon: <Eye className="h-4 w-4" /> },
  ];

  const projects = [
    {
      id: "fashion-store",
      title: "Fashion E-commerce Store",
      category: "ecommerce",
      client: "Luxe Fashion",
      description: "A modern e-commerce platform with advanced filtering, payment integration, and inventory management.",
      image: "🛍️",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS3", "Razorpay"],
      features: [
        "Advanced product filtering",
        "Secure payment gateway",
        "Inventory management",
        "Mobile responsive design",
        "SEO optimized"
      ],
      results: "300% increase in online sales",
      duration: "6 weeks",
      budget: "₹2.5L",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "ai-chatbot",
      title: "AI Customer Support Bot",
      category: "ai",
      client: "TechFlow Solutions",
      description: "Intelligent chatbot that handles customer inquiries 24/7 with natural language processing and human handoff.",
      image: "🤖",
      technologies: ["OpenAI API", "Node.js", "React", "MongoDB", "WebSocket"],
      features: [
        "Natural language processing",
        "24/7 customer support",
        "Human handoff capability",
        "Knowledge base integration",
        "Analytics dashboard"
      ],
      results: "95% customer satisfaction rate",
      duration: "4 weeks",
      budget: "₹1.8L",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: "business-dashboard",
      title: "Business Analytics Dashboard",
      category: "dashboard",
      client: "DataViz Corp",
      description: "Comprehensive analytics dashboard with real-time data visualization and automated reporting.",
      image: "📊",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL", "AWS"],
      features: [
        "Real-time data visualization",
        "Custom charts and graphs",
        "Automated reporting",
        "User role management",
        "Export functionality"
      ],
      results: "50% faster decision making",
      duration: "8 weeks",
      budget: "₹3.2L",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: "landing-page",
      title: "High-Converting Landing Page",
      category: "website",
      client: "Growth Marketing",
      description: "Conversion-optimized landing page with A/B testing, lead capture, and analytics tracking.",
      image: "🎯",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Google Analytics", "Hotjar"],
      features: [
        "A/B testing framework",
        "Lead capture forms",
        "Analytics integration",
        "Mobile-first design",
        "Performance optimized"
      ],
      results: "200% increase in lead generation",
      duration: "3 weeks",
      budget: "₹1.2L",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "website",
      client: "Spice Garden",
      description: "Modern restaurant website with online ordering, table reservations, and menu management.",
      image: "🍽️",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
      features: [
        "Online ordering system",
        "Table reservation",
        "Menu management",
        "Customer reviews",
        "Mobile app integration"
      ],
      results: "150% increase in online orders",
      duration: "5 weeks",
      budget: "₹2.0L",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: "automation-tool",
      title: "Workflow Automation Tool",
      category: "ai",
      client: "ProcessFlow Inc",
      description: "AI-powered workflow automation tool that streamlines business processes and reduces manual work.",
      image: "⚙️",
      technologies: ["Python", "FastAPI", "React", "Redis", "Docker"],
      features: [
        "Workflow builder",
        "AI process optimization",
        "Integration APIs",
        "Real-time monitoring",
        "Custom triggers"
      ],
      results: "80% reduction in manual tasks",
      duration: "10 weeks",
      budget: "₹4.5L",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects. From websites to AI solutions, 
            we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Featured Projects</h2>
            <p className="text-zinc-400">Our most impactful work that drives real business results</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 hover:border-emerald-500/50 transition-all"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-100">{project.title}</h3>
                      <p className="text-zinc-400">{project.client}</p>
                    </div>
                  </div>
                  
                  <p className="text-zinc-300 mb-6">{project.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
                    <span>Duration: {project.duration}</span>
                    <span>Budget: {project.budget}</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                      {project.results}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>


                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter & All Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-2">All Projects</h2>
              <p className="text-zinc-400">Browse our complete portfolio</p>
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-zinc-400" />
              <span className="text-zinc-400 text-sm">Filter by:</span>
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

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl border transition-all cursor-pointer ${
                  selectedProject === project.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{project.image}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.client}</p>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className={`text-zinc-400 transition-transform ${
                        selectedProject === project.id ? "rotate-90" : ""
                      }`}
                    />
                  </div>

                  <p className="text-sm text-zinc-300 mb-4">{project.description}</p>

                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                    <span>{project.duration}</span>
                    <span>{project.budget}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  {selectedProject === project.id && (
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-2 text-sm">Key Features:</h4>
                        <ul className="list-disc list-inside text-xs text-zinc-400 space-y-1">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}