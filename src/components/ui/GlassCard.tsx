"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "green" | "none";
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "none",
  onClick,
}: GlassCardProps) {
  const glowClasses = {
    blue: "hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
    green: "hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]",
    none: "",
  };

  return (
    <motion.div
      className={`glass-card rounded-2xl ${glowClasses[glow]} transition-shadow duration-300 ${className}`}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
