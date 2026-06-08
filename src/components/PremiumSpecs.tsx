import React from "react";
import { Shield, Sparkles, Wind, EyeOff, Coffee, Zap } from "lucide-react";

export default function PremiumSpecs() {
  const specs = [
    {
      icon: EyeOff,
      title: "Sound Isolation (48 STC)",
      desc: "Our private cabins use double-glazed structural glass and high-STC seals to guarantee acoustic privacy for delicate board discussions."
    },
    {
      icon: Shield,
      title: "Herman Miller Support",
      desc: "Workstations are pre-fitted with original Herman Miller Aeron or Sayl task chairs to promote structural back support for long-haul execution."
    },
    {
      icon: Zap,
      title: "1Gbps Dual-Fiber Grid",
      desc: "Featuring active-active local gateway redundancy. If one fiber pipeline fluctuates, the secondary backup channel takes loads in sub-milliseconds."
    },
    {
      icon: Wind,
      title: "Biological Climatology",
      desc: "Continuous indoor air-scrubbing. Triple HEPA H14 filters cycle airflow every 8 minutes to eliminate dust and promote continuous mental freshness."
    },
    {
      icon: Coffee,
      title: "Bespoke Barista Stations",
      desc: "Enjoy uncompromised workspace routines. Freshly ground premium single-origin Arabica from local estates, brewed by on-site baristas."
    },
    {
      icon: Sparkles,
      title: "Daily Operations Concierge",
      desc: "Every site has dedicated local floor hosts. We handle your mailing, welcome key corporate guests, and manage technical logistics."
    }
  ];

  return (
    <section id="standards-section" className="py-24 bg-brand-beige border-t border-brand-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-dark font-semibold">
              ARCHITECTURAL INTEGRITY
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-brand-offblack tracking-tight">
              The anatomy of an <span className="font-serif italic font-medium">elite workspace</span>.
            </h2>
            <p className="text-sm sm:text-base text-brand-offblack/60 max-w-xl font-light leading-relaxed">
              We design physical spaces with detailed intent. No cheap plastic partitions, flickering fluorescent tubes, or slow networks. Every finish is chosen to maximize focus.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="font-mono text-[10px] text-brand-offblack/40 border-l-2 border-brand-gold pl-4 max-w-[240px]">
              ENGINEERED PROTOCOLS // ALL CENTERS MEETS COMPLIANCE INDEX CODE V-3.1
            </div>
          </div>
        </div>

        {/* Specs 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="bg-white border border-brand-sand/60 p-8 space-y-4 hover:border-brand-gold shadow-md transition-all duration-300 relative group"
              >
                {/* Visual marker */}
                <div className="w-10 h-10 bg-brand-beige border border-brand-sand/40 flex items-center justify-center text-brand-gold-dark group-hover:bg-brand-charcoal group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-base text-brand-offblack uppercase tracking-wide">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-brand-offblack/70 font-light leading-relaxed">
                    {spec.desc}
                  </p>
                </div>

                {/* Subtle design box numbering */}
                <div className="absolute right-4 bottom-4 font-mono text-[9px] text-brand-offblack/20 group-hover:text-brand-gold/60">
                  SPEC_0{i + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Block Callout */}
        <div className="mt-20 bg-brand-charcoal text-brand-beige p-8 sm:p-12 border-l-8 border-brand-gold flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle logo vector trace in background */}
          <div className="absolute right-0 bottom-0 top-0 opacity-[0.02] pointer-events-none translate-x-12 translate-y-12">
            <div className="w-96 h-96 border-4 border-white rounded-full"></div>
          </div>

          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-[10px] uppercase font-mono text-brand-gold tracking-widest font-semibold block">
              DESIGN PHILOSOPHY
            </span>
            <blockquote className="font-serif italic text-lg sm:text-xl text-white/90 leading-relaxed">
              "Office design is not about packing desks into high-density squares. It is an exercise in human psychology, structural acoustics, and light management to unlock unburdened thinking."
            </blockquote>
            <cite className="block text-xs font-mono text-brand-gold mt-2 not-italic">
              — Chief Architect, Co-Working Space
            </cite>
          </div>

          <div className="shrink-0 relative z-10">
            <div className="inline-block p-4 border border-brand-beige/10 font-mono text-center">
              <span className="text-brand-gold font-bold text-xl block">120m+</span>
              <span className="text-[10px] uppercase text-brand-beige/50">Acoustic Glazing Finished</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
