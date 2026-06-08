import React from "react";
import { ArrowRight, Globe, Shield, Sparkles } from "lucide-react";
import ContactForm from "./ContactForm";

interface HeroProps {
  onStartBriefing: () => void;
}

export default function Hero({ onStartBriefing }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(247, 246, 240, 0.94), rgba(247, 246, 240, 0.94)), url('/elante_mall_exterior.png')"
      }}
    >
      {/* Decorative Blueprint Grid Background in margins */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#12151a 1px, transparent 1px), linear-gradient(90deg, #12151a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Indicators */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2 bg-brand-sand/50 px-3 py-1 self-start rounded-full border border-brand-gold/20">
              <Sparkles className="w-4 h-4 text-brand-gold-dark" />
              <span className="text-xs uppercase font-semibold tracking-wider text-brand-gold-dark">
                Elante Mall Chandigarh Managed Workspace Network
              </span>
            </div>

            {/* Minimalist Phone Number Display */}
            <div className="text-xs text-brand-offblack/80 font-mono tracking-wider">
              Direct Voice Hotline: <a href="tel:+918800248496" className="font-semibold underline hover:text-brand-gold transition-colors">+91 8800248496</a>
            </div>

            <div className="space-y-4">
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-offblack leading-[1.1]">
                Workspace designed to <br />
                <span className="font-serif italic font-medium text-brand-gold-dark">inspire focus</span>, built to operate.
              </h1>
              <p className="text-sm sm:text-base text-brand-offblack/70 max-w-xl font-light leading-relaxed">
                Elevating the corporate standard of office architecture. A premium collection of managed private suites, flexible desks, and custom enterprise spaces at Nexus Elante Mall Chandigarh and India's leading northern corridor.
              </p>
            </div>

            {/* Region Interactive Badges with custom statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/40 p-3 border border-brand-sand rounded-xl backdrop-blur-sm">
              {[
                { name: "Chandigarh", spec: "Elante Mall Suites" },
                { name: "Mohali", spec: "Software powerhouse" },
                { name: "Panchkula", spec: "Executive serenity" },
                { name: "Ambala", spec: "Transit distribution" },
              ].map((loc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col p-2 bg-white/80 border border-brand-sand/50 shadow-xs hover:border-brand-gold transition duration-200"
                >
                  <span className="text-xs font-semibold text-brand-offblack">{loc.name}</span>
                  <span className="text-[9px] text-brand-offblack/50 font-mono tracking-tight mt-0.5">{loc.spec}</span>
                </div>
              ))}
            </div>

            {/* Pure Architectural CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="hero-start-briefing"
                onClick={onStartBriefing}
                className="flex items-center justify-center gap-3 px-8 py-3.5 bg-brand-charcoal text-brand-beige hover:bg-brand-gold hover:text-brand-offblack text-xs font-semibold uppercase tracking-wider rounded-none border border-brand-charcoal hover:border-brand-gold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Begin Space Briefing
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById("areas-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center px-8 py-3.5 bg-transparent border border-brand-charcoal/20 text-brand-charcoal hover:border-brand-charcoal text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer"
              >
                Explore Locations
              </button>
            </div>

            {/* Trust and Engineering stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-brand-sand/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-gold-dark" />
                <span className="text-xs font-medium text-brand-offblack/70">ISO 27001 & Secure Racks</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-gold-dark" />
                <span className="text-xs font-medium text-brand-offblack/70">Flexible Monthly Lock-ins</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (Moved to Upper Section) */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="absolute -inset-3 border border-brand-gold/10 pointer-events-none hidden sm:block"></div>
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 border-t border-r border-brand-gold/30 pointer-events-none hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 border-b border-l border-brand-gold/30 pointer-events-none hidden sm:block"></div>

            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
