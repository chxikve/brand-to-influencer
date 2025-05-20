
export interface SponsorBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  price: string;
  type: string;
  category: string;
  day: string;
  month: string;
  details: string;
  image: string; // Added image field
  organizer?: string;
  attendees?: string;
  sponsorshipLevels?: { name: string; price: string; benefits: string[] }[];
}

export interface LocationCategory {
  title: string;
  items: string[];
}

export interface FilterOption {
  label: string;
  value: string;
}
