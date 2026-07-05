"use client";
import { motion } from "motion/react";
import { Repeat, Briefcase, PiggyBank } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const personas = [
  {
    icon: Repeat,
    name: "The Paycheck-to-Paycheck Planner",
    emoji: "💸",
    pain: "Runs out of money 5-10 days before payday, every single month.",
    howFinSight:
      "FinSight maps exactly where your money goes, shows when a shortfall is coming weeks in advance, and gives you a specific weekly budget that actually works for your income.",
    tags: ["Spending Analysis", "Shortfall Alerts", "Weekly Budget"],
    color: "blue",
  },
  {
    icon: Briefcase,
    name: "The Freelancer",
    emoji: "🧑‍💻",
    pain: "Income varies wildly month to month. Traditional budgeting advice doesn't work.",
    howFinSight:
      "FinSight's cash-flow model adapts to irregular income, forecasting slow months in advance and helping you build the right financial buffer to stay stable.",
    tags: ["Variable Income", "6-Month Forecast", "Smart Buffers"],
    color: "violet",
  },
  {
    icon: PiggyBank,
    name: "The Goal Saver",
    emoji: "🎯",
    pain: "Saving for a home, wedding, or emergency fund — but has no idea if the timeline is realistic.",
    howFinSight:
      "FinSight builds a personalized savings roadmap, tells you exactly how much to set aside each month, and adjusts your plan if life changes.",
    tags: ["Goal Tracking", "Realistic Timelines", "Savings Roadmap"],
    color: "emerald",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; badgeBg: string; badgeText: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", badgeBg: "bg-blue-500/10", badgeText: "text-blue-300" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", badgeBg: "bg-violet-500/10", badgeText: "text-violet-300" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", badgeBg: "bg-emerald-500/10", badgeText: "text-emerald-300" },
};

export function Personas() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-section">
      <div className="orb orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">Who FinSight Is For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Built for real people,{" "}
            <span className="gradient-text">real situations</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            FinSight meets you where you are — whether you're struggling paycheck to paycheck,
            juggling freelance income, or laser-focused on a savings goal.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, i) => {
            const c = colorMap[persona.color];
            return (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`group glass-card rounded-3xl p-8 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300`}
              >
                {/* Emoji + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{persona.emoji}</span>
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <persona.icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-4">{persona.name}</h3>

                {/* Pain point */}
                <div className="mb-5">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Problem</div>
                  <p className="text-sm text-slate-300 leading-relaxed italic">&ldquo;{persona.pain}&rdquo;</p>
                </div>

                {/* How FinSight helps */}
                <div className="mb-6">
                  <div className={`text-xs font-semibold ${c.text} uppercase tracking-wider mb-2`}>How FinSight Helps</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{persona.howFinSight}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {persona.tags.map((tag) => (
                    <span key={tag} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${c.badgeBg} ${c.badgeText} border ${c.border}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
