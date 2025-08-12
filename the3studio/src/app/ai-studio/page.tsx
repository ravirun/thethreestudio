"use client";

import { useState } from "react";
import { Brain, Zap, MessageSquare, Image, FileText, Video,  Code, ArrowRight, Play, Sparkles, Cpu, Target, Users, Globe } from "lucide-react";

export default function AiStudio() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const aiTools = [
    {
      id: "chatbot",
      name: "AI Chatbot",
      description: "Intelligent customer support bot with natural language processing",
      icon: <MessageSquare className="h-8 w-8" />,
      category: "Customer Support",
      features: [
        "24/7 customer support",
        "Natural language processing",
        "Multi-language support",
        "Human handoff capability",
        "Knowledge base integration"
      ],
      useCases: ["E-commerce", "SaaS", "Healthcare", "Education"],
      pricing: "From ₹50,000",
      demo: "chatbot-demo"
    },
    {
      id: "image-generator",
      name: "AI Image Generator",
      description: "Create stunning visuals and graphics with AI-powered image generation",
      icon: <Image className="h-8 w-8" aria-hidden="true" />,
      category: "Creative",
      features: [
        "Text-to-image generation",
        "Style customization",
        "High-resolution output",
        "Batch processing",
        "Commercial usage rights"
      ],
      useCases: ["Marketing", "E-commerce", "Content Creation", "Design"],
      pricing: "From ₹30,000",
      demo: "image-demo"
    },
    {
      id: "content-writer",
      name: "AI Content Writer",
      description: "Generate engaging content for blogs, social media, and marketing",
      icon: <FileText className="h-8 w-8" />,
      category: "Content",
      features: [
        "Blog post generation",
        "Social media content",
        "SEO optimization",
        "Tone customization",
        "Plagiarism-free content"
      ],
      useCases: ["Blogging", "Marketing", "E-commerce", "Agencies"],
      pricing: "From ₹25,000",
      demo: "content-demo"
    },
    {
      id: "video-editor",
      name: "AI Video Editor",
      description: "Automated video editing with AI-powered enhancements",
      icon: <Video className="h-8 w-8" />,
      category: "Media",
      features: [
        "Auto video editing",
        "Background removal",
        "Text-to-speech",
        "Subtitle generation",
        "Style transfer"
      ],
      useCases: ["Marketing", "Education", "Entertainment", "Social Media"],
      pricing: "From ₹75,000",
      demo: "video-demo"
    },
    {
      id: "code-assistant",
      name: "AI Code Assistant",
      description: "Intelligent coding assistant for faster development",
      icon: <Code className="h-8 w-8" />,
      category: "Development",
      features: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Documentation generation",
        "Multi-language support"
      ],
      useCases: ["Software Development", "Web Development", "Startups", "Agencies"],
      pricing: "From ₹40,000",
      demo: "code-demo"
    },
    {
      id: "data-analyzer",
      name: "AI Data Analyzer",
      description: "Advanced data analysis and insights with machine learning",
      icon: <Brain className="h-8 w-8" />,
      category: "Analytics",
      features: [
        "Predictive analytics",
        "Data visualization",
        "Pattern recognition",
        "Automated reporting",
        "Real-time insights"
      ],
      useCases: ["E-commerce", "Finance", "Healthcare", "Manufacturing"],
      pricing: "From ₹60,000",
      demo: "data-demo"
    }
  ];

  const capabilities = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Natural Language Processing",
      description: "Advanced text understanding and generation capabilities"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Computer Vision",
      description: "Image and video analysis with object recognition"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalization",
      description: "AI-driven user experience customization"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-language Support",
      description: "Global reach with 50+ language support"
    }
  ];

  const demos = [
    {
      id: "chatbot-demo",
      title: "AI Chatbot Demo",
      description: "Experience our intelligent customer support bot",
      icon: <MessageSquare className="h-6 w-6" />,
      status: "Live"
    },
    {
      id: "image-demo",
      title: "Image Generator Demo",
      description: "Create stunning visuals with AI",
      icon: <Image className="h-6 w-6" aria-hidden="true" />,
      status: "Coming Soon"
    },
    {
      id: "content-demo",
      title: "Content Writer Demo",
      description: "Generate engaging content instantly",
      icon: <FileText className="h-6 w-6" />,
      status: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Brain className="h-8 w-8 text-emerald-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-100">
              AI Studio
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions. From chatbots to content creation, 
            we build intelligent tools that drive growth and efficiency.
          </p>
        </div>

        {/* AI Capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">AI Capabilities</h2>
            <p className="text-zinc-400">Powered by the latest artificial intelligence technologies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="p-6 rounded-2xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-900 transition-colors">
                <div className="text-emerald-400 mb-4">{capability.icon}</div>
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">{capability.title}</h3>
                <p className="text-zinc-400 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">AI Tools & Solutions</h2>
            <p className="text-zinc-400">Choose the perfect AI solution for your business needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {aiTools.map((tool) => (
              <div
                key={tool.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  selectedTool === tool.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setSelectedTool(selectedTool === tool.id ? null : tool.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-emerald-400">{tool.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{tool.name}</h3>
                      <p className="text-sm text-zinc-400">{tool.category}</p>
                    </div>
                  </div>
                  <ArrowRight 
                    size={20} 
                    className={`text-zinc-400 transition-transform ${
                      selectedTool === tool.id ? "rotate-90" : ""
                    }`}
                  />
                </div>

                <p className="text-zinc-300 mb-4">{tool.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-emerald-400 font-semibold">{tool.pricing}</span>
                  <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                    {tool.useCases.length} Use Cases
                  </span>
                </div>

                {selectedTool === tool.id && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2 text-sm">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                        {tool.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-100 mb-2 text-sm">Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tool.useCases.map((useCase, index) => (
                          <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 px-4 rounded-xl transition-colors">
                      Get Started
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live Demos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Try Our AI Tools</h2>
            <p className="text-zinc-400">Experience the power of AI firsthand</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeDemo === demo.id
                    ? "border-emerald-500/50 bg-emerald-950/20"
                    : "border-white/10 bg-zinc-900/60 hover:border-white/20 hover:bg-zinc-900"
                }`}
                onClick={() => setActiveDemo(activeDemo === demo.id ? null : demo.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-emerald-400">{demo.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-100">{demo.title}</h3>
                    <p className="text-sm text-zinc-400">{demo.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    demo.status === "Live" 
                      ? "bg-emerald-500/20 text-emerald-300" 
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}>
                    {demo.status}
                  </span>
                </div>

                {activeDemo === demo.id && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="bg-zinc-950 rounded-xl p-4 mb-4">
                      <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                        <Play size={14} />
                        <span>Demo Interface</span>
                      </div>
                      <div className="h-32 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center">
                        <span className="text-zinc-500">Interactive Demo Coming Soon</span>
                      </div>
                    </div>
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 px-4 rounded-xl transition-colors">
                      Launch Demo
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-100 mb-4">Why Choose AI?</h2>
            <p className="text-zinc-400">Transform your business with intelligent automation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">10x Faster</h3>
              <p className="text-zinc-400">Automate repetitive tasks and focus on what matters most</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Sparkles className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Intelligent Insights</h3>
              <p className="text-zinc-400">Get data-driven insights to make better business decisions</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-400 mb-4 flex justify-center">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">24/7 Availability</h3>
              <p className="text-zinc-400">Provide round-the-clock service without human limitations</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}