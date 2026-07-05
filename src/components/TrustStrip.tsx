"use client";
import { motion } from "motion/react";
import { Lock, Package, UserCheck, FlaskConical } from "lucide-react";

const badges = [
  {
    icon: Lock,
    label: "Bank-grade data encryption",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Package,
    label: "No hidden loans or products sold",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: UserCheck,
    label: "Your data, your control",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: FlaskConical,
    label: "Built on real financial behavior science",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
];

export function TrustStrip() {
  return (
    <section className="relative py-10 border-y border-white/[0.05] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/20 to-transparent" />
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="divider-glow absolute bottom-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <p className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
              Not a Bank.{" "}
              <span className="text-slate-400">Not a Lender.</span>{" "}
              <span className="gradient-text">Just Your AI Financial Ally.</span>
            </p>
          </motion.div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-medium ${badge.bg} ${badge.color}`}
              >
                <badge.icon className="w-3.5 h-3.5 shrink-0" />
                {badge.label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
