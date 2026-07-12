"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

export function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#F2F2F2]">
      {/* Soft orb */}
      <div className="orb orb-blue w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="orb orb-tint w-[400px] h-[400px] top-0 right-0 opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Gradient border wrapper */}
          <div className="p-px rounded-3xl bg-gradient-to-br from-[#1C5DFD] via-[#519FFA] to-[#C9E2FB]">
            <div className="relative bg-white rounded-[calc(1.5rem-1px)] text-center py-20 px-8">
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#1C5DFD]/30"
                  style={{ left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
                  animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2.5 + i * 0.4, delay: i * 0.3 }}
                />
              ))}

              <AnimatedSection>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
                  Start Understanding Your{" "}
                  <span className="gradient-text">Financial Future</span> Today.
                </h2>

                <p className="text-lg text-[#5C6B7A] max-w-xl mx-auto mb-10 leading-relaxed">
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

                <p className="text-sm text-[#9EAABF] mt-6">
                  Free plan available · No bank connection required · No credit card needed
                </p>
              </AnimatedSection>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
