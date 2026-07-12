"use client";
import { motion } from "motion/react";
import { Repeat, Briefcase, PiggyBank } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const personas = [
  {
    icon: Repeat,
    name: "The Paycheck-to-Paycheck Planner",
    emoji: "💸",
    pain: "Runs out of money 5–10 days before payday, every single month.",
    howFinSight: "FinSight maps exactly where your money goes, shows when a shortfall is coming weeks in advance, and gives you a specific weekly budget that actually works for your income.",
    tags: ["Spending Analysis", "Shortfall Alerts", "Weekly Budget"],
    iconBg: "bg-[#1C5DFD]/[0.08]",
    iconColor: "text-[#1C5DFD]",
    iconBorder: "border-[#1C5DFD]/15",
    tagBg: "bg-[#1C5DFD]/[0.07]",
    tagText: "text-[#1C5DFD]",
    tagBorder: "border-[#1C5DFD]/15",
    labelColor: "text-[#1C5DFD]",
  },
  {
    icon: Briefcase,
    name: "The Freelancer",
    emoji: "🧑‍💻",
    pain: "Income varies wildly month to month. Traditional budgeting advice doesn't work.",
    howFinSight: "FinSight's cash-flow model adapts to irregular income, forecasting slow months in advance and helping you build the right financial buffer to stay stable.",
    tags: ["Variable Income", "6-Month Forecast", "Smart Buffers"],
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    iconBorder: "border-violet-200",
    tagBg: "bg-violet-50",
    tagText: "text-violet-600",
    tagBorder: "border-violet-200",
    labelColor: "text-violet-600",
  },
  {
    icon: PiggyBank,
    name: "The Goal Saver",
    emoji: "🎯",
    pain: "Saving for a home, wedding, or emergency fund — but has no idea if the timeline is realistic.",
    howFinSight: "FinSight builds a personalized savings roadmap, tells you exactly how much to set aside each month, and adjusts your plan if life changes.",
    tags: ["Goal Tracking", "Realistic Timelines", "Savings Roadmap"],
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    iconBorder: "border-emerald-200",
    tagBg: "bg-emerald-50",
    tagText: "text-emerald-700",
    tagBorder: "border-emerald-200",
    labelColor: "text-emerald-600",
  },
];

export function Personas() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-section">
      <div className="orb orb-tint w-[400px] h-[400px] top-0 right-0 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="badge-brand mb-6 mx-auto w-fit">Who FinSight Is For</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-5">
            Built for real people,{" "}
            <span className="gradient-text">real situations</span>
          </h2>
          <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto">
            FinSight meets you where you are — whether you're struggling paycheck to paycheck,
            juggling freelance income, or laser-focused on a savings goal.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 border border-slate-100 hover:border-[#1C5DFD]/20 hover:shadow-[0_16px_48px_rgba(28,93,253,0.1)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{persona.emoji}</span>
                <div className={`w-10 h-10 rounded-xl ${persona.iconBg} border ${persona.iconBorder} flex items-center justify-center`}>
                  <persona.icon className={`w-5 h-5 ${persona.iconColor}`} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">{persona.name}</h3>

              <div className="mb-5">
                <div className="text-xs font-bold text-[#9EAABF] uppercase tracking-wider mb-2">The Problem</div>
                <p className="text-sm text-[#5C6B7A] leading-relaxed italic">&ldquo;{persona.pain}&rdquo;</p>
              </div>

              <div className="mb-6">
                <div className={`text-xs font-bold ${persona.labelColor} uppercase tracking-wider mb-2`}>How FinSight Helps</div>
                <p className="text-sm text-[#5C6B7A] leading-relaxed">{persona.howFinSight}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {persona.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${persona.tagBg} ${persona.tagText} border ${persona.tagBorder}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
