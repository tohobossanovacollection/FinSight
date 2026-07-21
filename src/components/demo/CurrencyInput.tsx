"use client";

interface CurrencyInputProps {
  id?: string;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function normalizeCurrencyValue(value: string) {
  const [wholeDollars] = value.split(".");
  const digits = wholeDollars.replace(/\D/g, "");

  if (!digits) return "";

  return digits.replace(/^0+(?=\d)/, "");
}

export function formatCurrencyValue(value: string) {
  const normalizedValue = normalizeCurrencyValue(value);

  return normalizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function CurrencyInput({
  id,
  value,
  onValueChange,
  className = "",
}: CurrencyInputProps) {
  const classes = ["input-field", "currency-input", className]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      id={id}
      type="text"
      inputMode="numeric"
      pattern="[0-9,]*"
      className={classes}
      placeholder="$"
      value={formatCurrencyValue(value)}
      onChange={(event) => onValueChange(normalizeCurrencyValue(event.target.value))}
    />
  );
}
