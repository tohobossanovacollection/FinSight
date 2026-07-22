"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { Activity, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#1C5DFD]/[0.08] py-3 shadow-[0_2px_16px_rgba(28,93,253,0.07)]"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1C5DFD] to-[#5EA7FD] flex items-center justify-center shadow-[0_4px_12px_rgba(28,93,253,0.35)] group-hover:shadow-[0_6px_18px_rgba(28,93,253,0.5)] transition-all duration-300">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">
              Fin<span className="text-[#1C5DFD]">Sight</span>
            </span>
          </Link>

          {/* Desktop Links — absolutely centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#5C6B7A] hover:text-[#1C5DFD] rounded-full hover:bg-[#1C5DFD]/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/demo" className="btn-primary text-sm px-5 py-2.5">
                <span>Get Started</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-[#5C6B7A] hover:text-[#1C5DFD] hover:bg-[#1C5DFD]/[0.06] transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={mobileOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="absolute inset-0 bg-[#1A1A2E]/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-72 bg-white border-l border-slate-100 p-6 pt-20 flex flex-col gap-2 shadow-2xl"
          initial={{ x: "100%" }}
          animate={mobileOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-base font-medium text-[#5C6B7A] hover:text-[#1C5DFD] rounded-xl hover:bg-[#1C5DFD]/[0.06] transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/demo"
              className="btn-primary text-center justify-center"
              onClick={() => setMobileOpen(false)}
            >
              <span>Get Started</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
