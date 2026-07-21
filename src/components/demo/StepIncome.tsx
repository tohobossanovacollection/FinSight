"use client";
import { FormData } from "@/app/demo/page";
import { CurrencyInput } from "@/components/demo/CurrencyInput";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepIncome({ formData, updateFormData }: StepProps) {
  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Your Monthly Income</h2>
        <p className="text-[#5C6B7A] text-sm">
          Enter your average after-tax (take-home) income per month.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="input-label" htmlFor="salaryIncome">Salary / Primary Job</label>
          <div className="relative">
            <CurrencyInput
              id="salaryIncome"
              value={formData.salaryIncome}
              onValueChange={(value) => updateFormData({ salaryIncome: value })}
            />
          </div>
        </div>
        
        <div>
          <label className="input-label" htmlFor="freelanceIncome">Freelance / Side Hustle (Average)</label>
          <div className="relative">
            <CurrencyInput
              id="freelanceIncome"
              value={formData.freelanceIncome}
              onValueChange={(value) => updateFormData({ freelanceIncome: value })}
            />
          </div>
        </div>

        <div>
          <label className="input-label" htmlFor="otherIncome">Other Income (Investments, Rental, etc.)</label>
          <div className="relative">
            <CurrencyInput
              id="otherIncome"
              value={formData.otherIncome}
              onValueChange={(value) => updateFormData({ otherIncome: value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
