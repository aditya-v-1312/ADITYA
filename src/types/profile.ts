export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  roles: string[];
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  resumeEN: string;
  resumeFR: string;
  image: string;
  stats: {
    experience: string;
    companies: string;
    countries: string;
    records: string;
  };
}
