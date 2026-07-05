"use client";
import Link from "next/link";
import { Activity, MessageCircle, Code, Users, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Try Demo", href: "/demo" },
    { label: "Open App", href: "/app" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "mailto:hello@finsight.ai" },
  ],
  "Financial Guides": [
    { label: "Understanding Credit", href: "/guides/credit" },
    { label: "Emergency Fund 101", href: "/guides/emergency-fund" },
    { label: "Budgeting for Freelancers", href: "/guides/freelancer-budget" },
    { label: "Debt Payoff Strategies", href: "/guides/debt-payoff" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Data Security", href: "/security" },
  ],
};

const socials = [
  { icon: MessageCircle, href: "https://twitter.com/finsight", label: "Twitter" },
  { icon: Code, href: "https://github.com/finsight", label: "GitHub" },
  { icon: Users, href: "https://linkedin.com/company/finsight", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@finsight.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#080d18]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                <Activity className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Fin<span className="text-blue-400">Sight</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              AI-powered financial health intelligence. Diagnose your finances,
              predict risks, and get a personalized plan — no bank required.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg glass border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.15] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="divider-glow mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} FinSight. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-700">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Not a bank · Not a lender · Your AI Financial Ally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
