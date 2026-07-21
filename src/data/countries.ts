export interface Location {
  id: number;

  city: string;
  country: string;

  lat: number;
  lng: number;

  year: string;

  role: string;

  title: string;

  subtitle: string;

  description: string;

  linkedin: string;

  technologies: string[];

  color: string;
}

export const locations: Location[] = [
  {
    id: 1,

    city: "Vadodara",

    country: "India",

    year: "2025",

    role: "Founder — BIZENIX",

    title: "Building BIZENIX",

    subtitle: "Founder & Software Developer",

    description:
      "Founded BIZENIX to build modern websites, AI-powered business automation, branding solutions, and digital products that help businesses grow through technology.",

    linkedin: "https://www.bizenix.in/",

    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Python",
      "AI",
      "Automation",
      "Branding",
    ],

    lat: 22.3072,
    lng: 73.1812,

    color: "#FFD166",
  },

  {
    id: 2,

    city: "Paris",

    country: "France",

    year: "2026",

    role: "VivaTech 2026",

    title: "VivaTech 2026",

    subtitle: "Startup & Innovation",

    description:
      "Represented BIZENIX at Europe's largest startup and technology event, exploring emerging innovations, AI, entrepreneurship, and opportunities to build global collaborations.",

    linkedin:
      "https://www.linkedin.com/posts/adityachandiramani_vivatech2026-innovation-ai-activity-7474808757504380929-qcnx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_-5LcBLnbLv3EOGpnP8xzx75eK1tvedAI",

    technologies: ["AI", "Startups", "Innovation", "Networking", "Technology"],

    lat: 48.8566,
    lng: 2.3522,

    color: "#FFD166",
  },

  {
    id: 3,

    city: "Istanbul",

    country: "Türkiye",

    year: "2025",

    role: "USAPEEC Trade Mission",

    title: "International Trade Mission",

    subtitle: "Business Collaboration",

    description:
      "Participated in USAPEEC's Sub-Saharan Africa Trade Mission, connecting with international industry leaders, strengthening business relationships, and gaining global exposure to supply chain and trade operations.",

    linkedin:
      "https://www.linkedin.com/posts/usapeec_usapeec-trademission-uspoultry-ugcPost-7336637489685667840-xkm3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_-5LcBLnbLv3EOGpnP8xzx75eK1tvedAI",

    technologies: [
      "International Trade",
      "Supply Chain",
      "Business",
      "Networking",
    ],

    lat: 41.0082,
    lng: 28.9784,

    color: "#FFD166",
  },

  {
    id: 4,

    city: "Pointe-Noire",

    country: "Republic of the Congo",

    year: "2024 • 2026",

    role: "Supply Chain & Logistics",

    title: "Global Logistics Operations",

    subtitle: "Supply Chain Experience",

    description:
      "Worked closely with international logistics and supply chain operations, gaining hands-on experience in procurement, shipping coordination, inventory management, and cross-border business processes.",

    linkedin:
      "https://www.linkedin.com/posts/adityachandiramani_tradetalks-internshipexperience-networking-activity-7335699909410549762-zuYd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_-5LcBLnbLv3EOGpnP8xzx75eK1tvedAI",

    technologies: [
      "Logistics",
      "Operations",
      "Supply Chain",
      "Procurement",
      "International Business",
    ],

    lat: -4.7889,
    lng: 11.865,

    color: "#FFD166",
  },

  {
    id: 5,

    city: "Dubai",

    country: "United Arab Emirates",

    year: "2025",

    role: "Museum of the Future",

    title: "Museum of the Future",

    subtitle: "Where Vision Meets Execution",

    description:
      "Visiting Dubai's Museum of the Future reshaped my perspective on technology. The journey through space exploration, sustainability, human wellbeing, and tomorrow's innovations reinforced a simple belief: the future belongs to those who can imagine it, design it, and execute it. It strengthened my purpose as a developer and entrepreneur—to build meaningful technology today that shapes tomorrow.",

    linkedin:
      "https://www.linkedin.com/posts/adityachandiramani_museumofthefuture-dubai-tech-activity-7388250525630304256-rEta?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_-5LcBLnbLv3EOGpnP8xzx75eK1tvedAI",

    technologies: [
      "Artificial Intelligence",
      "Innovation",
      "Future Technology",
      "Robotics",
      "Sustainability",
      "Entrepreneurship",
    ],

    lat: 25.2048,
    lng: 55.2708,

    color: "#FFD166",
  },
];
