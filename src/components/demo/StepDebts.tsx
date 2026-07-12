"use client";
import { FormData } from "@/app/demo/page";
import { Plus, Trash2 } from "lucide-react";

interface StepProps {
  formData: FormData;
  updateFormData: (updates: Partial<FormData>) => void;
}

export function StepDebts({ formData, updateFormData }: StepProps) {
  
  const addLoan = () => {
    updateFormData({
      loans: [...formData.loans, { type: "", balance: "", monthlyPayment: "" }]
    });
  };

  const removeLoan = (index: number) => {
    const newLoans = [...formData.loans];
    newLoans.splice(index, 1);
    updateFormData({ loans: newLoans });
  };

  const updateLoan = (index: number, field: string, value: string) => {
    const newLoans = [...formData.loans];
    newLoans[index] = { ...newLoans[index], [field]: value };
    updateFormData({ loans: newLoans });
  };

  const addCreditCard = () => {
    updateFormData({
      creditCards: [...formData.creditCards, { name: "", balance: "", limit: "" }]
    });
  };

  const removeCreditCard = (index: number) => {
    const newCards = [...formData.creditCards];
    newCards.splice(index, 1);
    updateFormData({ creditCards: newCards });
  };

  const updateCreditCard = (index: number, field: string, value: string) => {
    const newCards = [...formData.creditCards];
    newCards[index] = { ...newCards[index], [field]: value };
    updateFormData({ creditCards: newCards });
  };

  return (
    <div className="p-8 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Debts & Credit</h2>
        <p className="text-[#5C6B7A] text-sm">
          Add your outstanding loans (student, auto, personal) and credit card balances.
        </p>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#1A1A2E]">Loans</h3>
          <button onClick={addLoan} className="text-xs font-medium text-[#1C5DFD] hover:text-[#1C5DFD] flex items-center gap-1 bg-[#1C5DFD]/[0.07] px-3 py-1.5 rounded-full transition-colors">
            <Plus className="w-3 h-3" /> Add Loan
          </button>
        </div>
        
        {formData.loans.length === 0 ? (
          <div className="text-sm text-[#9EAABF] italic p-4 rounded-xl border border-dashed border-slate-200 text-center">
            No loans added.
          </div>
        ) : (
          <div className="space-y-4">
            {formData.loans.map((loan, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-100 relative group">
                <button 
                  onClick={() => removeLoan(idx)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="input-label">Type (e.g. Auto)</label>
                    <input type="text" className="input-field py-2 text-sm" value={loan.type} onChange={e => updateLoan(idx, 'type', e.target.value)} />
                  </div>
                  <div>
                    <label className="input-label">Total Balance</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6B7A] text-sm">$</span>
                      <input type="number" className="input-field py-2 pl-6 text-sm" value={loan.balance} onChange={e => updateLoan(idx, 'balance', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="input-label">Monthly Payment</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6B7A] text-sm">$</span>
                      <input type="number" className="input-field py-2 pl-6 text-sm" value={loan.monthlyPayment} onChange={e => updateLoan(idx, 'monthlyPayment', e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#1A1A2E]">Credit Cards</h3>
          <button onClick={addCreditCard} className="text-xs font-medium text-[#1C5DFD] hover:text-[#1C5DFD] flex items-center gap-1 bg-[#1C5DFD]/[0.07] px-3 py-1.5 rounded-full transition-colors">
            <Plus className="w-3 h-3" /> Add Card
          </button>
        </div>
        
        {formData.creditCards.length === 0 ? (
          <div className="text-sm text-[#9EAABF] italic p-4 rounded-xl border border-dashed border-slate-200 text-center">
            No credit cards added.
          </div>
        ) : (
          <div className="space-y-4">
            {formData.creditCards.map((card, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-100 relative group">
                <button 
                  onClick={() => removeCreditCard(idx)}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="input-label">Card Name</label>
                    <input type="text" className="input-field py-2 text-sm" value={card.name} onChange={e => updateCreditCard(idx, 'name', e.target.value)} />
                  </div>
                  <div>
                    <label className="input-label">Current Balance</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6B7A] text-sm">$</span>
                      <input type="number" className="input-field py-2 pl-6 text-sm" value={card.balance} onChange={e => updateCreditCard(idx, 'balance', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="input-label">Credit Limit</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5C6B7A] text-sm">$</span>
                      <input type="number" className="input-field py-2 pl-6 text-sm" value={card.limit} onChange={e => updateCreditCard(idx, 'limit', e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
