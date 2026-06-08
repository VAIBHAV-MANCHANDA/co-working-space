import { LocationData, WorkspacePlan, QuestionStep } from "./types";

export const LOCATIONS: LocationData[] = [
  {
    id: "chandigarh",
    name: "Chandigarh",
    subRegions: ["Nexus Elante Offices", "Sector 17 Business Plaza", "Industrial Area Phase I"],
    description: "The visionary master-planned capital corridor. Featuring premium managed workspaces at Nexus Elante Mall Office Suites and Sector 17, tailored for prestigious corporate headquarters and modern teams.",
    image: "/elante_mall_exterior.png",
    highlights: ["Nexus Elante Mall premium proximity", "Prestige city center access", "Excellent city-wide civic amenities"],
    connectivity: "Direct interface with G.T. Road arterial routes, premium retail hubs, and the international airport pathway."
  },
  {
    id: "mohali",
    name: "Mohali",
    subRegions: ["Phase 8A/8B IT Sector", "Quark City Zone (Sector 74)", "Sector 82 Corporate Cluster"],
    description: "The primary technological capital and software powerhouse of the region. Ideal for product developers, rapid-scale tech startups, and global delivery departments seeking continuous operations.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Tricity's epicentre for technology startups", "Dual backup high-load power grids", "Surfaces optimized for heavy IT staging"],
    connectivity: "Direct interface with the International Airport Road, bypassing downtown transit bottlenecks."
  },
  {
    id: "panchkula",
    name: "Panchkula",
    subRegions: ["Sector 8 Commercial Precinct", "Sector 14 Corporate Hub", "IT Park Panchkula"],
    description: "Lined with scenic foothills views and calming avenues, Panchkula provides a highly focused, low-density professional environment. Outstanding selection for executive strategy zones.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Serene foothills backdrop", "Low-density executive layout", "High-parking availability ratio"],
    connectivity: "Bypass networks straight to Shimla Expressway, bypassing city-center peak hour clusters."
  },
  {
    id: "ambala",
    name: "Ambala",
    subRegions: ["GT Road Transport Nexus", "Jagadhri Road Commerce Cluster"],
    description: "The booming tri-state transit gate connecting Delhi, Punjab, and Himachal Pradesh. Unmatched geographical leverage for retail hubs, trading logistics offices, and decentralized networks.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    highlights: ["Unrivaled tri-state distribution gateway", "Excellent value-to-scale floorplans", "Ample logistics layout space"],
    connectivity: "Direct premium frontage along NH44 (G.T. Road) with vast regional arterial connectivity."
  }
];

export const PLANS: WorkspacePlan[] = [
  {
    id: "flex-desk",
    title: "Hot Desking & Flex",
    tagline: "Agile, unassigned seating for fluid professionals.",
    description: "Walk into any of our award-winning architectural lobbies, claim any open ergonomic hot desk, plug in, and get to work with premium fiber connectivity and curated artisan coffee access in the lounge.",
    bestFor: "Freelancers, travelling consultants, and flexible teams of up to 3.",
    capacity: "1 Seat (Flexible)",
    startingPrice: "₹5,500 / mo",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      "Access to premium members' lobbies",
      "Ergonomic Steelcase chairs & natural lighting",
      "Unlimited artisan drip coffee & organic teas",
      "Secure 1Gbps dynamic IT infrastructure",
      "Flexible monhtly membership terms"
    ]
  },
  {
    id: "dedicated-desk",
    title: "Dedicated Desk",
    tagline: "Your own permanent structural desk setup.",
    description: "A permanent premium workspace of your own in a collaborative, highly secure floor. Includes dedicated lockable under-desk cabinets, professional ergonomic monitors support, and personalized mail handling.",
    bestFor: "Solo builders, analysts, and growing teams of 1 - 5.",
    capacity: "1 Dedicated Seat",
    startingPrice: "₹8,500 / mo",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      "Assigned prime-workstation with your nameplate",
      "Individual secure drawer storage units",
      "₹1,500 recurring monthly meeting room credits",
      "Premium business mailing address listing",
      "Acoustically micro-zoned quiet areas"
    ]
  },
  {
    id: "private-cabin",
    title: "Private Studio Cabin",
    tagline: "Glass-fronted, private workspace with high acoustics.",
    description: "Fully furnished structural cabins enclosed with double-glazed acoustic glass to block distraction, whilst maintaining visual connection to natural daylight. Customizable configuration options to fit your brand identity.",
    bestFor: "Firms, startups, agency departments containing 3 - 25 members.",
    capacity: "2 to 25 Seats",
    startingPrice: "₹12,000 / seat",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      "Double-glazed, high-STC sound insulated partitions",
      "Custom brand signage on your door",
      "Dedicated secure LAN sockets & private private SSID",
      "Free whiteboards, storage cabinets, and desk organizers",
      "24/7 access pass for your entire crew"
    ]
  },
  {
    id: "enterprise-floor",
    title: "Enterprise Custom Build",
    tagline: "Your bespoke corporate headquarters, designed and managed.",
    description: "Collaborate directly with our master architectural planners to build an entire layout from scratch. We design, draft building plans, manage fit-out installation, handle technology backend, and manage daily operations.",
    bestFor: "Established corporations, global delivery labs of 30 - 300+ employees.",
    capacity: "30 to 500+ Seats",
    startingPrice: "Custom Quote",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      "Bespoke layout configuration (Lounges, Directors' Cabin, R&D Labs)",
      "Dedicated secure biometric access control and server vault",
      "Dedicated floor host and reception management staff",
      "Fully customized architectural materials, palettes and branding",
      "Long-term lease optimization with structural lock-in values"
    ]
  }
];

