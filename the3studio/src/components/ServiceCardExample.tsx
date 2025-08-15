import { PenTool, ShoppingCart, Bot, Workflow, Cable, BarChart3 } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

/**
 * Example usage of ServiceCard components
 * This demonstrates how to create a services grid using the ServiceCard component
 */
export function ServiceCardExample() {
  const services = [
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Websites that Convert",
      price: "from ₹20,000",
      bullets: ["Framer / Next.js / Shopify", "CRO-first design", "SEO and speed as defaults"],
      accent: "from-orange-500 to-amber-400"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E‑commerce Setups",
      price: "from ₹80,000",
      bullets: ["Shopify storefronts", "Catalog onboarding", "Payments & shipping config"],
      accent: "from-emerald-500 to-lime-400"
    },
    {
      icon: <Bot className="h-5 w-5" />,
      title: "AI Agents",
      price: "from ₹60,000",
      bullets: ["Support, Sales, Analytics", "Knowledge + API integrations", "Guardrails & analytics"],
      accent: "from-sky-500 to-cyan-300"
    },
    {
      icon: <Workflow className="h-5 w-5" />,
      title: "AI Automations",
      price: "from ₹1,20,000",
      bullets: ["Email/Social/Data flows", "Human-in-the-loop", "Dashboards & alerts"],
      accent: "from-violet-500 to-fuchsia-400"
    },
    {
      icon: <Cable className="h-5 w-5" />,
      title: "Headless & Integrations",
      price: "custom",
      bullets: ["Shopify Hydrogen", "Payments, CRMs, ERPs", "Custom APIs & webhooks"],
      accent: "from-teal-500 to-emerald-400"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "CRO & Analytics",
      price: "from ₹15,000",
      bullets: ["GA4/Hotjar", "Experimentation", "Funnel dashboards"],
      accent: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          price={service.price}
          bullets={service.bullets}
          accent={service.accent}
        />
      ))}
    </div>
  );
}
