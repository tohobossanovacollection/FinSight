"use client";
import { motion } from "motion/react";
import { Activity, TrendingUp, Lightbulb, BrainCircuit, FileText, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const features = [
  {
    icon: Activity,
    title: "Financial Health Score",
    description: "One clear score that captures your full financial picture — income, spending habits, debt load, and savings rate — so you always know where you stand.",
    iconBg: "bg-[#1C5DFD]/[0.08]",
    iconColor: "text-[#1C5DFD]",
    accentColor: "#1C5DFD",
  },
  {
    icon: TrendingUp,
    title: "Predictive Cash-Flow Analysis",
    description: "See potential shortfalls and financial risks weeks before they happen, so you can act proactively — not reactively.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "#10B981",
  },
  {
    icon: Lightbulb,
    title: "Personalized Action Plans",
    description: "Get concrete, specific next steps tailored to your actual financial situation — not generic tips that apply to everyone.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accentColor: "#7C3AED",
  },
  {
    icon: BrainCircuit,
    title: "AI Financial Coaching",
    description: "Step-by-step guidance toward your personal goals — whether that's breaking out of paycheck-to-paycheck living or saving for a major milestone.",
    iconBg: "bg-[#C9E2FB]/40",
    iconColor: "text-[#517292]",
    accentColor: "#519FFA",
  },
  {
    icon: FileText,
    title: "No Bank Integration Required",
    description: "Enter your financial data manually or upload a PDF bank statement. No sensitive login credentials, no third-party bank connections needed.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First by Design",
    description: "Your financial data is never sold, shared, or used to target you with ads or financial products. Full transparency, always.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "#EF4444",
  },
];

export function WhyFinSight() {
  return (
    <section id="features" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <div className="badge-brand mb-6 mx-auto w-fit">Why FinSight</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-5">
            Everything you need to{" "}
            <span className="gradient-text">take control</span>
          </h2>
          <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto leading-relaxed">
            FinSight combines AI-powered analysis with behavioral science to give
            you a complete financial intelligence system — not just a budgeting app.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-7 border border-slate-100 cursor-default transition-all duration-300 hover:border-[#1C5DFD]/20 hover:shadow-[0_12px_40px_rgba(28,93,253,0.1)]"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-3">{feature.title}</h3>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">{feature.description}</p>
              <div
                className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${feature.accentColor}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
