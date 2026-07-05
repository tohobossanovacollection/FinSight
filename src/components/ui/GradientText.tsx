"use client";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "blue" | "green";
}

export function GradientText({
  children,
  className = "",
  variant = "default",
}: GradientTextProps) {
  const variants = {
    default: "gradient-text",
    blue: "gradient-text-blue",
    green:
      "bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",
  };

  return <span className={`${variants[variant]} ${className}`}>{children}</span>;
}
