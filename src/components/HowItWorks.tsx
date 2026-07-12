"use client";
import { motion } from "motion/react";
import { Upload, BrainCircuit, BarChart3 } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Enter your financial info",
    description: "Add your income, monthly expenses, debts, and goals manually — or upload a PDF bank statement. No bank logins, no credentials required.",
    iconBg: "bg-[#1C5DFD]/[0.08]",
    iconColor: "text-[#1C5DFD]",
    chipBg: "bg-[#1C5DFD]/[0.07]",
    chipColor: "text-[#1C5DFD]",
    chipBorder: "border-[#1C5DFD]/15",
    glowColor: "rgba(28,93,253,0.15)",
    details: ["Manual data entry", "PDF statement upload", "No bank connection needed"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI builds your financial profile",
    description: "FinSight's AI analyzes your complete financial picture, building a personalized cash-flow model and identifying patterns specific to your situation.",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    chipBg: "bg-violet-50",
    chipColor: "text-violet-600",
    chipBorder: "border-violet-200",
    glowColor: "rgba(124,58,237,0.12)",
    details: ["Behavior pattern analysis", "Cash-flow modeling", "Risk factor detection"],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Get your Health Score & action plan",
    description: "Receive your Financial Health Score, early warnings about upcoming cash-flow risks, and a concrete step-by-step action plan tailored to your goals.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    chipBg: "bg-emerald-50",
    chipColor: "text-emerald-700",
    chipBorder: "border-emerald-200",
    glowColor: "rgba(16,185,129,0.12)",
    details: ["Financial Health Score", "6-month cash-flow forecast", "Personalized action plan"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-[#F2F2F2]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <div className="badge-brand mb-6 mx-auto w-fit">How It Works</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-5">
            Three steps to{" "}
            <span className="gradient-text">financial clarity</span>
          </h2>
          <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto">
            From zero to a complete financial intelligence report in minutes —
            no complicated setup, no sensitive credentials.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-[16.66%] right-[16.66%] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1C5DFD]/30 via-violet-400/30 to-emerald-400/30"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1C5DFD] shadow-[0_0_12px_rgba(28,93,253,0.6)]"
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
                <div className="flex justify-center lg:justify-start mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-16 h-16 rounded-2xl ${step.iconBg} border border-slate-200 flex items-center justify-center`}
                    style={{ boxShadow: `0 8px 24px ${step.glowColor}` }}
                  >
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#5C6B7A]">{step.number}</span>
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{step.title}</h3>
                <p className="text-[#5C6B7A] leading-relaxed text-sm mb-5">{step.description}</p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${step.chipBg} ${step.chipColor} border ${step.chipBorder}`}
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
