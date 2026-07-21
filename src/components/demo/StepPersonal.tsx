"use client";
import { FormData } from "@/app/demo/page";
import { COUNTRIES } from "@/components/demo/countries";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepPersonal({ formData, updateFormData }: StepProps) {
  return (
    <div className="p-8 md:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Let&apos;s get to know you</h2>
        <p className="text-[#5C6B7A] text-sm">
          This helps our AI personalize your financial insights and benchmarks.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="input-label" htmlFor="age">Age</label>
          <input id="age" type="number" min="18" max="100" className="input-field" placeholder="e.g. 32" value={formData.age} onChange={(e) => updateFormData({ age: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="input-label" htmlFor="city">City (Optional)</label>
            <input id="city" type="text" className="input-field" placeholder="e.g. Seattle" value={formData.city} onChange={(e) => updateFormData({ city: e.target.value })} />
          </div>
          <div>
            <label className="input-label" htmlFor="country">Country</label>
            <select
              id="country"
              className="input-field"
              value={formData.country}
              onChange={(e) => updateFormData({ country: e.target.value })}
            >
              <option value="">Select a country...</option>
              {COUNTRIES.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
