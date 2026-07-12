"use client";
import { FormData } from "@/app/demo/page";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepGoals({ formData, updateFormData }: StepProps) {
  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Financial Goals (Optional)</h2>
        <p className="text-[#5C6B7A] text-sm">
          What are you saving for? Our AI can help you reach it faster.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="input-label" htmlFor="goalType">Goal Type</label>
          <select
            id="goalType"
            className="input-field"
            value={formData.goalType}
            onChange={(e) => updateFormData({ goalType: e.target.value })}
          >
            <option value="">Select a goal type...</option>
            <option value="emergency">Emergency Fund</option>
            <option value="house">Down Payment (House)</option>
            <option value="car">Car Purchase</option>
            <option value="vacation">Vacation</option>
            <option value="wedding">Wedding</option>
            <option value="debt">Debt Payoff</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formData.goalType && (
          <>
            <div>
              <label className="input-label" htmlFor="goalAmount">Target Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5C6B7A] font-medium">$</span>
                <input
                  id="goalAmount"
                  type="number"
                  min="0"
                  className="input-field pl-8"
                  placeholder="0"
                  value={formData.goalAmount}
                  onChange={(e) => updateFormData({ goalAmount: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="input-label" htmlFor="goalMonths">Target Timeline (Months)</label>
              <input
                id="goalMonths"
                type="number"
                min="1"
                className="input-field"
                placeholder="e.g. 12"
                value={formData.goalMonths}
                onChange={(e) => updateFormData({ goalMonths: e.target.value })}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
