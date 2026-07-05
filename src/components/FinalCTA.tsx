"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="orb orb-purple w-[400px] h-[400px] top-0 right-0 opacity-20" />
      <div className="orb orb-green w-[300px] h-[300px] bottom-0 left-0 opacity-15" />

      {/* Animated gradient border */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-emerald-500/20 p-px">
            <div className="absolute inset-[1px] rounded-3xl bg-[#0a0f1e]" />
          </div>

          {/* Content */}
          <div className="relative text-center py-20 px-8">
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-blue-400/40"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + i * 0.5,
                  delay: i * 0.3,
                }}
              />
            ))}

            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-emerald-300">Now in Early Access</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                Start Understanding Your{" "}
                <span className="gradient-text">Financial Future</span> Today.
              </h2>

              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Join thousands of people using FinSight to take control of their finances —
                predict what's coming, plan ahead, and finally feel confident about money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/app" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2.5">
                    <span>Launch FinSight</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/demo" className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2.5">
                    <Calendar className="w-5 h-5" />
                    <span>Try the Demo</span>
                  </Link>
                </motion.div>
              </div>

              <p className="text-sm text-slate-600 mt-6">
                Free plan available · No bank connection required · No credit card needed
              </p>
            </AnimatedSection>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
