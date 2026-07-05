"use client";
import { motion } from "motion/react";
import { Eye, Zap, FileUp, BrainCog } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const benefits = [
  {
    icon: Eye,
    title: "Predicts risk instead of just reporting the past",
    description:
      "Most budgeting apps show you what already happened. FinSight's AI looks forward — modeling your next 6 months of cash flow based on your actual spending patterns to warn you before a shortfall hits.",
    highlight: "Proactive, not reactive.",
    visual: "forecast",
    flipped: false,
    color: "blue",
  },
  {
    icon: Zap,
    title: "Turns predictions into personalized recommendations",
    description:
      "Identifying a risk is only half the job. FinSight converts every risk and opportunity into a specific, actionable step you can take this week — not generic advice like 'spend less money'.",
    highlight: "Specific actions, real results.",
    visual: "recs",
    flipped: true,
    color: "emerald",
  },
  {
    icon: FileUp,
    title: "No bank integration — manual or PDF upload",
    description:
      "You're always in control. Enter data manually or upload a PDF statement. FinSight never requests access to your bank credentials, and there's no third-party OAuth required.",
    highlight: "Zero sensitive credentials needed.",
    visual: "upload",
    flipped: false,
    color: "violet",
  },
  {
    icon: BrainCog,
    title: "An ongoing AI coach, not a one-time report",
    description:
      "FinSight grows with you. As your income, expenses, or goals change, your Health Score, forecast, and action plan update automatically — keeping your financial strategy always current.",
    highlight: "Always up-to-date.",
    visual: "coach",
    flipped: true,
    color: "amber",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "shadow-[inset_0_0_60px_rgba(59,130,246,0.08)]" },
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "shadow-[inset_0_0_60px_rgba(16,185,129,0.08)]" },
  violet: { text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20", glow: "shadow-[inset_0_0_60px_rgba(139,92,246,0.08)]" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20", glow: "shadow-[inset_0_0_60px_rgba(245,158,11,0.08)]" },
};

function BenefitVisual({ type, color }: { type: string; color: string }) {
  const c = colorMap[color];
  if (type === "forecast") {
    const bars = [65, 80, 55, 90, 35, 75];
    return (
      <div className={`relative h-full flex items-end justify-center gap-2 px-8 pb-8 pt-12 rounded-2xl ${c.glow} border ${c.border} bg-white/[0.02]`}>
        <div className="absolute top-4 left-4 text-xs font-medium text-slate-500">6-Month Cash Flow</div>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={`flex-1 rounded-t-lg ${i === 4 ? "bg-amber-500/60" : `${c.bg} border-t ${c.border}`}`}
            style={{ height: `${h}%` }}
            initial={{ scaleY: 0, originY: 1 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          />
        ))}
      </div>
    );
  }
  if (type === "recs") {
    const items = ["Cut dining out by $60/month", "Pay down credit card #2 first", "Set up $200/mo auto-transfer"];
    return (
      <div className={`h-full flex flex-col justify-center gap-3 p-6 rounded-2xl ${c.glow} border ${c.border} bg-white/[0.02]`}>
        <div className="text-xs font-medium text-slate-500 mb-1">This Week's Actions</div>
        {items.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl ${c.bg} border ${c.border}`}>
            <div className={`w-5 h-5 rounded-full ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
              <div className={`w-1.5 h-1.5 rounded-full ${c.text.replace("text-", "bg-")}`} />
            </div>
            <span className={`text-sm ${c.text}`}>{item}</span>
          </motion.div>
        ))}
      </div>
    );
  }
  if (type === "upload") {
    return (
      <div className={`h-full flex flex-col items-center justify-center gap-5 p-8 rounded-2xl ${c.glow} border ${c.border} bg-white/[0.02]`}>
        <motion.div className={`w-20 h-20 rounded-2xl ${c.bg} border-2 border-dashed ${c.border} flex items-center justify-center`}
          animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FileUp className={`w-8 h-8 ${c.text}`} />
        </motion.div>
        <div className="text-center">
          <div className="text-sm font-semibold text-white mb-1">Drop PDF Statement</div>
          <div className="text-xs text-slate-500">or enter data manually</div>
        </div>
        <div className="flex gap-3 text-xs">
          {["PDF", "CSV", "Manual"].map((f) => (
            <span key={f} className={`px-3 py-1.5 rounded-full ${c.bg} border ${c.border} ${c.text} font-medium`}>{f}</span>
          ))}
        </div>
      </div>
    );
  }
  // coach
  return (
    <div className={`h-full flex flex-col justify-center gap-4 p-6 rounded-2xl ${c.glow} border ${c.border} bg-white/[0.02]`}>
      <div className="text-xs font-medium text-slate-500 mb-1">Your Score Over Time</div>
      {[{ label: "3 months ago", score: 58 }, { label: "1 month ago", score: 68 }, { label: "Today", score: 78 }].map((item, i) => (
        <div key={item.label}>
          <div className="flex justify-between mb-1.5">
            <span className="text-xs text-slate-400">{item.label}</span>
            <span className={`text-xs font-bold ${c.text}`}>{item.score}</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/[0.06]">
            <motion.div className={`h-full rounded-full ${c.bg.replace("/10", "/80")}`} style={{ width: `${item.score}%` }}
              initial={{ width: 0 }} whileInView={{ width: `${item.score}%` }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.8 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Benefits() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">Why It's Different</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Built for the future,{" "}
            <span className="gradient-text">not the past</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-24">
          {benefits.map((b, i) => {
            const c = colorMap[b.color];
            return (
              <div
                key={b.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${b.flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: b.flipped ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <div className={`inline-flex w-12 h-12 rounded-xl ${c.bg} border ${c.border} items-center justify-center mb-6`}>
                    <b.icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{b.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-5">{b.description}</p>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${c.bg} border ${c.border}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.text.replace("text-", "bg-")}`} />
                    <span className={`text-sm font-semibold ${c.text}`}>{b.highlight}</span>
                  </div>
                </motion.div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, x: b.flipped ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                  className="h-64"
                >
                  <BenefitVisual type={b.visual} color={b.color} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
