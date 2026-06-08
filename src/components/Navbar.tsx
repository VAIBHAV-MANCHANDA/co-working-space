import React, { useState, useEffect } from "react";
import Logo from "./Logo";

interface NavbarProps {
  onStartBriefing: () => void;
}

export default function Navbar({ onStartBriefing }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-beige/80 backdrop-blur-md border-b border-brand-sand/40 py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus:outline-none cursor-pointer"
          >
            <Logo size="sm" />
          </button>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("areas-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Presence Areas
            </button>
            <button
              onClick={() => scrollToSection("plans-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Workspace Plans
            </button>
            <button
              onClick={() => scrollToSection("standards-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Space Anatomy
            </button>
            <button
              onClick={() => scrollToSection("briefing-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Briefing Questionnaire
            </button>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-sm font-medium text-brand-offblack/80 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* CTA Action */}
          <div className="flex items-center gap-3">
            <button
              id="cta-match-workspace"
              onClick={onStartBriefing}
              className="px-5 py-2.5 bg-brand-charcoal hover:bg-brand-gold hover:text-brand-offblack text-brand-beige text-xs font-semibold uppercase tracking-wider rounded-none border border-brand-charcoal transition-all duration-300 shadow-sm hover:shadow cursor-pointer"
            >
              Match My Workspace
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
