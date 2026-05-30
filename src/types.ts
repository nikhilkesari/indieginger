/**
 * Types for the Indie Ginger Premium Portal
 */

export interface TastingNotes {
  boldness: number;    // 1 to 5
  spiceHeat: number;   // 1 to 5
  sweetness: number;   // 1 to 5
  carbonation: number; // 1 to 5
  primaryNotes: string[];
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  type: "Artisanal" | "Stalwart" | "Reserve";
  origin: string;
  yearEstablished: number;
  description: string;
  brewProcess: string;
  keyIngredients: string[];
  tastingNotes: TastingNotes;
  imageUrl: string;
  tags: string[];
  sourcingStory: string;
  perfectServe: string;
  alcoholByVolume: string; // e.g. "0.0%"
}

export interface TimelineEvent {
  year: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  location: string;
  keyTakeaway: string;
  historicalContext: string;
}

export interface Stockist {
  id: string;
  name: string;
  type: "Boutique Cafe" | "Gourmet Store" | "Artisanal Bar" | "Bespoke Lounge";
  address: string;
  city: "Mumbai" | "Delhi NCR" | "Bangalore" | "Kolkata" | "Goa" | "Kochi";
  hours: string;
  featuredBrands: string[]; // Brand IDs
  contact: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    description: string;
    weights: {
      boldness?: number;
      spiceHeat?: number;
      sweetness?: number;
      carbonation?: number;
    };
  }[];
}
