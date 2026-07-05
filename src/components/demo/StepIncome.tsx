"use client";
import { FormData } from "@/app/demo/page";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepIncome({ formData, updateFormData }: StepProps) {
  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Your Monthly Income</h2>
        <p className="text-slate-400 text-sm">
          Enter your average after-tax (take-home) income per month.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="input-label" htmlFor="salaryIncome">Salary / Primary Job</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input
              id="salaryIncome"
              type="number"
              min="0"
              className="input-field pl-8"
              placeholder="0"
              value={formData.salaryIncome}
              onChange={(e) => updateFormData({ salaryIncome: e.target.value })}
            />
          </div>
        </div>
        
        <div>
          <label className="input-label" htmlFor="freelanceIncome">Freelance / Side Hustle (Average)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input
              id="freelanceIncome"
              type="number"
              min="0"
              className="input-field pl-8"
              placeholder="0"
              value={formData.freelanceIncome}
              onChange={(e) => updateFormData({ freelanceIncome: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="input-label" htmlFor="otherIncome">Other Income (Investments, Rental, etc.)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
            <input
              id="otherIncome"
              type="number"
              min="0"
              className="input-field pl-8"
              placeholder="0"
              value={formData.otherIncome}
              onChange={(e) => updateFormData({ otherIncome: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
