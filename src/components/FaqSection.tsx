import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can we customize our private cabin or office layout branding?",
      a: "Absolutely. For all Private Studio Cabin and Enterprise plans, we accommodate custom physical adjustments. This includes bespoke frosted glass partitioning designs, primary brand colors on feature walls, custom sound-damped meeting desks, and custom security access locks coded exclusively to your organizational roster."
    },
    {
      q: "What is your lock-in policy and membership duration flexibility?",
      a: "We support a variety of terms calibrated to scale with your team. Hot Desking and Dedicated Desks operate on flexible month-to-month cycles. Private Cabin arrangements generally begin with standard quarterly or semi-annual lease agreements, while Custom Enterprise Floors are optimized for 12 to 36-month periods with optimized lock-in rental rates."
    },
    {
      q: "How long does it take to deploy a custom-built managed suite?",
      a: "Standard pre-fitted private cabins can be activated and online in as little as 24 business hours. Fully customized 'Built-to-Suit' enterprise wings or entire floors take between 30 to 60 calendar days of precision engineering, depending on specialized material and hardware installations."
    },
    {
      q: "How secure is your local IT and network layout?",
      a: "We operate bank-grade cybersecurity infrastructure. All centers feature secure server closets where clients can place dedicated hardware, fully partitioned SSID routers ensuring packet privacy, dual active-active gigabit fiber internet pipelines, and dedicated secure VPN tunnels upon demand."
    },
    {
      q: "What are the physical transit and parking arrangements?",
      a: "All four key hubs (Sector 17 Chandigarh, Phase 8B Mohali, MDC Panchkula, and GT Road Ambala) feature dedicated, multi-level secure basement parking, active round-the-clock physical security guards, CCTV corridors, and proximity badges for swift ingress and egress."
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-white border-t border-brand-sand/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-dark font-semibold">
            FAQS & PROTOCOLS
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-brand-offblack tracking-tight">
            Curated answers, <span className="font-serif italic font-medium">zero operational friction</span>.
          </h2>
          <p className="text-xs sm:text-sm text-brand-offblack/50 max-w-lg mx-auto font-light leading-relaxed">
            Everything you need to know about setting up your workspace under our architectural governance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border border-brand-sand transition-all duration-300 ${
                  isOpen ? "bg-brand-beige/35 border-brand-gold" : "bg-transparent"
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-gold-dark shrink-0" />
                    <span className="font-display font-semibold text-sm sm:text-base text-brand-offblack text-left">
                      {faq.q}
                    </span>
                  </div>
                  <div className="shrink-0 text-brand-offblack/40">
                    {isOpen ? <Minus className="w-4 h-4 text-brand-gold" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-brand-sand/50 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-brand-offblack/70 font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final query CTA */}
        <div className="text-center mt-12 bg-brand-beige/50 border border-brand-sand p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-offblack/75 font-light text-left">
            Have a specialized technology specification, server hosting query, or double-glazed custom fit-out layout request that isn't listed here?
          </p>
          <a
            href="#briefing-section"
            className="cta-link-button shrink-0 px-6 py-2.5 border text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            Ask Our Architect
          </a>
        </div>

      </div>
    </section>
  );
}
