"use client";
import { motion } from "motion/react";
import { Check, Star, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./ui/AnimatedSection";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Get started with the fundamentals of financial health tracking.",
    cta: "Start Free",
    href: "/app",
    highlighted: false,
    features: [
      "Financial Health Score",
      "Basic cash-flow view (1 month)",
      "Manual data entry",
      "3 personalized recommendations",
      "1 savings goal",
      "Community support",
    ],
    badge: null,
  },
  {
    name: "Plus",
    price: "$9",
    period: "/month",
    description: "The complete FinSight experience for individuals serious about financial growth.",
    cta: "Start with Plus",
    href: "/app?plan=plus",
    highlighted: true,
    features: [
      "Everything in Free",
      "6-month cash-flow forecast",
      "Risk alerts & early warnings",
      "PDF statement upload",
      "Unlimited recommendations",
      "Goal roadmap with timelines",
      "AI coaching messages",
      "Monthly financial report",
      "Email support",
    ],
    badge: "Most Popular",
  },
  {
    name: "Premium",
    price: "$19",
    period: "/month",
    description: "Advanced intelligence for power users who want the full picture.",
    cta: "Get Premium",
    href: "/app?plan=premium",
    highlighted: false,
    features: [
      "Everything in Plus",
      "12-month forecast horizon",
      "Scenario planning (what-if analysis)",
      "Multi-income source modeling",
      "Debt payoff optimizer",
      "Custom financial goals",
      "Weekly AI coaching sessions",
      "Priority support",
      "Early access to new features",
    ],
    badge: null,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-blue w-[500px] h-[500px] -bottom-32 left-1/2 -translate-x-1/2 opacity-15" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start free. Upgrade when you need more power. No hidden fees, no upsells, 
            no financial products pushed at you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-blue-950/80 to-slate-900/80 border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.2)]"
                  : "glass-card border-white/[0.06]"
              }`}
            >
              {/* Highlighted border glow */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/40">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative p-8 flex flex-col h-full">
                {/* Plan name */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      {plan.highlighted && <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-8">{plan.description}</p>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 mb-8 ${
                    plan.highlighted
                      ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Divider */}
                <div className="divider-glow mb-6" />

                {/* Features */}
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.highlighted ? "bg-blue-500/20" : "bg-white/[0.06]"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-blue-400" : "text-emerald-400"}`} />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <p className="text-sm text-slate-600">
            All plans include 14-day free trial of Plus. No credit card required to start.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
