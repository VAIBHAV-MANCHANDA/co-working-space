import React, { useState } from "react";
import { LOCATIONS } from "../data";
import { ChevronRight, ArrowRight, MapPin, Compass, Train, ShieldAlert } from "lucide-react";

interface AreaExplorerProps {
  onSelectLocation: (locationId: string) => void;
}

export default function AreaExplorer({ onSelectLocation }: AreaExplorerProps) {
  const [activeTab, setActiveTab] = useState(LOCATIONS[0].id);

  const selectedLoc = LOCATIONS.find((l) => l.id === activeTab) || LOCATIONS[0];

  return (
    <section id="areas-section" className="py-24 bg-brand-beige border-t border-brand-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-dark font-semibold">
              Regional Grid Exposure
            </span>
            <h2 className="font-display font-light text-3xl sm:text-4xl text-brand-offblack tracking-tight">
              Four districts, <span className="font-serif italic font-medium">unified excellence</span>.
            </h2>
            <p className="text-sm sm:text-base text-brand-offblack/60 max-w-lg font-light leading-relaxed">
              We operate exclusively across the high-growth Chandigarh Tricity region and the central Ambala transit corridor. Discover your ideal structural fit.
            </p>
          </div>
          
          {/* Quick Stats Label */}
          <div className="hidden lg:flex flex-col items-end border-r-2 border-brand-gold pr-6 font-mono text-xs text-brand-offblack/50">
            <span>REGIONAL COVERAGE: 100% TRICITY</span>
            <span>TOTAL SITES ACTIVE: 14 CENTERS</span>
          </div>
        </div>

        {/* Two-Column Grid Interactive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Tab Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc.id)}
                className={`relative px-6 py-6 text-left transition-all duration-300 border cursor-pointer ${
                  activeTab === loc.id
                    ? "bg-brand-charcoal text-white border-brand-charcoal shadow-lg"
                    : "bg-white text-brand-offblack/80 border-brand-sand hover:border-brand-gold/40 hover:bg-brand-sand/35"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-lg uppercase tracking-wide">
                      {loc.name}
                    </h3>
                    <p className={`text-xs mt-1 font-light ${activeTab === loc.id ? "text-brand-gold" : "text-brand-offblack/50"}`}>
                      {loc.subRegions.length} target micro-precincts
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeTab === loc.id ? "translate-x-1 text-brand-gold" : "text-brand-offblack/30"}`} />
                </div>
                {activeTab === loc.id && (
                  <span className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-brand-gold rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Panel: Content Showcase */}
          <div className="lg:col-span-8 bg-white border border-brand-sand p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Absolute Background Accent lines */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-brand-sand/10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Detailed copy specs */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-gold-dark mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest font-mono font-semibold">Core Presence</span>
                  </div>
                  <h4 className="font-display font-semibold text-2xl text-brand-offblack tracking-tight">
                    {selectedLoc.name}
                  </h4>
                </div>

                <p className="text-sm text-brand-offblack/70 font-light leading-relaxed">
                  {selectedLoc.description}
                </p>

                {/* Subregions listed as capsules */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-brand-offblack/40 block font-semibold">
                    Prime Centers & Sectors:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedLoc.subRegions.map((sub, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs bg-brand-beige border border-brand-sand/65 text-brand-offblack/80 font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-3 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-brand-offblack/40 block font-semibold">
                    District Structural Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {selectedLoc.highlights.map((high, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-brand-offblack/70">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* District Image & Connectivity */}
              <div className="space-y-6">
                <div className="overflow-hidden border border-brand-sand h-56 relative group">
                  <img
                    src={selectedLoc.image}
                    alt={selectedLoc.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent"></div>
                </div>

                {/* Transit Details */}
                <div className="bg-brand-beige/50 p-4 border border-brand-sand rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-brand-offblack/80">
                    <Train className="w-4 h-4 text-brand-gold-dark" />
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold">
                      Transit Connectivity
                    </span>
                  </div>
                  <p className="text-xs text-brand-offblack/60 font-light leading-relaxed">
                    {selectedLoc.connectivity}
                  </p>
                </div>
              </div>
            </div>

            {/* Selection bottom bar */}
            <div className="mt-8 pt-6 border-t border-brand-sand/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-brand-offblack/40 font-mono">
                MATCH CONFIG: PRESETS-LOC-{selectedLoc.id.toUpperCase()}-v1.0
              </span>
              <button
                onClick={() => onSelectLocation(selectedLoc.id)}
                className="flex items-center justify-center gap-2 self-start sm:self-center px-6 py-3 bg-brand-charcoal hover:bg-brand-gold text-brand-beige hover:text-brand-offblack text-xs font-semibold uppercase tracking-wider rounded-none cursor-pointer transition-colors duration-300"
              >
                Select {selectedLoc.name} Desk Grid
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
