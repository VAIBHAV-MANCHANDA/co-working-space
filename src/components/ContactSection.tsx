import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="py-20 bg-brand-beige text-brand-offblack relative overflow-hidden border-t border-brand-sand/40"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#12151a 1px, transparent 1px), linear-gradient(90deg, #12151a 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Contact Coordinates */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold font-bold">
                CONNECT WITH OUR HOSTS
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl tracking-tight leading-tight">
                Construct your <span className="font-serif italic text-brand-gold-dark font-medium">next corporate base</span>.
              </h2>
              <p className="text-sm text-brand-offblack/70 font-light leading-relaxed max-w-md">
                Have specific spatial requirements, timing parameters, or corporate network scaling questions? Direct dial our team or send us a brief message to secure priority partition reviews.
              </p>
            </div>

            {/* Normal minimalist phone display with no design/cards/backgrounds */}
            <div className="space-y-4 pt-2 border-t border-brand-sand/60">
              <div>
                <span className="text-[10px] font-mono text-brand-offblack/40 uppercase block tracking-wider font-semibold">
                  Direct Voice Hotline (No Design Required)
                </span>
                <a
                  href="tel:+918800248496"
                  className="text-2xl font-light text-brand-offblack hover:text-brand-gold transition duration-200"
                >
                  +91 8800248496
                </a>
                <p className="text-xs text-brand-offblack/50 font-light mt-1">
                  Mon - Sat, 9:00 AM - 7:00 PM IST
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-brand-offblack/40 uppercase block tracking-wider font-semibold">
                  Electronic Dispatch
                </span>
                <a
                  href="mailto:coworkingspaceofficial@gmail.com"
                  className="text-sm font-medium text-brand-offblack underline hover:text-brand-gold transition-all duration-200"
                >
                  coworkingspaceofficial@gmail.com
                </a>
              </div>
            </div>

            {/* Micro-Presence grid info */}
            <div className="border-t border-brand-sand pt-6 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-offblack/70">
                  REGIONAL ROUTING NODES
                </span>
              </div>
              <p className="text-xs text-brand-offblack/60 font-light leading-relaxed max-w-sm">
                Active offices in Chandigarh (Nexus Elante Mall Offices & Sector 17), Mohali, Panchkula, and Ambala. Drop in for a private walkthrough.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Elante Mall Chandigarh Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-3 border border-brand-gold/10 pointer-events-none hidden sm:block"></div>
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 border-t border-r border-brand-gold/30 pointer-events-none hidden sm:block"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 border-b border-l border-brand-gold/30 pointer-events-none hidden sm:block"></div>

            <div className="relative bg-brand-charcoal overflow-hidden shadow-2xl">
              <img
                src="/elante_coworking_interior.png"
                alt="Elante Mall Chandigarh Premium Coworking Office"
                className="w-full h-[380px] object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-offblack/95 text-brand-beige p-4 border-l-3 border-brand-gold flex flex-col space-y-1 backdrop-blur-md">
                <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold">
                  Nexus Elante Campus
                </span>
                <span className="font-display font-light text-sm text-white">
                  Executive Suite & Collaborative Lounges
                </span>
                <span className="text-[10px] text-brand-beige/50 font-light">
                  Industrial Area Phase I, Chandigarh
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
