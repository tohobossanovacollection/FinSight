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
    <footer className="relative border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1C5DFD] to-[#5EA7FD] flex items-center justify-center shadow-[0_4px_12px_rgba(28,93,253,0.3)]">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">
                Fin<span className="text-[#1C5DFD]">Sight</span>
              </span>
            </Link>
            <p className="text-sm text-[#5C6B7A] leading-relaxed mb-6 max-w-xs">
              AI-powered financial health intelligence. Diagnose your finances,
              predict risks, and get a personalized plan — no bank required.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#5C6B7A] hover:text-[#1C5DFD] hover:border-[#1C5DFD]/30 hover:bg-[#1C5DFD]/[0.05] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-xs font-bold text-[#1A1A2E] uppercase tracking-widest mb-5">
                {category}
              </div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5C6B7A] hover:text-[#1C5DFD] transition-colors duration-200"
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
          <p className="text-sm text-[#9EAABF]">
            © {new Date().getFullYear()} FinSight. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#9EAABF]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1C5DFD] animate-pulse" />
            <span>Not a bank · Not a lender · Your AI Financial Ally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
