"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Plus } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";

const faqs = [
  {
    q: "Is FinSight a bank or a lender?",
    a: "No. FinSight is not a bank, a lender, or a financial institution of any kind. We don't hold your money, offer loans, or provide any banking services. FinSight is a purely AI-powered financial intelligence tool that analyzes your existing financial data to help you understand, plan, and improve your financial health.",
  },
  {
    q: "Is my financial data secure?",
    a: "Your data is protected with bank-grade encryption (AES-256 at rest, TLS 1.3 in transit). We never sell your data, never share it with third parties for advertising, and never use it to offer you financial products. You're always in full control — you can delete your data at any time.",
  },
  {
    q: "Do I need to connect my bank account?",
    a: "Absolutely not. FinSight is designed to work without any bank connection. You can enter your financial information manually, or upload a PDF bank statement. No OAuth connections, no bank login credentials, no third-party data sharing required.",
  },
  {
    q: "How accurate are FinSight's predictions?",
    a: "FinSight's cash-flow forecasts achieve over 90% directional accuracy when based on at least 2 months of financial history. Predictions are based on your actual spending patterns and behavioral science models — not generic assumptions. The more data you provide, the more precise your forecast becomes.",
  },
  {
    q: "Is FinSight free to use?",
    a: "Yes! FinSight offers a free plan that includes your Financial Health Score, a basic 1-month cash-flow view, and 3 personalized recommendations. You can upgrade to Plus ($9/month) for the full 6-month forecast, risk alerts, PDF upload, and unlimited recommendations. A 14-day free trial of Plus is available — no credit card required.",
  },
  {
    q: "What kinds of expenses can I track?",
    a: "FinSight supports detailed expense categorization including fixed expenses (rent, utilities, subscriptions), groceries & food, transportation, shopping & lifestyle, entertainment & dining, healthcare, education, and more. You can also track multiple income sources and different types of debts including loans and credit card balances.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? "border-blue-500/30 bg-blue-950/20" : "border-white/[0.06] glass-card"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white pr-4 group-hover:text-blue-300 transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-blue-500/20 text-blue-400" : "bg-white/[0.06] text-slate-500"
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm border-t border-white/[0.06] pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <span className="text-sm font-medium text-slate-400">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Have a question? We've got answers. Or reach us at{" "}
            <a href="mailto:hello@finsight.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
              hello@finsight.ai
            </a>
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
