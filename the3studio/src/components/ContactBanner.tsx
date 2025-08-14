"use client";

import { CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

type BannerType = "success" | "error" | "spam" | "invalid" | "db_error" | undefined;

interface ContactBannerProps {
  type?: BannerType;
  onClose?: () => void;
}

const messages = {
  success: {
    title: "Message sent successfully!",
    message: "We'll get back to you within 24 hours.",
    icon: CheckCircle,
    className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  },
  error: {
    title: "Something went wrong",
    message: "Please try again or contact us directly.",
    icon: XCircle,
    className: "border-red-500/30 bg-red-500/10 text-red-300",
  },
  spam: {
    title: "Spam detected",
    message: "Please ensure you're a human user.",
    icon: AlertCircle,
    className: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  },
  invalid: {
    title: "Invalid form data",
    message: "Please check all required fields.",
    icon: AlertCircle,
    className: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  },
  db_error: {
    title: "Database error",
    message: "Your message was received but not saved. We'll still respond.",
    icon: AlertCircle,
    className: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
};

export function ContactBanner({ type, onClose }: ContactBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (type) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [type, onClose]);

  if (!type || !isVisible) return null;

  const config = messages[type];
  const Icon = config.icon;

  return (
    <div className={`fixed top-4 right-4 z-50 rounded-xl border p-4 max-w-sm ${config.className}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-semibold">{config.title}</h4>
          <p className="text-sm opacity-90">{config.message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
