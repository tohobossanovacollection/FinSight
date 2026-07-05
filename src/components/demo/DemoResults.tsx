"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Activity, AlertTriangle, ArrowRight, Target, BrainCircuit, LineChart } from "lucide-react";
import { FormData } from "@/app/demo/page";

interface DemoResultsProps {
  formData: FormData;
}

export function DemoResults({ formData }: DemoResultsProps) {
  const [loading, setLoading] = useState(true);
  
  // Calculate basic metrics
  const totalIncome = 
    (Number(formData.salaryIncome) || 0) + 
    (Number(formData.freelanceIncome) || 0) + 
    (Number(formData.otherIncome) || 0);

  const totalExpenses = 
    (Number(formData.rent) || 0) + 
    (Number(formData.utilities) || 0) + 
    (Number(formData.subscriptions) || 0) + 
    (Number(formData.groceries) || 0) + 
    (Number(formData.transportation) || 0) + 
    (Number(formData.shopping) || 0) + 
    (Number(formData.entertainment) || 0) + 
    (Number(formData.healthcare) || 0) + 
    (Number(formData.education) || 0) + 
    (Number(formData.otherExpenses) || 0);

  const totalLoanPayments = formData.loans.reduce((acc, loan) => acc + (Number(loan.monthlyPayment) || 0), 0);
  
  const cashFlow = totalIncome - totalExpenses - totalLoanPayments;
  
  // Very basic scoring logic for demo purposes
  const savingsRate = totalIncome > 0 ? (cashFlow / totalIncome) * 100 : 0;
  let score = 50;
  if (savingsRate > 20) score += 25;
  else if (savingsRate > 10) score += 15;
  else if (savingsRate > 0) score += 5;
  else score -= 20;

  // Bound score between 0 and 100
  score = Math.max(0, Math.min(100, Math.round(score)));

  useEffect(() => {
    // Simulate AI thinking
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <Activity className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Analyzing your financial profile...</h2>
          <p className="text-slate-400">Building your personalized AI cash-flow model</p>
          
          <div className="w-64 h-2 bg-white/10 rounded-full mt-8 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
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
    <div className="min-h-screen bg-gradient-hero pt-24 pb-20 px-6 relative overflow-hidden">
      <div className="orb orb-blue w-[600px] h-[600px] top-0 right-0 opacity-20" />
      <div className="orb orb-green w-[500px] h-[500px] bottom-0 left-0 opacity-15" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6 bg-emerald-500/10 text-emerald-400">
            <BrainCircuit className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Analysis Complete</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Your Financial Blueprint</h1>
          <p className="text-slate-400">Here's a preview of what FinSight can do for you.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Health Score */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card rounded-3xl p-8 border border-white/[0.08] flex flex-col items-center justify-center text-center">
            <h3 className="text-slate-400 font-medium mb-6">Financial Health Score</h3>
            
            <div className="relative flex items-center justify-center mb-6">
              <svg width="180" height="140" viewBox="0 0 180 140">
                <path d="M 26 120 A 68 68 0 1 1 154 120" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" strokeLinecap="round" />
                <motion.path
                  d="M 26 120 A 68 68 0 1 1 154 120"
                  fill="none"
                  stroke={strokeColor}
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${circumference * 0.75} ${circumference}`}
                  initial={{ strokeDashoffset: circumference * 0.75 }}
                  animate={{ strokeDashoffset: circumference * 0.75 - (score/100) * circumference * 0.75 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </svg>
              <div className="absolute bottom-6 text-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-5xl font-bold text-white">
                  {score}
                </motion.div>
                <div className="text-xs text-slate-400 mt-1">out of 100</div>
              </div>
            </div>

            <div className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
              score >= 70 ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
              score >= 50 ? "bg-amber-500/10 text-amber-400 border-amber-500/20" : 
              "bg-red-500/10 text-red-400 border-red-500/20"
            }`}>
              {score >= 70 ? "Good Standing" : score >= 50 ? "Needs Attention" : "High Risk"}
            </div>
          </motion.div>

          {/* Cash Flow */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-3xl p-8 border border-white/[0.08]">
            <h3 className="text-slate-400 font-medium mb-6">Monthly Cash Flow</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Total Income</span>
                <span className="text-white font-semibold">${totalIncome.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Total Expenses & Debt</span>
                <span className="text-white font-semibold">-${(totalExpenses + totalLoanPayments).toLocaleString()}</span>
              </div>
              <div className="h-px w-full bg-white/10 my-2" />
              <div className="flex justify-between items-center text-lg">
                <span className="text-white font-medium">Net Leftover</span>
                <span className={`font-bold ${cashFlow >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                  {cashFlow >= 0 ? "+" : ""}${cashFlow.toLocaleString()}
                </span>
              </div>
            </div>

            {cashFlow < 0 ? (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                <div className="text-sm text-red-200">
                  <span className="font-semibold text-red-400 block mb-1">Negative Cash Flow Alert</span>
                  You are spending more than you earn. FinSight can help you identify exactly where to cut back.
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex gap-3">
                <LineChart className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-sm text-blue-200">
                  <span className="font-semibold text-blue-400 block mb-1">Growth Potential</span>
                  You have a healthy surplus. Let FinSight optimize how to deploy this for your goals.
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Action Plan */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-3xl p-8 border border-white/[0.08] mb-10">
          <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-violet-400" /> Top AI Recommendations
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-2">Priority 1</div>
              <div className="text-white font-medium mb-1">{cashFlow < 0 ? "Reduce Discretionary Spending" : "Automate Savings"}</div>
              <div className="text-sm text-slate-400">
                {cashFlow < 0 
                  ? "Your entertainment and shopping expenses are higher than recommended for your income bracket." 
                  : `Set up an auto-transfer of $${Math.round(cashFlow * 0.5)} to a high-yield account right after payday.`}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-2">Priority 2</div>
              <div className="text-white font-medium mb-1">Debt Optimization</div>
              <div className="text-sm text-slate-400">
                {formData.creditCards.length > 0
                  ? "Focus extra payments on your highest interest credit card while making minimums on the rest."
                  : "You have a good debt profile. Consider building a 3-month emergency buffer next."}
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-xs font-bold text-violet-400 uppercase tracking-wide mb-2">Priority 3</div>
              <div className="text-white font-medium mb-1">Unlock Full Analysis</div>
              <div className="text-sm text-slate-400">
                This is just a surface-level demo. Create an account to unlock full 6-month forecasting and scenario planning.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-center">
          <Link href="/app" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2 mb-4">
            <span>Get Your Full FinSight Plan</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-slate-500">Free to start. No credit card required.</p>
        </motion.div>

      </div>
    </div>
  );
}
