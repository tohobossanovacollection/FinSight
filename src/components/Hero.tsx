"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play, TrendingUp, AlertTriangle, Target, ChevronUp } from "lucide-react";

function HealthGauge({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference * 0.75;
  const color = score >= 70 ? "#10B981" : score >= 50 ? "#F59E0B" : "#EF4444";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="140" height="110" viewBox="0 0 140 110">
        {/* Background arc */}
        <path
          d="M 20 100 A 54 54 0 1 1 120 100"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Score arc */}
        <motion.path
          d="M 20 100 A 54 54 0 1 1 120 100"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          initial={{ strokeDashoffset: circumference * 0.75 }}
          animate={{ strokeDashoffset: circumference * 0.75 - (score / 100) * circumference * 0.75 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        {/* Glow filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
      </svg>
      <div className="absolute bottom-4 text-center">
        <motion.div
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {score}
        </motion.div>
        <div className="text-xs text-slate-400 font-medium">Health Score</div>
      </div>
    </div>
  );
}

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute glass-card rounded-2xl p-4 shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <div className="orb orb-purple w-[500px] h-[500px] top-1/2 right-0 opacity-50" />
      <div className="orb orb-green w-[400px] h-[400px] bottom-0 left-1/4 opacity-40" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-300">
              AI-Powered Financial Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Know Your{" "}
            <span className="gradient-text">Financial Future</span>{" "}
            — Before It Happens.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FinSight analyzes your income, spending, and debt to{" "}
            <span className="text-slate-200">diagnose your financial health</span>,{" "}
            <span className="text-slate-200">predict cash-flow risks</span> before
            they occur, and guide you with a{" "}
            <span className="text-slate-200">personalized action plan</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/app" className="btn-primary text-base px-7 py-3.5">
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a href="#how-it-works" className="btn-secondary text-base px-7 py-3.5">
                <Play className="w-4 h-4 fill-current" />
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* Social proof micro-stats */}
          <motion.div
            className="flex items-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {[
              { value: "10K+", label: "Beta Users" },
              { value: "94%", label: "Accuracy Rate" },
              { value: "4.9★", label: "User Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Dashboard Mockup */}
        <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">
          {/* Main Dashboard Card */}
          <motion.div
            className="relative w-full max-w-md glass-card rounded-3xl p-6 shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/[0.08]"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-xs text-slate-500 font-medium mb-0.5">FINANCIAL OVERVIEW</div>
                <div className="text-base font-semibold text-white">July 2025</div>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              </div>
            </div>

            {/* Health Gauge */}
            <div className="flex justify-center mb-4">
              <HealthGauge score={78} />
            </div>
            
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <ChevronUp className="w-3 h-3" />
                Good Standing
              </span>
            </div>

            {/* Mini cash flow chart */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-medium text-slate-400">Cash Flow Forecast</span>
                <span className="text-xs text-blue-400 font-medium">6 months</span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {[65, 72, 68, 85, 60, 42].map((h, i) => (
                  <motion.div
                    key={i}
                    className={`flex-1 rounded-t-md ${i === 4 ? "bg-amber-500/60" : i === 5 ? "bg-red-500/60" : "bg-blue-500/60"}`}
                    style={{ height: `${h}%` }}
                    initial={{ scaleY: 0, originY: 1 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1.5">
                {["Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                  <span key={m} className="text-[10px] text-slate-600 flex-1 text-center">{m}</span>
                ))}
              </div>
            </div>

            {/* Risk alert */}
            <motion.div
              className="flex items-start gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-amber-300">Cash Flow Risk — June</div>
                <div className="text-[11px] text-amber-400/70 mt-0.5">
                  Projected shortfall of $340 in 6 weeks
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Card 1 — Savings Goal */}
          <FloatingCard
            className="-left-16 top-8 w-52"
            delay={0.9}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Target className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xs font-semibold text-white">Emergency Fund</div>
            </div>
            <div className="text-lg font-bold text-white mb-1">$2,400<span className="text-slate-500 text-sm font-normal"> / $5,000</span></div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: "48%" }}
                transition={{ delay: 1.5, duration: 1 }}
              />
            </div>
            <div className="mt-1.5 text-[10px] text-slate-500">48% complete · on track</div>
          </FloatingCard>

          {/* Floating Card 2 — Score Trend */}
          <FloatingCard
            className="-right-12 bottom-16 w-44"
            delay={1.1}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-semibold text-white">Score Trend</span>
            </div>
            <div className="text-2xl font-bold text-white">+12 <span className="text-emerald-400 text-sm font-medium">pts</span></div>
            <div className="text-[10px] text-slate-500 mt-0.5">Last 3 months</div>
            <div className="flex items-end gap-0.5 mt-2 h-8">
              {[40, 55, 48, 70, 65, 80].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm bg-blue-500/50"
                  style={{ height: `${h}%` }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.2 + i * 0.05 }}
                />
              ))}
            </div>
          </FloatingCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
