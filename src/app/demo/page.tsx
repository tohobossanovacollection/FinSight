"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { StepPersonal } from "@/components/demo/StepPersonal";
import { StepIncome } from "@/components/demo/StepIncome";
import { StepExpenses } from "@/components/demo/StepExpenses";
import { StepDebts } from "@/components/demo/StepDebts";
import { StepGoals } from "@/components/demo/StepGoals";
import { DemoResults } from "@/components/demo/DemoResults";

export interface FormData {
  // Personal
  age: string;
  city: string;
  country: string;
  // Income
  salaryIncome: string;
  freelanceIncome: string;
  otherIncome: string;
  // Expenses
  rent: string;
  utilities: string;
  subscriptions: string;
  groceries: string;
  transportation: string;
  shopping: string;
  entertainment: string;
  healthcare: string;
  education: string;
  otherExpenses: string;
  // Debts
  loans: { type: string; balance: string; monthlyPayment: string }[];
  creditCards: { name: string; balance: string; limit: string }[];
  // Goals
  goalType: string;
  goalAmount: string;
  goalMonths: string;
}

const initialFormData: FormData = {
  age: "",
  city: "",
  country: "",
  salaryIncome: "",
  freelanceIncome: "",
  otherIncome: "",
  rent: "",
  utilities: "",
  subscriptions: "",
  groceries: "",
  transportation: "",
  shopping: "",
  entertainment: "",
  healthcare: "",
  education: "",
  otherExpenses: "",
  loans: [],
  creditCards: [],
  goalType: "",
  goalAmount: "",
  goalMonths: "",
};

const stepLabels = [
  "Profile",
  "Income",
  "Expenses",
  "Debts",
  "Goals",
  "Results",
];

const stepComponents = [StepPersonal, StepIncome, StepExpenses, StepDebts, StepGoals];

export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [direction, setDirection] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const totalSteps = 5; // form steps (0-4), results is 5

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const goNext = () => {
    if (step < totalSteps - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      // Submit → show results
      setDirection(1);
      setShowResults(true);
    }
  };

  const goPrev = () => {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const CurrentStep = stepComponents[step];
  const progress = ((step + 1) / (totalSteps + 1)) * 100;

  if (showResults) {
    return <DemoResults formData={formData} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-32 -left-32 opacity-40" />
      <div className="orb orb-purple w-[400px] h-[400px] top-1/2 right-0 opacity-30" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
              <Activity className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Fin<span className="text-blue-400">Sight</span>
            </span>
          </Link>
          <div className="text-sm text-slate-500">
            Step {step + 1} of {totalSteps}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          {/* Step labels */}
          <div className="flex gap-0 mb-4">
            {stepLabels.slice(0, totalSteps).map((label, i) => (
              <div key={label} className="flex-1 text-center">
                <div
                  className={`text-[10px] font-semibold uppercase tracking-widest transition-colors ${
                    i < step
                      ? "text-blue-400"
                      : i === step
                      ? "text-white"
                      : "text-slate-700"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          {/* Bar */}
          <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          {/* Step dots */}
          <div className="flex justify-between mt-2 -mx-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i < step ? "bg-blue-500" : i === step ? "bg-white scale-125" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="flex-1">
          <div className="glass-card rounded-3xl border border-white/[0.07] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <CurrentStep formData={formData} updateFormData={updateFormData} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={goPrev}
            disabled={step === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
              step === 0
                ? "text-slate-700 cursor-not-allowed"
                : "text-slate-300 hover:text-white btn-secondary"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <motion.button
            onClick={goNext}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary px-8 py-3 flex items-center gap-2"
          >
            <span>{step === totalSteps - 1 ? "Analyze My Finances" : "Continue"}</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Privacy note */}
        <p className="text-center text-xs text-slate-700 mt-6">
          🔒 Your data stays on your device. Nothing is stored or shared.
        </p>
      </div>
    </div>
  );
}
