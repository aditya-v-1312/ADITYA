export interface Location {
  id: number;
  city: string;
  country: string;
  year: string;
  role: string;
  lat: number;
  lng: number;
  color: string;
}

export const locations: Location[] = [
  {
    id: 1,
    city: "Vadodara",
    country: "India",
    year: "2025",
    role: "Founder — BIZENIX",
    lat: 22.3072,
    lng: 73.1812,
    color: "#FFD166",
  },
  {
    id: 2,
    city: "Paris",
    country: "France",
    year: "2026",
    role: "VivaTech 2026 • Startup & Innovation",
    lat: 48.8566,
    lng: 2.3522,
    color: "#FFD166",
  },
  {
    id: 3,
    city: "Pointe-Noire",
    country: "Republic of the Congo",
    year: "2024 / 2026",
    role: "Supply Chain & Logistics Operations",
    lat: -4.7889,
    lng: 11.865,
    color: "#FFD166",
  },
  {
    id: 4,
    city: "Istanbul",
    country: "Türkiye",
    year: "2025",
    role: "International Business Collaboration",
    lat: 41.0082,
    lng: 28.9784,
    color: "#FFD166",
  },
];
