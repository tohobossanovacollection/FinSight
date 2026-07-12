"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Activity,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  ChevronUp,
  Check,
} from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const tabs = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "cashflow", label: "Cash Flow", icon: TrendingUp },
  { id: "risks", label: "Risk Alerts", icon: AlertTriangle },
  { id: "recommendations", label: "Recommendations", icon: Lightbulb },
  { id: "goals", label: "Goals", icon: Target },
];

function OverviewPanel() {
  const circumference = 2 * Math.PI * 54;
  return (
    <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div>
          <h3 className="text-sm font-bold text-[#5C6B7A] mb-4 uppercase tracking-widest">Financial Health Score</h3>
          <div className="relative flex items-center justify-center mb-4">
            <svg width="180" height="140" viewBox="0 0 180 140">
              <path d="M 26 120 A 68 68 0 1 1 154 120" fill="none" stroke="#E0E8F5" strokeWidth="12" strokeLinecap="round" />
              <motion.path
                d="M 26 120 A 68 68 0 1 1 154 120"
                fill="none"
                stroke="url(#scoreGrad)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${circumference * 0.75} ${circumference}`}
                initial={{ strokeDashoffset: circumference * 0.75 }}
                animate={{ strokeDashoffset: circumference * 0.75 - 0.78 * circumference * 0.75 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C5DFD" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-6 text-center">
              <div className="text-5xl font-bold text-[#1A1A2E]">78</div>
              <div className="text-xs text-[#9EAABF] mt-1">out of 100</div>
            </div>
          </div>
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm font-semibold">
              <ChevronUp className="w-3.5 h-3.5" /> Good Financial Standing
            </span>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: "Income Stability", score: 88, color: "bg-[#1C5DFD]" },
            { label: "Spending Discipline", score: 72, color: "bg-emerald-500" },
            { label: "Debt Management", score: 64, color: "bg-amber-500" },
            { label: "Savings Rate", score: 55, color: "bg-violet-500" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-[#5C6B7A] font-semibold">{item.label}</span>
                <span className="text-sm text-[#1A1A2E] font-bold">{item.score}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${item.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CashFlowPanel() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const values = [2100, 1850, 2400, 1600, 2800, -340, 1200, 800];
  const max = Math.max(...values.map(Math.abs));
  
  return (
    <div className="p-6 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-base font-bold text-[#1A1A2E]">Cash Flow Forecast</h3>
          <p className="text-sm text-[#5C6B7A] mt-0.5">Projected over 8 months</p>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#1C5DFD]" /><span className="text-[#5C6B7A] font-medium">Positive</span></div>
          <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-red-500" /><span className="text-[#5C6B7A] font-medium">Shortfall</span></div>
        </div>
      </div>
      <div className="flex items-end gap-3 h-40 mb-3">
        {values.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <span className={`text-[10px] font-bold ${v < 0 ? "text-red-500" : "text-[#5C6B7A]"}`}>
              {v < 0 ? `-$${Math.abs(v)}` : `+$${v}`}
            </span>
            <div className="w-full flex flex-col justify-end" style={{ height: "100px" }}>
              <motion.div
                className={`w-full rounded-t-lg ${v < 0 ? "bg-red-500/80 border border-red-500/40" : "bg-[#1C5DFD]/80"}`}
                style={{ height: `${(Math.abs(v) / max) * 100}%` }}
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              />
            </div>
            <span className="text-[10px] font-medium text-[#9EAABF]">{months[i]}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
        <div className="text-xs text-[#5C6B7A]">
          <span className="font-bold text-amber-600">June shortfall detected.</span> Your expenses are projected to exceed income by $340. Adjust entertainment spending now to prevent this.
        </div>
      </div>
    </div>
  );
}

function RisksPanel() {
  const risks = [
    { level: "HIGH", title: "June Cash Shortfall", description: "Expenses projected to exceed income by $340 in 6 weeks. Reduce discretionary spending by 12%.", badge: "bg-red-50 border-red-200 text-red-600" },
    { level: "MED", title: "Debt-to-Income Ratio Rising", description: "Your DTI ratio increased from 28% to 34% this quarter. Avoid new credit obligations.", badge: "bg-amber-50 border-amber-200 text-amber-600" },
    { level: "LOW", title: "Emergency Fund Gap", description: "You have 1.4 months of expenses saved. Target is 3 months. No immediate risk.", badge: "bg-[#1C5DFD]/[0.05] border-[#1C5DFD]/10 text-[#1C5DFD]" },
  ];
  return (
    <div className="p-6 md:p-8 space-y-4">
      <h3 className="text-base font-bold text-[#1A1A2E] mb-5">Risk Analysis</h3>
      {risks.map((r, i) => (
        <motion.div
          key={r.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm"
        >
          <span className={`shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold border h-fit ${r.badge}`}>{r.level}</span>
          <div>
            <div className="text-sm font-bold text-[#1A1A2E] mb-1">{r.title}</div>
            <div className="text-xs text-[#5C6B7A] leading-relaxed">{r.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function RecommendationsPanel() {
  const recs = [
    { title: "Cut entertainment by $80/month", impact: "Prevents June shortfall", icon: "🎯" },
    { title: "Build $200 emergency buffer", impact: "Reduces financial stress score", icon: "💰" },
    { title: "Consolidate 2 subscriptions", impact: "Saves $34/month", icon: "📦" },
    { title: "Increase savings by 3%", impact: "Reaches goal 4 months earlier", icon: "📈" },
  ];
  return (
    <div className="p-6 md:p-8">
      <h3 className="text-base font-bold text-[#1A1A2E] mb-5">Your Action Plan</h3>
      <div className="space-y-3">
        {recs.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-[#1C5DFD]/30 transition-colors group shadow-sm"
          >
            <span className="text-xl shrink-0">{r.icon}</span>
            <div className="flex-1">
              <div className="text-sm font-bold text-[#1A1A2E] mb-0.5">{r.title}</div>
              <div className="text-xs font-medium text-emerald-600">{r.impact}</div>
            </div>
            <div className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#1C5DFD] group-hover:bg-[#1C5DFD]/10 transition-all">
              <Check className="w-3 h-3 text-slate-300 group-hover:text-[#1C5DFD] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function GoalsPanel() {
  const goals = [
    { name: "Emergency Fund", target: 5000, current: 2400, color: "emerald", emoji: "🛡️" },
    { name: "Home Down Payment", target: 30000, current: 8200, color: "brand-primary", emoji: "🏠" },
    { name: "Debt Payoff", target: 12000, current: 9800, color: "violet", emoji: "💳" },
  ];
  return (
    <div className="p-6 md:p-8 space-y-5">
      <h3 className="text-base font-bold text-[#1A1A2E] mb-5">Financial Goals</h3>
      {goals.map((g, i) => {
        const pct = Math.round((g.current / g.target) * 100);
        return (
          <motion.div key={g.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <span>{g.emoji}</span>
                <span className="text-sm font-bold text-[#1A1A2E]">{g.name}</span>
              </div>
              <span className="text-xs font-bold text-[#5C6B7A]">{pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden mb-2">
              <motion.div 
                className="h-full rounded-full" 
                style={{ backgroundColor: g.color === 'brand-primary' ? '#1C5DFD' : g.color === 'emerald' ? '#10B981' : '#7C3AED' }}
                initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.3 + i * 0.1 }} 
              />
            </div>
            <div className="flex justify-between text-[11px] font-medium text-[#9EAABF]">
              <span>${g.current.toLocaleString()} saved</span>
              <span>Goal: ${g.target.toLocaleString()}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

const panelComponents: Record<string, React.ComponentType> = {
  overview: OverviewPanel,
  cashflow: CashFlowPanel,
  risks: RisksPanel,
  recommendations: RecommendationsPanel,
  goals: GoalsPanel,
};

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("overview");
  const ActivePanel = panelComponents[activeTab];

  return (
    <section id="product" className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="badge-brand mb-6 mx-auto w-fit">Product Showcase</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-5">
            Your full financial picture,{" "}
            <span className="gradient-text">in one dashboard</span>
          </h2>
          <p className="text-lg text-[#5C6B7A] max-w-2xl mx-auto">
            Explore the FinSight dashboard — built around real financial health, not charts or stock tickers.
          </p>
        </AnimatedSection>

        {/* Dashboard Container */}
        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-[0_24px_80px_rgba(28,93,253,0.1)]">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-[#5C6B7A] font-mono font-medium">app.finsight.ai/dashboard</span>
              </div>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded bg-slate-200" />
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto border-b border-slate-100 px-4 bg-white">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-[#1C5DFD] text-[#1C5DFD]"
                      : "border-transparent text-[#9EAABF] hover:text-[#5C6B7A]"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel Content */}
            <div className="min-h-[380px] bg-[#FAFCFE]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <ActivePanel />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/app"
              className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2.5"
            >
              <span>Open Product</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <p className="text-sm text-[#9EAABF] mt-4 font-medium">No credit card required · Free to start</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
