"use client";
import { motion } from "motion/react";
import { Upload, BrainCircuit, BarChart3 } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Enter your financial info",
    description:
      "Add your income, monthly expenses, debts, and goals manually — or upload a PDF bank statement. No bank logins, no credentials required.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    details: ["Manual data entry", "PDF statement upload", "No bank connection needed"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI builds your financial profile",
    description:
      "FinSight's AI analyzes your complete financial picture, building a personalized cash-flow model and identifying patterns specific to your situation.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]",
    details: ["Behavior pattern analysis", "Cash-flow modeling", "Risk factor detection"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get your Health Score & action plan",
    description:
      "Receive your Financial Health Score, early warnings about upcoming cash-flow risks, and a concrete step-by-step action plan tailored to your goals.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    details: ["Financial Health Score", "6-month cash-flow forecast", "Personalized action plan"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Three steps to{" "}
            <span className="gradient-text">financial clarity</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From zero to a complete financial intelligence report in minutes — 
            no complicated setup, no sensitive credentials.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-emerald-500/30"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            {/* Moving dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
              initial={{ left: "0%" }}
              whileInView={{ left: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
                className="relative text-center lg:text-left"
              >
                {/* Step number circle */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-16 h-16 rounded-2xl ${step.bg} border ${step.borderColor} flex items-center justify-center ${step.glow}`}
                  >
                    <step.icon className={`w-7 h-7 ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#0a0f1e] border border-white/[0.12] flex items-center justify-center">
                      <span className="text-[10px] font-bold text-slate-400">{step.number}</span>
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-5">{step.description}</p>

                {/* Detail chips */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${step.bg} ${step.color} border ${step.borderColor}`}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
