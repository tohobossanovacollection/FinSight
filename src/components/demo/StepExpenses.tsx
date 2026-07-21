"use client";
import { FormData } from "@/app/demo/page";
import { CurrencyInput } from "@/components/demo/CurrencyInput";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepExpenses({ formData, updateFormData }: StepProps) {
  const fields = [
    { id: "rent", label: "Rent or Mortgage", key: "rent" as keyof FormData },
    { id: "utilities", label: "Utilities (Water, Electric, Internet)", key: "utilities" as keyof FormData },
    { id: "groceries", label: "Groceries & Food", key: "groceries" as keyof FormData },
    { id: "transportation", label: "Transportation (Gas, Transit, Insurance)", key: "transportation" as keyof FormData },
    { id: "subscriptions", label: "Subscriptions (Netflix, Gym, etc.)", key: "subscriptions" as keyof FormData },
    { id: "shopping", label: "Shopping & Lifestyle", key: "shopping" as keyof FormData },
    { id: "entertainment", label: "Entertainment & Dining Out", key: "entertainment" as keyof FormData },
    { id: "healthcare", label: "Healthcare & Wellness", key: "healthcare" as keyof FormData },
    { id: "education", label: "Education & Childcare", key: "education" as keyof FormData },
    { id: "otherExpenses", label: "Other Expenses", key: "otherExpenses" as keyof FormData },
  ];

  return (
    <div className="p-8 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Monthly Expenses</h2>
        <p className="text-[#5C6B7A] text-sm">
          Estimate your average monthly spending in these categories. Leave blank if not applicable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="input-label" htmlFor={field.id}>{field.label}</label>
            <div className="relative">
              <CurrencyInput
                id={field.id}
                value={formData[field.key] as string}
                onValueChange={(value) => updateFormData({ [field.key]: value })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