export const QUESTIONNAIRE_STEPS: QuestionStep[] = [
  {
    id: 1,
    question: "Select your architectural floor plan arrangement",
    subtitle: "Every format is fine-tuned to promote natural focus and collaboration.",
    type: "choice",
    field: "intent",
    options: [
      { value: "flex-desk", label: "Hot Desking & Flex", description: "Agile, open hot seating. Optimal for solopreneurs & rapid nomads.", icon: "Compass" },
      { value: "dedicated-desk", label: "Dedicated Workstation", description: "Permanent reserved desk. Perfect for focused daily builders & specialists.", icon: "Bookmark" },
      { value: "private-cabin", label: "Private Studio Cabin", description: "Double-glazed acoustic secure glass suites. Best for structured teams.", icon: "Lock" },
      { value: "enterprise-floor", label: "Custom Managed Enterprise Space", description: "Bespoke customized corporate floorplate. Complete tailored fitouts.", icon: "Building" }
    ]
  },
  {
    id: 2,
    question: "Choose your primary regional base in the region",
    subtitle: "Choose from our premium locations connected to transport networks.",
    type: "choice",
    field: "location",
    options: [
      { value: "chandigarh", label: "Chandigarh district", description: "Sector 17, Industrial Area & IT Park - Elite postcodes, green grid planners.", icon: "Sparkles" },
      { value: "mohali", label: "Mohali IT corridor", description: "Phase 8A/8B & Sector 82 - Software powerhouses, dual microgrids.", icon: "Cpu" },
      { value: "panchkula", label: "Panchkula foothills", description: "Sector 8, Sector 14 & MDC - Low-density prestige, relaxing foothills backdrop.", icon: "Trees" },
      { value: "ambala", label: "Ambala trade gate", description: "GT Road Axis - Prime regional highway transit intersection, great scaling.", icon: "MapPin" }
    ]
  },
  {
    id: 3,
    question: "Indicate the seating scale of your workspace fleet",
    subtitle: "We calibrate physical spacing ratios to prevent claustrophobia or desk clutter.",
    type: "choice",
    field: "teamSize",
    options: [
      { value: "1", label: "Solo Professional", description: "1 Dedicated mind looking for supreme quietude.", icon: "User" },
      { value: "2-10", label: "Collaborative Crew", description: "2 to 10 Minds. Optimal for boutique agencies & modern startups.", icon: "Users" },
      { value: "11-49", label: "Divisional Scale", description: "11 to 49 Minds. Requires private desks + integrated micro-suites.", icon: "Briefcase" },
      { value: "50+", label: "Enterprise Fleet", description: "50+ Seats. Demands completely custom branding and executive boardrooms.", icon: "Building" }
    ]
  },
  {
    id: 4,
    question: "Select your desired move-in alignment timeframe",
    subtitle: "We coordinate fitouts and high-speed network provisioning to match your exact launch cycle.",
    type: "choice",
    field: "timeline",
    options: [
      { value: "immediate", label: "Within 7 Business Days", description: "Your systems are ready. You need plug-and-play immediate activation.", icon: "Zap" },
      { value: "this-month", label: "Inside Current Month", description: "Coordinating transition windows. Flexible overlap schedules.", icon: "Calendar" },
      { value: "quarter", label: "Within 90 Days", description: "Strategic expansion. Fine-tuning floorplates and custom furnishings.", icon: "Layers" },
      { value: "exploring", label: "Exploring Architectural Options", description: "Gathering ideas and structural quotes for upcoming quarters.", icon: "Search" }
    ]
  }
];
