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
            ? "glass border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
              <Activity className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Fin<span className="text-blue-400">Sight</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/demo"
              className="px-4 py-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Try Demo
            </Link>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/app"
                className="btn-primary text-sm px-5 py-2.5"
              >
                <span>Get Started</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <motion.div
          className="absolute top-0 right-0 h-full w-72 glass-strong border-l border-white/[0.08] p-6 pt-20 flex flex-col gap-2"
          initial={{ x: "100%" }}
          animate={mobileOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-3 text-base font-medium text-slate-300 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/demo"
              className="btn-secondary text-center justify-center"
              onClick={() => setMobileOpen(false)}
            >
              Try Demo
            </Link>
            <Link
              href="/app"
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
