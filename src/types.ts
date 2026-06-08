export interface LocationData {
  id: string;
  name: string; // Chandigarh, Mohali, Panchkula, Ambala
  subRegions: string[];
  description: string;
  image: string;
  highlights: string[];
  connectivity: string;
}

export interface WorkspacePlan {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bestFor: string;
  amenities: string[];
  startingPrice: string;
  image: string;
  capacity: string;
}

export interface QuestionStep {
  id: number;
  question: string;
  subtitle: string;
  type: "choice" | "input" | "multichoice";
  field: string;
  options?: {
    value: string;
    label: string;
    description?: string;
    icon?: string;
  }[];
}

export interface QuestionnaireAnswers {
  intent: string;
  location: string;
  teamSize: string;
  timeline: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  customRequests: string;
}
