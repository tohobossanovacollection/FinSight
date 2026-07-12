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
    <section id="pricing" className="section-padding relative overflow-hidden bg-[#F2F2F2]">
      <div className="orb orb-blue w-[400px] h-[400px] -bottom-32 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="badge-brand mb-6 mx-auto w-fit">Pricing</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-5">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto">
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
                  ? "bg-[#1C5DFD] border-[#1C5DFD] shadow-[0_24px_60px_rgba(28,93,253,0.3)]"
                  : "bg-white border-slate-100 hover:border-[#1C5DFD]/20 hover:shadow-[0_12px_40px_rgba(28,93,253,0.08)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1A2E] text-white text-xs font-bold shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-[#1A1A2E]"}`}>{plan.name}</h3>
                    {plan.highlighted && <Zap className="w-4 h-4 text-white/80 fill-white/80" />}
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-[#1A1A2E]"}`}>{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.highlighted ? "text-white/70" : "text-[#9EAABF]"}`}>{plan.period}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-8 ${plan.highlighted ? "text-white/80" : "text-[#5C6B7A]"}`}>{plan.description}</p>

                <Link
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 mb-8 ${
                    plan.highlighted
                      ? "bg-white text-[#1C5DFD] hover:bg-white/90 shadow-lg"
                      : "btn-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className={`h-px mb-6 ${plan.highlighted ? "bg-white/20" : "bg-slate-100"}`} />

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? "bg-white/20" : "bg-[#1C5DFD]/[0.08]"}`}>
                        <Check className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-[#1C5DFD]"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-[#5C6B7A]"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={0.3}>
          <p className="text-sm text-[#9EAABF]">
            All plans include 14-day free trial of Plus. No credit card required to start.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
