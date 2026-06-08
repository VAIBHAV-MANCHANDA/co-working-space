import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { PLANS, LOCATIONS } from "../data";

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ className = "", onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "mohali",
    plan: "private-cabin",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "mohali",
      plan: "private-cabin",
      message: "",
    });
    setIsSubmitted(false);
  };

  const selectedLoc = LOCATIONS.find((l) => l.id === formData.location) || LOCATIONS[0];
  const selectedPlan = PLANS.find((p) => p.id === formData.plan) || PLANS[0];

  return (
    <div className={`bg-white border border-brand-sand shadow-lg p-6 sm:p-8 relative ${className}`}>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 border-b border-brand-sand/60 pb-3">
            <h3 className="font-display font-light text-xl text-brand-offblack">
              Inquire Spatial Details
            </h3>
            <p className="text-[11px] text-brand-offblack/55 font-light">
              Processed immediately by local floor coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-brand-beige/50 border border-brand-sand px-3 py-2 text-xs text-brand-offblack focus:outline-none focus:border-brand-gold focus:bg-white font-light transition-all"
                placeholder="Rahul Sharma"
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
                Business Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-brand-beige/50 border border-brand-sand px-3 py-2 text-xs text-brand-offblack focus:outline-none focus:border-brand-gold focus:bg-white font-light transition-all"
                placeholder="rahul@company.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-brand-beige/50 border border-brand-sand px-3 py-2 text-xs text-brand-offblack focus:outline-none focus:border-brand-gold focus:bg-white font-light transition-all"
                placeholder="+91 88002 48496"
              />
            </div>

            {/* Location Selection */}
            <div className="space-y-1">
              <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
                Preferred Location Hub
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full bg-brand-beige/50 border border-brand-sand px-3 py-2 text-xs text-brand-offblack focus:outline-none focus:border-brand-gold focus:bg-white font-light transition-all"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name} Hub
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Plan Selection */}
          <div className="space-y-1">
            <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
              Desired Spatial format
            </label>
            <div className="grid grid-cols-2 gap-2">
              {PLANS.map((plan) => (
                <label
                  key={plan.id}
                  className={`flex items-center gap-2 p-2 border cursor-pointer transition-all duration-200 ${
                    formData.plan === plan.id
                      ? "bg-brand-gold-light/40 border-brand-gold text-brand-offblack"
                      : "border-brand-sand/65 hover:border-brand-gold/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    checked={formData.plan === plan.id}
                    onChange={handleInputChange}
                    className="accent-brand-gold scale-75"
                  />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-semibold">{plan.title}</span>
                    <span className="text-[8px] text-brand-offblack/50">{plan.startingPrice}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="text-[9px] font-mono text-brand-offblack/60 uppercase font-semibold">
              Inquiry Details & Message
            </label>
            <textarea
              name="message"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-brand-beige/50 border border-brand-sand px-3 py-2 text-xs text-brand-offblack focus:outline-none focus:border-brand-gold focus:bg-white font-light resize-none transition-all"
              placeholder="e.g. Space requirement, team size, etc."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-brand-charcoal text-brand-beige hover:bg-brand-gold hover:text-brand-offblack text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? "Routing Request..." : "Submit Inquiry"}
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      ) : (
        /* Success State */
        <div className="py-6 px-2 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 bg-brand-gold-light rounded-full flex items-center justify-center mx-auto text-brand-gold-dark border border-brand-gold/20">
            <CheckCircle className="w-6 h-6" />
          </div>
          
          <div className="space-y-1">
            <h3 className="font-display font-light text-2xl text-brand-offblack">
              Inquiry Received
            </h3>
            <p className="text-[11px] text-brand-offblack/60 max-w-sm mx-auto font-light leading-relaxed">
              Thank you, <span className="font-semibold text-brand-offblack">{formData.name}</span>. Your request has been routed to <span className="font-semibold">{selectedLoc.name}</span> team.
            </p>
          </div>

          <div className="bg-brand-beige border border-brand-sand p-4 max-w-md mx-auto text-left space-y-2">
            <div className="text-[9px] font-mono text-brand-gold uppercase tracking-wider border-b border-brand-sand pb-1 font-semibold">
              INQUIRY PARAMS:
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-light">
              <div>
                <span className="text-brand-offblack/40 block text-[8px] font-mono uppercase">TARGET HUB:</span>
                <span className="font-medium text-brand-offblack">{selectedLoc.name}</span>
              </div>
              <div>
                <span className="text-brand-offblack/40 block text-[8px] font-mono uppercase">FORMAT:</span>
                <span className="font-medium text-brand-offblack">{selectedPlan.title}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-transparent border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-beige text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            Submit Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
}
