import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  const branches = [
    {
      city: "Chandigarh Capital",
      address: "Chamber 201, Tower C, City Plaza, Sector 17-D, Chandigarh",
      contact: "0172-4638701"
    },
    {
      city: "Mohali IT Sector",
      address: "Stellar Tech Heights, Phase II-A, Phase 8B Industrial Area, Mohali",
      contact: "0172-5082190"
    },
    {
      city: "Panchkula Foothills",
      address: "Signature Executive Enclave, Sector 14 Business District, Panchkula",
      contact: "0172-4298101"
    },
    {
      city: "Ambala Transit Route",
      address: "Boulevard Chambers, Adjacent to G.T Road Bypass, Ambala Cantt",
      contact: "0171-2244802"
    }
  ];

  return (
    <footer className="bg-brand-offblack text-brand-beige py-20 border-t border-brand-beige/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Split: Branding & Regional Addresses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Logo & Corporate profile */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="md" theme="dark" />
            <p className="text-xs text-brand-beige/55 font-light leading-relaxed max-w-sm">
              We design and operate premium managed workspaces, corporate private suites, and custom-scale executive offices. Grounded locally in the Chandigarh Tricity & Region corridor.
            </p>
            
            <div className="space-y-2 text-xs font-light text-brand-beige/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:coworkingspaceofficial@gmail.com" className="hover:text-brand-gold transition duration-200">
                  coworkingspaceofficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+918800248496" className="hover:text-brand-gold transition duration-200">
                  +91 8800248496
                </a>
              </div>
            </div>
          </div>

          {/* Core Regional Offices Coordinates */}
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block font-semibold mb-6">
              REGIONAL GRID COORDINATES
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {branches.map((b, i) => (
                <div key={i} className="space-y-1.5 border-l-2 border-brand-beige/10 pl-4 py-1">
                  <h4 className="font-display font-semibold text-xs tracking-wider uppercase text-brand-gold">
                    {b.city}
                  </h4>
                  <p className="text-xs text-brand-beige/65 font-light leading-relaxed">
                    {b.address}
                  </p>
                  <p className="text-[11px] font-mono text-brand-beige/40">
                    Host: {b.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Middle Line: External Links, Social, and Policy info */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-brand-beige/10 pt-10 text-xs font-light text-brand-beige/45 gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <span className="font-semibold text-brand-gold-light uppercase tracking-wider text-[10px] font-mono">
              DIRECT PORTALS:
            </span>
            <a href="https://iaspaces.co/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition duration-150 flex items-center gap-1">
              Design Reference website
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#areas-section" className="hover:text-brand-gold transition duration-150">
              Coverage Locations
            </a>
            <a href="#plans-section" className="hover:text-brand-gold transition duration-150">
              Workspace Formats
            </a>
            <a href="#briefing-section" className="hover:text-brand-gold transition duration-150">
              Briefing Workbook
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-brand-gold" />
            <span className="font-mono text-[10px]">Tricity Cluster Service Hub (v2.4.9)</span>
          </div>
        </div>

        {/* Bottom Line: Brand Protection & Legals */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-brand-beige/10 pt-6 text-[10px] font-mono text-brand-beige/35 gap-4">
          <span>
            © {new Date().getFullYear()} CO-WORKING SPACE NETWORK PLC. ALL SYSTEM CODES RESERVED.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold">PRIVACY POLICY</a>
            <a href="#" className="hover:text-brand-gold">TERMS OF USE</a>
            <a href="#" className="hover:text-brand-gold">OPERATIONAL RULES</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
