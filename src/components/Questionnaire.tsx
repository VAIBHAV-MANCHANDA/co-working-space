import React, { useState, useEffect } from "react";
import { QUESTIONNAIRE_STEPS, PLANS, LOCATIONS } from "../data";
import { QuestionnaireAnswers, QuestionStep } from "../types";
import {
  Compass,
  Bookmark,
  Lock,
  Building,
  Sparkles,
  Cpu,
  Trees,
  MapPin,
  User,
  Users,
  Briefcase,
  Zap,
  Calendar,
  Layers,
  Search,
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle,
  FileText,
  AlertCircle
} from "lucide-react";

// Icon Renderer Mapper for dynamic icons in selections
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Compass,
  Bookmark,
  Lock,
  Building,
  Sparkles,
  Cpu,
  Trees,
  MapPin,
  User,
  Users,
  Briefcase,
  Zap,
  Calendar,
  Layers,
  Search
};

interface QuestionnaireProps {
  initialAnswers: QuestionnaireAnswers;
  onModifyAnswers: (answers: QuestionnaireAnswers) => void;
}

export default function Questionnaire({ initialAnswers, onModifyAnswers }: QuestionnaireProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialAnswers);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tourBooked, setTourBooked] = useState(false);
  const [tourDate, setTourDate] = useState("");
  const [tourTime, setTourTime] = useState("");
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);

  // Keep state in sync with parent preset selections (if they click 'Configure layout' or 'Select location' from cards)
  useEffect(() => {
    setAnswers(initialAnswers);
    // If a preset was selected from outside, we can auto-advance if it makes sense, but resetting is safe.
  }, [initialAnswers]);

  const currentStep = QUESTIONNAIRE_STEPS[currentStepIdx];

  const handleOptionSelect = (field: string, value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);
    onModifyAnswers(updated);

    // Auto advanced for visual selection steps to provide a quick flow
    if (currentStepIdx < QUESTIONNAIRE_STEPS.length - 1) {
      setTimeout(() => {
        setCurrentStepIdx((prev) => prev + 1);
      }, 300);
    } else {
      // Advance to personal data fields check
      setCurrentStepIdx(QUESTIONNAIRE_STEPS.length);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...answers, [name]: value };
    setAnswers(updated);
    onModifyAnswers(updated);
  };

  const handleNext = () => {
    if (currentStepIdx < QUESTIONNAIRE_STEPS.length) {
      setCurrentStepIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx((prev) => prev - 1);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingForm(true);

    // Simulate verification
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmittingForm(false);
    }, 900);
  };

  const handleTourBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setTourBooked(true);
  };

  // Triggers a real TXT file download containing the Workspace configuration parameters!
  const downloadSpecDetails = () => {
    const matchedPlan = PLANS.find((p) => p.id === answers.intent) || PLANS[1];
    const matchedLoc = LOCATIONS.find((l) => l.id === answers.location) || LOCATIONS[0];

    const fileContent = `========================================================
CO-WORKING SPACE ◆ REGIONAL BRIEFING PROPOSAL
========================================================
Reference Code: CONFIG-${Math.random().toString(36).substring(2, 9).toUpperCase()}
Allotted Center: ${matchedLoc.name} Premium Hub
Preferred Sub-Sector: ${matchedLoc.subRegions[0] || "Main Block Cluster"}
Date Compiled: ${new Date().toLocaleDateString()}

CLIENT SPECIFICATIONS:
-------------------------
- Authorized Sponsor: ${answers.fullName}
- Corporate Operator: ${answers.companyName || "Independent"}
- Encrypted Contact  : ${answers.email} | ${answers.phone}

SPATIAL SELECTIONS:
-------------------------
- Blueprint Standard: ${matchedPlan.title}
- Seat Allocation   : ${answers.teamSize} Seats
- Operation Schedule: ${answers.timeline === "immediate" ? "Immediate Plug-In" : "Strategized Relocation - 30-90 Days"}
- Estimated Price   : ${matchedPlan.startingPrice}

SPECIAL TECHNICAL ATTACHMENTS:
-------------------------
- Custom Design Specs: ${answers.customRequests || "None Provided (Ergonomic standard default)"}
- Acoustics Guard: Triple-Glazed High-STC Partitions Enabled

Thank you for selecting Co-Working Space. A floor host has been alerted.
========================================================`;

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Co-Working_Space_Spec_${answers.companyName.replace(/\s+/g, "_")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Helper calculations for displaying custom suggestions based on selections
  const chosenPlan = PLANS.find((p) => p.id === answers.intent) || PLANS[1];
  const chosenLocation = LOCATIONS.find((l) => l.id === answers.location) || LOCATIONS[0];

  return (
    <section id="briefing-section" className="py-24 bg-brand-charcoal text-brand-beige relative overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-beige/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-beige/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold-light font-semibold">
            WORKSPACE ANALYSIS COMPILER
          </span>
          <h2 className="font-display font-light text-3xl sm:text-4xl tracking-tight">
            Consult the <span className="font-serif italic text-brand-gold">briefing workbook</span>.
          </h2>
          <p className="text-sm tracking-wide text-brand-beige/65 font-light leading-relaxed">
            Specify your structural requirements. Our briefing compiler processes location connectivity, operational team scaling, and timeline tolerances to draft your matched corporate footprint.
          </p>
        </div>

        {/* Master Workspace Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: ACTIVE WORKBOOK INTERACTIVE */}
          <div className="lg:col-span-7 bg-brand-offblack border border-brand-beige/10 p-6 sm:p-10 shadow-2xl relative min-h-[520px] flex flex-col justify-between">
            
            {/* Step Corner Metrics */}
            <div className="absolute top-6 right-6 font-mono text-[10px] text-brand-beige/30">
              {isSubmitted ? "COMPLETED" : `WORKBOOK PAGE: ${currentStepIdx + 1} / ${QUESTIONNAIRE_STEPS.length + 1}`}
            </div>

            {/* If NOT Submitted Yet */}
            {!isSubmitted ? (
              <div className="space-y-8 my-auto">
                {/* Standard choice selection steps */}
                {currentStepIdx < QUESTIONNAIRE_STEPS.length ? (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-brand-gold tracking-widest uppercase font-semibold">
                        STEP 0{currentStep.id} OF 0{QUESTIONNAIRE_STEPS.length}
                      </span>
                      <h3 className="font-display font-light text-2xl sm:text-3xl text-white mt-1.5 leading-tight">
                        {currentStep.question}
                      </h3>
                      <p className="text-xs text-brand-beige/60 font-light mt-1">
                        {currentStep.subtitle}
                      </p>
                    </div>

                    {/* Choice Boxes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentStep.options?.map((opt) => {
                        const IconComponent = opt.icon ? IconMap[opt.icon] : Compass;
                        const isSelected = (answers as any)[currentStep.field] === opt.value;

                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleOptionSelect(currentStep.field, opt.value)}
                            className={`flex flex-col text-left p-5 border cursor-pointer transition-all duration-300 relative ${
                              isSelected
                                ? "bg-white/5 border-brand-gold text-brand-gold-light"
                                : "bg-[#181d24]/50 border-brand-beige/10 text-brand-beige/80 hover:border-brand-gold/40 hover:bg-[#181d24]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 mb-2">
                              {IconComponent && (
                                <IconComponent className={`w-4 h-4 ${isSelected ? "text-brand-gold" : "text-brand-gold/60"}`} />
                              )}
                              <span className="text-xs font-semibold tracking-wide uppercase">
                                {opt.label}
                              </span>
                            </div>
                            <span className="text-[11px] text-brand-beige/50 leading-relaxed font-light">
                              {opt.description}
                            </span>

                            {isSelected && (
                              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-brand-gold rounded-full"></div>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Step 5: Personal Details Authorization Form */
                  <form onSubmit={handleFinalSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-brand-gold tracking-widest uppercase font-semibold">
                        FINAL STEP
                      </span>
                      <h3 className="font-display font-light text-2xl sm:text-3xl text-white mt-1.5">
                        Authorize Workspace Creation
                      </h3>
                      <p className="text-xs text-brand-beige/65 font-light mt-1">
                        Confirm corporate sponsors parameters to write operational routing directories.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-brand-beige/55 uppercase font-semibold">
                          Sponsor Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={answers.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-[#181d24] border border-brand-beige/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-gold font-light"
                          placeholder="e.g. Vikramaditya Dev"
                        />
                      </div>

                      {/* Brand name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-brand-beige/55 uppercase font-semibold">
                          Enterprise / Organization *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={answers.companyName}
                          onChange={handleInputChange}
                          className="w-full bg-[#181d24] border border-brand-beige/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-gold font-light"
                          placeholder="e.g. Stellar Labs PLC"
                        />
                      </div>

                      {/* Email info */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-brand-beige/55 uppercase font-semibold">
                          Secure Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={answers.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#181d24] border border-brand-beige/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-gold font-light"
                          placeholder="e.g. dev@stellarlabs.com"
                        />
                      </div>

                      {/* Phone coordinates */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono text-brand-beige/55 uppercase font-semibold">
                          Authorized Contact Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={answers.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#181d24] border border-brand-beige/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-gold font-light"
                          placeholder="e.g. +91 94120 XXXXX"
                        />
                      </div>
                    </div>

                    {/* Custom tech specifications */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-brand-beige/55 uppercase font-semibold">
                        Special Architectural fitting requests (Optional)
                      </label>
                      <textarea
                        name="customRequests"
                        rows={2}
                        value={answers.customRequests}
                        onChange={handleInputChange}
                        className="w-full bg-[#181d24] border border-brand-beige/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-gold font-light resize-none"
                        placeholder="e.g. Soundproof partitions, secondary dedicated fiber rack, private reception lounge"
                      />
                    </div>

                    {/* Compliance indicator */}
                    <div className="flex items-start gap-2.5 bg-brand-charcoal/50 p-3 border border-brand-beige/5">
                      <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <p className="text-[10px] text-brand-beige/50 leading-relaxed font-light">
                        By compiling layout files, you authorize Co-Working Space's local regional hosts to check partition availability for the designated size tier. No spam is generated.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmittingForm}
                      className="w-full py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-offblack text-xs font-semibold uppercase tracking-wider rounded-none cursor-pointer transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmittingForm ? "Compiling Architectural Formats..." : "Compile Layout Config File"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

                {/* Left/Right Navigation controls for non-choice workflows */}
                <div className="flex items-center justify-between border-t border-brand-beige/10 pt-6 mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={currentStepIdx === 0}
                    className={`flex items-center gap-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                      currentStepIdx === 0 ? "text-brand-beige/25" : "text-brand-beige/70 hover:text-white"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={
                      currentStepIdx === QUESTIONNAIRE_STEPS.length ||
                      !(answers as any)[QUESTIONNAIRE_STEPS[currentStepIdx]?.field]
                    }
                    className={`flex items-center gap-1 text-xs font-mono uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                      currentStepIdx === QUESTIONNAIRE_STEPS.length ||
                      !(answers as any)[QUESTIONNAIRE_STEPS[currentStepIdx]?.field]
                        ? "text-brand-beige/25"
                        : "text-brand-gold hover:text-brand-gold-light"
                    }`}
                  >
                    Skip Choice
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* IF ALREADY SUBMITTED: SHOW THE DYNAMIC PROPOSAL TICKET AND TOUR BOOKING */
              <div className="space-y-6 my-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-brand-gold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-xs uppercase font-mono tracking-widest font-semibold">Analysis Complete</span>
                  </div>
                  <h3 className="font-display font-light text-2xl sm:text-3xl text-white">
                    Matched Workspace Proposal Compiled
                  </h3>
                  <p className="text-xs text-brand-beige/65 font-light">
                    Our routing engine matched your fleet parameters with physical inventory availability index.
                  </p>
                </div>

                {/* Proposed Suite Card Details */}
                <div className="bg-[#181d24] border-l-4 border-brand-gold p-6 space-y-4 shadow-inner relative">
                  <div className="absolute top-4 right-4 font-mono text-[9px] text-[#2a8a5b] bg-[#2a8a5b]/10 px-2 py-0.5 font-bold uppercase">
                    ◆ Direct Inventory Match 100%
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-gold tracking-wider uppercase font-semibold">Suggested Hub Placement:</span>
                    <h4 className="font-display font-semibold text-lg text-white">
                      Co-Working Center, {chosenLocation.name}
                    </h4>
                    <p className="text-[11px] text-brand-beige/60 font-light">
                      Matched Node Zone: {chosenLocation.subRegions[0]} Corridor
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-brand-beige/10 pt-4 text-xs font-light">
                    <div>
                      <span className="text-brand-beige/45 block text-[9px] font-mono uppercase">Spatial Structure:</span>
                      <span className="text-white font-medium">{chosenPlan.title}</span>
                    </div>
                    <div>
                      <span className="text-brand-beige/45 block text-[9px] font-mono uppercase">Config Price Tier:</span>
                      <span className="text-brand-gold font-semibold">{chosenPlan.startingPrice}</span>
                    </div>
                    <div>
                      <span className="text-brand-beige/45 block text-[9px] font-mono uppercase">Scale Allotment:</span>
                      <span className="text-white">{answers.teamSize} minds workspace</span>
                    </div>
                    <div>
                      <span className="text-brand-beige/45 block text-[9px] font-mono uppercase">Acoustics Rating:</span>
                      <span className="text-[#2a8a5b]">48 STC Premium Damped</span>
                    </div>
                  </div>
                </div>

                {/* Scheduling / Tour Section inside ticket */}
                {!tourBooked ? (
                  <form onSubmit={handleTourBooking} className="border-t border-brand-beige/10 pt-5 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono text-brand-gold tracking-wide uppercase font-semibold block">
                        Schedule a local Physical walkthrough tour:
                      </span>
                      <p className="text-[10px] text-brand-beige/50 font-light">
                        Confirm a walkthrough of the matched spaces with your regional portfolio host.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-brand-beige/45 uppercase">Select Tour Date</label>
                        <input
                          type="date"
                          required
                          value={tourDate}
                          onChange={(e) => setTourDate(e.target.value)}
                          className="w-full bg-brand-charcoal border border-brand-beige/15 px-3 py-2 text-xs text-white uppercase font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-brand-beige/45 uppercase">Preferred Hour</label>
                        <input
                          type="time"
                          required
                          value={tourTime}
                          onChange={(e) => setTourTime(e.target.value)}
                          className="w-full bg-brand-charcoal border border-brand-beige/15 px-3 py-2 text-xs text-white font-mono"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-beige text-brand-offblack hover:bg-brand-gold text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow"
                    >
                      Schedule Physical Tour With Floor Host
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-[#2a8a5b]/10 border border-[#2a8a5b]/20 text-[#2a8a5b] text-center space-y-1.5">
                    <h5 className="font-semibold text-xs tracking-wider uppercase">◆ Walkthrough Tour Registered</h5>
                    <p className="text-[10px] text-brand-beige/70 font-light leading-relaxed">
                      Your regional tour guide has blocked <span className="font-semibold text-white">{tourDate}</span> at <span className="font-semibold text-white">{tourTime}</span> for your physical floor inspection of {chosenLocation.name}. Complete setup coordinates sent.
                    </p>
                  </div>
                )}

                {/* Download PDF specification button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-brand-beige/10">
                  <button
                    onClick={downloadSpecDetails}
                    className="flex-1 py-3 bg-brand-gold text-brand-offblack hover:bg-brand-gold-light text-xs font-semibold uppercase tracking-wider cursor-pointer text-center flex items-center justify-center gap-2 font-mono transition-all duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    Download Layout Spex.txt
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setTourBooked(false);
                      setCurrentStepIdx(0);
                    }}
                    className="py-3 px-6 bg-transparent border border-brand-beige/25 hover:border-brand-beige text-xs text-brand-beige uppercase tracking-wider cursor-pointer font-mono font-medium transition-all duration-200"
                  >
                    Reset Design Analyzer
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: ACTIVE SPEC TELEMETRY PANEL */}
          <div className="lg:col-span-5 bg-brand-offblack/40 border border-brand-beige/10 p-6 sm:p-8 font-mono text-xs text-brand-beige/60 space-y-6">
            
            <div className="flex items-center justify-between border-b border-brand-beige/10 pb-4">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-gold">
                TELEMETRY DIAGRAM
              </span>
              <span className="w-2.5 h-2.5 bg-brand-gold animate-pulse rounded-full"></span>
            </div>

            {/* Wireframe Mock Architectural Sketch Container */}
            <div className="border border-brand-beige/5 bg-[#181d24]/60 p-4 h-48 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#c3a355 1px, transparent 1px), linear-gradient(90deg, #c3a355 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              {/* Dynamic Abstract Layout Drawing based on selections */}
              {answers.intent === "flex-desk" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-[10px] text-brand-gold font-bold absolute top-2 left-2">LAYOUT // FLEX-NOMAD</div>
                  <div className="border-2 border-brand-gold/30 w-36 h-28 rounded-md flex items-center justify-center flex-wrap gap-2 p-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className={`w-6 h-6 border ${i === 2 ? "border-brand-gold bg-brand-gold/25" : "border-brand-beige/20"} flex items-center justify-center text-[8px]`}>{i+1}</div>
                    ))}
                  </div>
                </div>
              )}

              {answers.intent === "dedicated-desk" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-[10px] text-brand-gold font-bold absolute top-2 left-2">LAYOUT // FIXED-DEDICATED</div>
                  <div className="border-2 border-brand-gold/30 w-40 h-24 rounded-none flex items-center justify-between p-3">
                    <div className="border border-brand-gold bg-brand-gold/20 w-12 h-14 flex flex-col justify-center items-center text-[7px] font-bold">DESK A<span className="text-white text-[6px]">LOCKED</span></div>
                    <div className="border border-brand-beige/20 w-12 h-14 flex items-center justify-center text-[7px]">DESK B</div>
                    <div className="border border-brand-beige/20 w-12 h-14 flex items-center justify-center text-[7px]" >DESK C</div>
                  </div>
                </div>
              )}

              {answers.intent === "private-cabin" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-[10px] text-brand-gold font-bold absolute top-2 left-2">LAYOUT // PRIVATE_STUDIO</div>
                  <div className="border-2 border-brand-gold/30 w-44 h-32 p-2 flex flex-col justify-between">
                    <div className="h-6 border-b border-brand-beige/10 text-[8px] flex justify-between items-center px-1"><span>DOUBLE GLAZED CABIN</span><span className="text-[#2a8a5b]">STC 48 OK</span></div>
                    <div className="flex gap-2 text-[8px]">
                      <div className="border border-brand-gold/60 bg-brand-gold/10 flex-1 h-14 flex items-center justify-center">WORKSTA.</div>
                      <div className="border border-brand-beige/15 flex-1 h-14 flex items-center justify-center">CONFER.</div>
                    </div>
                  </div>
                </div>
              )}

              {answers.intent === "enterprise-floor" && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-[10px] text-brand-gold font-bold absolute top-2 left-2">LAYOUT // CORP_BUILT_TO_SUIT</div>
                  <div className="border-2 border-brand-gold/30 w-44 h-32 p-2 flex flex-col gap-1.5 justify-around">
                    <div className="border border-brand-gold/50 bg-[#c3a355]/10 h-7 text-[8px] flex items-center justify-center font-bold">MANAGED FLOOR DEDICATED (50-200p)</div>
                    <div className="flex gap-1">
                      <div className="border border-brand-beige/10 h-12 flex-1 text-[7px] flex items-center justify-center">SERVER VAULT</div>
                      <div className="border border-brand-beige/10 h-12 flex-1 text-[7px] flex items-center justify-center">LOUNGE</div>
                      <div className="border border-brand-beige/10 h-12 flex-1 text-[7px] flex items-center justify-center">BOARDROOM</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Active specifications list console */}
            <div className="space-y-4">
              <span className="text-[10px] text-brand-beige/40 font-bold block tracking-wider">
                COMPILED BUFFER REGISTRIES:
              </span>
              
              <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">FITTING_ARCHETYPE:</span>
                  <span className="text-white font-semibold">
                    {answers.intent ? `[${answers.intent.toUpperCase()}_PLAN]` : "[UNSPECIFIED]"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">REGIONAL_GEOGRAPHY:</span>
                  <span className="text-brand-gold font-semibold">
                    {answers.location ? `[${answers.location.toUpperCase()}_GRID_OK]` : "[UNSPECIFIED]"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">SCALING_CAPSULE:</span>
                  <span className="text-white">
                    {answers.teamSize ? `[${answers.teamSize.toUpperCase()}_SEATS]` : "[UNSPECIFIED]"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">ONBOARDING_LAUNCH:</span>
                  <span className="text-white">
                    {answers.timeline ? `[${answers.timeline.toUpperCase()}_WINDOW]` : "[UNSPECIFIED]"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">SPONSOR_LEGAL:</span>
                  <span className="text-white truncate max-w-[180px]">
                    {answers.fullName ? answers.fullName : "[UNAUTHORIZED]"}
                  </span>
                </div>

                <div className="flex justify-between border-b border-brand-beige/5 pb-1">
                  <span className="text-brand-beige/40">OPERATOR_BRAND:</span>
                  <span className="text-white truncate max-w-[180px]">
                    {answers.companyName ? answers.companyName : "[UNSPECIFIED]"}
                  </span>
                </div>
              </div>

              {/* Console log outputs dynamically */}
              <div className="p-4 bg-brand-offblack/80 border border-brand-beige/5 text-[10px] text-brand-gold/75 space-y-1.5 h-36 overflow-y-auto rounded-md shadow-inner">
                <div>&gt; Loading regional maps ... DONE</div>
                <div>&gt; Checking active grid ports ... OK</div>
                {answers.intent && <div>&gt; Blueprint registered: {answers.intent}</div>}
                {answers.location && <div>&gt; Routing coordinates established for {answers.location} matching nodes...</div>}
                {answers.teamSize && <div>&gt; Scaling index adjusted: Seat ratio allocated.</div>}
                {answers.fullName && <div>&gt; Encryption signature verified: {answers.fullName} [Sponsor]</div>}
                {isSubmitted && <div className="text-[#2a8a5b]">&gt; Matching database successfully routed. proposal ready.</div>}
                {tourBooked && <div className="text-[#2a8a5b]">&gt; Tour confirmed for physical center exploration. Host notified.</div>}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
