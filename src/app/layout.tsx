import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinSight — AI Financial Intelligence Platform",
  description:
    "FinSight analyzes your income, spending, and debt to diagnose your financial health, predict cash-flow risks before they occur, and guide you with a personalized action plan.",
  keywords: [
    "financial health",
    "cash flow forecast",
    "financial AI",
    "personal finance",
    "financial diagnosis",
    "money management",
  ],
  openGraph: {
    title: "FinSight — Know Your Financial Future",
    description:
      "AI-powered financial health diagnosis, cash-flow predictions, and personalized action plans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
