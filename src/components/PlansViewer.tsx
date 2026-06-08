import React from "react";
import { PLANS } from "../data";
import { Check, ArrowUpRight, Compass, Shield, Zap } from "lucide-react";

interface PlansViewerProps {
  onSelectPlan: (planId: string) => void;
}

export default function PlansViewer({ onSelectPlan }: PlansViewerProps) {
  return (
    <section id="plans-section" className="py-24 bg-white border-t border-brand-sand/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-dark font-semibold">
            WORKSPACE ARCHETYPES
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-brand-offblack tracking-tight">
            Curated plans for <span className="font-serif italic font-medium">uncompromised execution</span>.
          </h2>
          <p className="text-sm sm:text-base text-brand-offblack/60 font-light leading-relaxed">
            Choose a structural layout scale built to eliminate distraction. All plans offer premium fiber backbone networking, sound damping partitions, and professional facility concierge.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="group border border-brand-sand bg-brand-beige/25 hover:bg-white flex flex-col justify-between hover:border-brand-gold hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
            >
              <div>
                {/* Architectural image header */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent"></div>
                  
                  {/* Floating Price Badge */}
                  <div className="absolute bottom-3 left-3 bg-brand-offblack/95 text-brand-beige px-3 py-1 font-mono text-xs border-l-2 border-brand-gold shadow-sm">
                    {plan.startingPrice}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-lg text-brand-offblack group-hover:text-brand-gold-dark transition-colors duration-200">
                      {plan.title}
                    </h3>
                    <p className="text-[10px] font-mono text-brand-offblack/40 uppercase tracking-tight">
                      Capacity: {plan.capacity}
                    </p>
                  </div>

                  <p className="text-xs text-brand-offblack/65 font-light leading-relaxed line-clamp-3">
                    {plan.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-brand-sand/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-offblack/40 block font-semibold">
                      PLAN SPECIFICATIONS:
                    </span>
                    <ul className="space-y-1.5">
                      {plan.amenities.slice(0, 4).map((amenity, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-brand-offblack/70 font-light">
                          <Check className="w-3.5 h-3.5 text-brand-gold mt-0.5 shrink-0" />
                          <span className="leading-tight">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Activation CTA */}
              <div className="p-6 pt-2">
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className="cta-button w-full py-3 border text-xs font-semibold uppercase tracking-wider rounded-none cursor-pointer transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  Configure This Layout
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Design line code marker */}
              <div className="absolute right-0 top-1/2 w-4 h-[1px] bg-brand-sand group-hover:bg-brand-gold/40"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
