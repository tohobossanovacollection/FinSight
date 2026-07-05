"use client";
import { motion } from "motion/react";
import {
  Activity,
  TrendingUp,
  Lightbulb,
  BrainCircuit,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const features = [
  {
    icon: Activity,
    title: "Financial Health Score",
    description:
      "One clear score that captures your full financial picture — income, spending habits, debt load, and savings rate — so you always know where you stand.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    border: "group-hover:border-blue-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  },
  {
    icon: TrendingUp,
    title: "Predictive Cash-Flow Analysis",
    description:
      "See potential shortfalls and financial risks weeks before they happen, so you can act proactively — not reactively.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
  },
  {
    icon: Lightbulb,
    title: "Personalized Action Plans",
    description:
      "Get concrete, specific next steps tailored to your actual financial situation — not generic tips that apply to everyone.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    border: "group-hover:border-violet-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
  },
  {
    icon: BrainCircuit,
    title: "AI Financial Coaching",
    description:
      "Step-by-step guidance toward your personal goals — whether that's breaking out of paycheck-to-paycheck living or saving for a major milestone.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    border: "group-hover:border-cyan-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
  },
  {
    icon: FileText,
    title: "No Bank Integration Required",
    description:
      "Enter your financial data manually or upload a PDF bank statement. No sensitive login credentials, no third-party bank connections needed.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 group-hover:bg-amber-500/20",
    border: "group-hover:border-amber-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First by Design",
    description:
      "Your financial data is never sold, shared, or used to target you with ads or financial products. Full transparency, always.",
    color: "text-rose-400",
    bg: "bg-rose-500/10 group-hover:bg-rose-500/20",
    border: "group-hover:border-rose-500/30",
    glow: "group-hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]",
  },
];

export function WhyFinSight() {
  return (
    <section id="features" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">Why FinSight</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Everything you need to{" "}
            <span className="gradient-text">take control</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            FinSight combines AI-powered analysis with behavioral science to give
            you a complete financial intelligence system — not just a budgeting app.
          </p>
        </AnimatedSection>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group glass-card rounded-2xl p-7 border border-white/[0.06] cursor-default transition-all duration-300 ${feature.border} ${feature.glow}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 transition-all duration-300`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`mt-5 h-0.5 rounded-full bg-gradient-to-r from-transparent ${
                  feature.color.replace("text-", "via-")
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
