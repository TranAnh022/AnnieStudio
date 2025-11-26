"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  // 👇 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(href);
      if (section) {
        const offset = (section as HTMLElement).offsetTop - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-500 ${
        isScrolled ? "bg-transparent backdrop-blur-md" : "bg-[#e1d4c4]"
      }`}
    >
      {/* Logo */}
      <div className="relative w-32 h-10">
        <Image
          src="/LOGO-08.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wider text-[#000D4F]">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
        aria-label="Open Menu"
      >
        <Bars3Icon className="w-7 h-7" />
      </button>

      {/* Slide-in mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#111111] text-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex justify-end p-6">
                <button onClick={() => setOpen(false)} aria-label="Close Menu">
                  <XMarkIcon className="w-7 h-7 text-gray-300 hover:text-white transition" />
                </button>
              </div>

              <div className="flex flex-col mt-6 px-10 space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    whileHover={{ x: 5 }}
                    className="text-[13px] uppercase tracking-[2px] text-gray-300 hover:text-white transition relative "
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
