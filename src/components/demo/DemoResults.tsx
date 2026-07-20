"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Activity, AlertTriangle, ArrowRight, Target, BrainCircuit, LineChart } from "lucide-react";
import { FormData } from "@/app/demo/page";

interface DemoResultsProps { formData: FormData; }

export function DemoResults({ formData }: DemoResultsProps) {
  const [loading, setLoading] = useState(true);

  const totalIncome = (Number(formData.salaryIncome) || 0) + (Number(formData.freelanceIncome) || 0) + (Number(formData.otherIncome) || 0);
  const totalExpenses = (Number(formData.rent) || 0) + (Number(formData.utilities) || 0) + (Number(formData.subscriptions) || 0) + (Number(formData.groceries) || 0) + (Number(formData.transportation) || 0) + (Number(formData.shopping) || 0) + (Number(formData.entertainment) || 0) + (Number(formData.healthcare) || 0) + (Number(formData.education) || 0) + (Number(formData.otherExpenses) || 0);
  const totalLoanPayments = formData.loans.reduce((acc, loan) => acc + (Number(loan.monthlyPayment) || 0), 0);
  const cashFlow = totalIncome - totalExpenses - totalLoanPayments;

  const savingsRate = totalIncome > 0 ? (cashFlow / totalIncome) * 100 : 0;
  let score = 50;
  if (savingsRate > 20) score += 25;
  else if (savingsRate > 10) score += 15;
  else if (savingsRate > 0) score += 5;
  else score -= 20;
  score = Math.max(0, Math.min(100, Math.round(score)));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div key="analysis-loading" className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center relative overflow-hidden">
        <div className="orb orb-blue w-[400px] h-[400px] top-0 left-0 opacity-30" />
        <div className="orb orb-tint w-[300px] h-[300px] bottom-0 right-0 opacity-40" />
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1C5DFD] to-[#5EA7FD] flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(28,93,253,0.4)]"
          >
            <Activity className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Analyzing your financial profile...</h2>
          <p className="text-[#5C6B7A]">Building your personalized AI cash-flow model</p>
          <div className="w-64 h-2 bg-slate-200 rounded-full mt-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#1C5DFD] to-[#519FFA]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    );
  }

  const circumference = 2 * Math.PI * 54;
  const strokeColor = score >= 70 ? "#10B981" : score >= 50 ? "#F59E0B" : "#EF4444";

  return (
    <div key="analysis-results" className="min-h-screen bg-gradient-hero pt-24 pb-20 px-6 relative overflow-hidden">
      <div className="orb orb-tint w-[500px] h-[500px] top-0 right-0 opacity-40" />
      <div className="orb orb-blue w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: 0, scale: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mb-6">
            <BrainCircuit className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Analysis Complete</span>
          </div>
          <h1 className="text-4xl font-bold text-[#1A1A2E] mb-4">Your Financial Blueprint</h1>
          <p className="text-[#5C6B7A]">Here's a preview of what FinSight can do for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Health Score */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_32px_rgba(28,93,253,0.07)] flex flex-col items-center justify-center text-center">
            <h3 className="text-[#5C6B7A] font-semibold mb-6">Financial Health Score</h3>
            <div className="relative flex items-center justify-center mb-6">
              <svg width="180" height="140" viewBox="0 0 180 140">
                <path d="M 26 120 A 68 68 0 1 1 154 120" fill="none" stroke="#E0E8F5" strokeWidth="12" strokeLinecap="round" />
                <motion.path
                  d="M 26 120 A 68 68 0 1 1 154 120"
                  fill="none" stroke={strokeColor} strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${circumference * 0.75} ${circumference}`}
                  initial={{ strokeDashoffset: circumference * 0.75 }}
                  animate={{ strokeDashoffset: circumference * 0.75 - (score / 100) * circumference * 0.75 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </svg>
              <div className="absolute bottom-6 text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-5xl font-bold text-[#1A1A2E]">{score}</motion.div>
                <div className="text-xs text-[#9EAABF] mt-1">out of 100</div>
              </div>
            </div>
            <div className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${
              score >= 70 ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
              score >= 50 ? "bg-amber-50 text-amber-600 border-amber-200" :
              "bg-red-50 text-red-600 border-red-200"
            }`}>
              {score >= 70 ? "Good Standing" : score >= 50 ? "Needs Attention" : "High Risk"}
            </div>
          </motion.div>

          {/* Cash Flow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_32px_rgba(28,93,253,0.07)]">
            <h3 className="text-[#5C6B7A] font-semibold mb-6">Monthly Cash Flow</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-[#5C6B7A]">Total Income</span>
                <span className="text-[#1A1A2E] font-semibold">${totalIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5C6B7A]">Total Expenses & Debt</span>
                <span className="text-[#1A1A2E] font-semibold">-${(totalExpenses + totalLoanPayments).toLocaleString()}</span>
              </div>
              <div className="h-px w-full bg-slate-100 my-2" />
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#1A1A2E] font-medium">Net Leftover</span>
                <span className={`font-bold ${cashFlow >= 0 ? "text-emerald-600" : "text-red-500"}`}>
                  {cashFlow >= 0 ? "+" : ""}${cashFlow.toLocaleString()}
                </span>
              </div>
            </div>
            {cashFlow < 0 ? (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                <div className="text-sm">
                  <span className="font-semibold text-red-600 block mb-1">Negative Cash Flow Alert</span>
                  <span className="text-red-500">You are spending more than you earn. FinSight can help you identify exactly where to cut back.</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#1C5DFD]/[0.06] border border-[#1C5DFD]/15 flex gap-3">
                <LineChart className="w-5 h-5 text-[#1C5DFD] shrink-0" />
                <div className="text-sm">
                  <span className="font-semibold text-[#1C5DFD] block mb-1">Growth Potential</span>
                  <span className="text-[#5C6B7A]">You have a healthy surplus. Let FinSight optimize how to deploy this for your goals.</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Action Plan */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_32px_rgba(28,93,253,0.07)] mb-10">
          <h3 className="text-[#1A1A2E] font-bold text-xl mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-[#1C5DFD]" /> Top AI Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { priority: "Priority 1", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100", title: cashFlow < 0 ? "Reduce Discretionary Spending" : "Automate Savings", body: cashFlow < 0 ? "Your entertainment and shopping expenses are higher than recommended for your income bracket." : `Set up an auto-transfer of $${Math.round(cashFlow * 0.5)} to a high-yield account right after payday.` },
              { priority: "Priority 2", color: "text-[#1C5DFD]", bg: "bg-[#1C5DFD]/[0.05] border-[#1C5DFD]/10", title: "Debt Optimization", body: formData.creditCards.length > 0 ? "Focus extra payments on your highest interest credit card while making minimums on the rest." : "You have a good debt profile. Consider building a 3-month emergency buffer next." },
              { priority: "Priority 3", color: "text-violet-600", bg: "bg-violet-50 border-violet-100", title: "Unlock Full Analysis", body: "This is just a surface-level demo. Create an account to unlock full 6-month forecasting and scenario planning." },
            ].map((rec) => (
              <div key={rec.priority} className={`p-4 rounded-xl border ${rec.bg}`}>
                <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${rec.color}`}>{rec.priority}</div>
                <div className="text-[#1A1A2E] font-semibold mb-1 text-sm">{rec.title}</div>
                <div className="text-sm text-[#5C6B7A]">{rec.body}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <Link href="/#pricing" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2 mb-4">
            <span>Get Your Full FinSight Plan</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#9EAABF]">Free to start. No credit card required.</p>
        </motion.div>
      </div>
    </div>
  );
}
