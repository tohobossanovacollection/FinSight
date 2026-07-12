"use client";
import { motion } from "motion/react";
import { Lock, Package, UserCheck, FlaskConical } from "lucide-react";

const badges = [
  { icon: Lock, label: "Bank-grade data encryption", color: "text-[#1C5DFD]", bg: "bg-[#1C5DFD]/[0.07] border-[#1C5DFD]/20" },
  { icon: Package, label: "No hidden loans or products sold", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
  { icon: UserCheck, label: "Your data, your control", color: "text-violet-600", bg: "bg-violet-50 border-violet-200" },
  { icon: FlaskConical, label: "Built on real financial behavior science", color: "text-amber-600", bg: "bg-amber-50 border-amber-200" },
];

export function TrustStrip() {
  return (
    <section className="relative py-10 border-y border-slate-100 overflow-hidden bg-white">
      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="divider-glow absolute bottom-0 left-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <p className="text-lg md:text-xl font-semibold text-[#1A1A2E] text-center md:text-left">
              Not a Bank.{" "}
              <span className="text-[#5C6B7A]">Not a Lender.</span>{" "}
              <span className="gradient-text">Just Your AI Financial Ally.</span>
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold ${badge.bg} ${badge.color}`}
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
