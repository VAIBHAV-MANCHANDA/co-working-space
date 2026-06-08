import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AreaExplorer from "./components/AreaExplorer";
import PlansViewer from "./components/PlansViewer";
import Questionnaire from "./components/Questionnaire";
import PremiumSpecs from "./components/PremiumSpecs";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import { QuestionnaireAnswers } from "./types";

export default function App() {
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({
    intent: "private-cabin", // default beautiful match state
    location: "mohali", // default beautiful location state
    teamSize: "2-10",
    timeline: "this-month",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    customRequests: ""
  });

  // Dual-navigation helper to update prefill configurations and slide focus down to questionnaire
  const handlePreconfigPrefill = (field: "intent" | "location", value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value
    }));

    // Perform smooth viewport scrolling targeting briefing anchor
    const briefingEl = document.getElementById("briefing-section");
    if (briefingEl) {
      const offset = 80; // offset navbar height header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = briefingEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleStartGeneralBriefing = () => {
    const briefingEl = document.getElementById("briefing-section");
    if (briefingEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = briefingEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-beige text-brand-offblack selection:bg-brand-gold selection:text-brand-offblack">
      {/* Floating Header */}
      <Navbar onStartBriefing={handleStartGeneralBriefing} />

      {/* Main Structural Layout Content Flow */}
      <main id="primary-layout" className="relative">
        
        {/* Intro Premium Hero Screen */}
        <Hero onStartBriefing={handleStartGeneralBriefing} />

        {/* Micro-Geographical Presence Space (Chandigarh Mohali Panchkula Ambala) */}
        <AreaExplorer onSelectLocation={(locId) => handlePreconfigPrefill("location", locId)} />

        {/* Core Workspace Interior Plans & Features */}
        <PlansViewer onSelectPlan={(planId) => handlePreconfigPrefill("intent", planId)} />

        {/* The Premium Hardware & Operations Specifications */}
        <PremiumSpecs />

        {/* High-Fidelity Active Briefing Questionnaire Section */}
        <Questionnaire
          initialAnswers={answers}
          onModifyAnswers={(updated) => setAnswers(updated)}
        />

        {/* Premium Direct Contact Form & Info Section */}
        <ContactSection />

        {/* Dynamic Accordion Frequently Queries Section */}
        <FaqSection />

      </main>

      {/* Corporate footer maps contact coordinates details */}
      <Footer />
    </div>
  );
}
