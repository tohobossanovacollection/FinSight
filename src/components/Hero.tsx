"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play, TrendingUp, AlertTriangle, Target, ChevronUp } from "lucide-react";

/* ─── Background: Concentric Circles ─── */
function ConcentricCircles({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-[#6590BA]"
          style={{
            width: `${i * 56}px`,
            height: `${i * 56}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.25 - i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Background: Dot Grid ─── */
function DotGrid({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
      style={{
        backgroundImage: "radial-gradient(circle, #6590BA 1.5px, transparent 1.5px)",
        backgroundSize: "16px 16px",
        opacity: 0.18,
      }}
    />
  );
}

/* ─── Health Gauge ─── */
function HealthGauge({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 54;
  const color = "#1C5DFD";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="140" height="110" viewBox="0 0 140 110">
        <path
          d="M 20 100 A 54 54 0 1 1 120 100"
          fill="none"
          stroke="rgba(28,93,253,0.1)"
          strokeWidth="10"
          strokeLinecap="round"
        />
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
      </svg>
      <div className="absolute bottom-4 text-center">
        <motion.div
          className="text-3xl font-bold text-[#1A1A2E]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {score}
        </motion.div>
        <div className="text-xs text-[#5C6B7A] font-medium">Health Score</div>
      </div>
    </div>
  );
}

/* ─── Floating Card ─── */
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
      className={`absolute glass-card rounded-2xl p-4 ${className}`}
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center bg-gradient-hero overflow-hidden pt-28">
      {/* ── Graphic elements ── */}
      <ConcentricCircles className="w-80 h-80 -top-20 -right-20 opacity-60" />
      <ConcentricCircles className="w-64 h-64 bottom-10 -left-16 opacity-40" />
      <DotGrid className="w-72 h-72 top-24 left-8" />
      <DotGrid className="w-56 h-56 bottom-20 right-16" />

      {/* Soft blue orbs */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-40 -left-40 opacity-40" />
      <div className="orb orb-tint w-[400px] h-[400px] top-32 right-0 opacity-50" />
      <div className="orb orb-muted w-[300px] h-[300px] bottom-0 left-1/3 opacity-30" />

      {/* ── Hero text block ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-12 text-center flex flex-col items-center">


        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1A2E] leading-[1.08] tracking-tight mb-6"
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
          className="text-lg md:text-xl text-[#5C6B7A] leading-relaxed mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          FinSight analyzes your income, spending, and debt to{" "}
          <span className="text-[#1A1A2E] font-semibold">diagnose your financial health</span>,{" "}
          <span className="text-[#1A1A2E] font-semibold">predict cash-flow risks</span> before
          they occur, and guide you with a{" "}
          <span className="text-[#1A1A2E] font-semibold">personalized action plan</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/app" className="btn-primary text-base px-8 py-3.5">
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <a href="#how-it-works" className="btn-secondary text-base px-8 py-3.5">
              <Play className="w-4 h-4 fill-current" />
              See How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="flex items-center justify-center gap-10 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[
            { value: "10K+", label: "Beta Users" },
            { value: "94%", label: "Accuracy Rate" },
            { value: "4.9★", label: "User Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-[#1C5DFD]">{stat.value}</div>
              <div className="text-xs text-[#5C6B7A] font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Dashboard Mockup ── */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-2xl px-6 pb-24">
        <motion.div
          className="relative w-full glass-card rounded-3xl p-6 shadow-[0_32px_80px_rgba(28,93,253,0.1)] border border-[#1C5DFD]/[0.08]"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-xs text-[#6590BA] font-semibold tracking-widest mb-0.5 uppercase">Financial Overview</div>
              <div className="text-base font-semibold text-[#1A1A2E]">July 2025</div>
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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1C5DFD]/[0.08] border border-[#1C5DFD]/20 text-[#1C5DFD] text-xs font-semibold">
              <ChevronUp className="w-3 h-3" />
              Good Standing
            </span>
          </div>

          {/* Cash flow chart */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-[#5C6B7A]">Cash Flow Forecast</span>
              <span className="text-xs text-[#1C5DFD] font-semibold">6 months</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[65, 72, 68, 85, 60, 42].map((h, i) => (
                <motion.div
                  key={i}
                  className={`flex-1 rounded-t-md ${
                    i === 4 ? "bg-amber-400/60" : i === 5 ? "bg-red-400/60" : "bg-[#1C5DFD]/50"
                  }`}
                  style={{ height: `${h}%` }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
                <span key={m} className="text-[10px] text-[#9EAABF] flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Risk alert */}
          <motion.div
            className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-amber-700">Cash Flow Risk — June</div>
              <div className="text-[11px] text-amber-600/80 mt-0.5">
                Projected shortfall of $340 in 6 weeks
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Card 1 — Savings Goal */}
        <FloatingCard className="-left-4 md:-left-16 top-8 w-52" delay={0.9}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-[#1C5DFD]/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-[#1C5DFD]" />
            </div>
            <div className="text-xs font-semibold text-[#1A1A2E]">Emergency Fund</div>
          </div>
          <div className="text-lg font-bold text-[#1A1A2E] mb-1">
            $2,400<span className="text-[#9EAABF] text-sm font-normal"> / $5,000</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#E0E8F5] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[#1C5DFD]"
              initial={{ width: 0 }}
              animate={{ width: "48%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>
          <div className="mt-1.5 text-[10px] text-[#9EAABF]">48% complete · on track</div>
        </FloatingCard>

        {/* Floating Card 2 — Score Trend */}
        <FloatingCard className="-right-4 md:-right-16 bottom-16 w-44" delay={1.1}>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#1C5DFD]" />
            <span className="text-xs font-semibold text-[#1A1A2E]">Score Trend</span>
          </div>
          <div className="text-2xl font-bold text-[#1A1A2E]">
            +12 <span className="text-[#1C5DFD] text-sm font-semibold">pts</span>
          </div>
          <div className="text-[10px] text-[#9EAABF] mt-0.5">Last 3 months</div>
          <div className="flex items-end gap-0.5 mt-2 h-8">
            {[40, 55, 48, 70, 65, 80].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-[#1C5DFD]/40"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2 + i * 0.05 }}
              />
            ))}
          </div>
        </FloatingCard>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9EAABF]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#1C5DFD]/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
