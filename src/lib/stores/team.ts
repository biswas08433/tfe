import { writable } from 'svelte/store';


export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  expertise: string[];
  designation: Designation;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export enum Designation {
  Administration_Founder = "Administration/Founder",
  Technical_Trek_Guides_and_Leaders = "Technical Trek Guides and Leaders",
  Developer_and_Promotional_Team = "Developer and Promotional Team",
  Other_Core_Members = "Other Core Members"
}

export const teamMembers: TeamMember[] = [
  // Administration/Founder
  {
    id: 1,
    name: "Paramita Chakrabarty",
    position: "Founder & Trek Leader",
    image: "/images/team/paramita.jpeg",
    bio: "",
    expertise: ["Administration", "Trek Leading", "Founder"],
    designation: Designation.Administration_Founder,
    social: {
      instagram: "https://instagram.com/paramitachakrabarty",
      twitter: "https://twitter.com/paramitachakrabarty",
      linkedin: "https://linkedin.com/in/paramitachakrabarty"
    }
  },

  // Technical trek guides and leaders
  {
    id: 2,
    name: "Rajarshi Goswami",
    position: "Technical Trek Guide",
    image: "/images/team/rajarshi.jpeg",
    bio: "",
    expertise: ["Trek Leading", "Route Planning", "Safety"],
    designation: Designation.Technical_Trek_Guides_and_Leaders,
    social: {
      instagram: "https://instagram.com/rajarshigoswami",
      linkedin: "https://linkedin.com/in/rajarshigoswami"
    }
  },
  {
    id: 3,
    name: "Rohan Sinha",
    position: "Technical Trek Leader",
    image: "/images/team/rohan.jpeg",
    bio: "",
    expertise: ["Trek Leading", "Mountaineering", "Navigation"],
    designation: Designation.Technical_Trek_Guides_and_Leaders,
    social: {
      instagram: "https://instagram.com/rohan",
      facebook: "https://facebook.com/rohan"
    }
  },
  {
    id: 4,
    name: "Anamitra Basu",
    position: "Trek Guide",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Trek Leading", "Group Management"],
    designation: Designation.Technical_Trek_Guides_and_Leaders,
    social: {
      instagram: "https://instagram.com/anamitrabasu",
    }
  },
  {
    id: 5,
    name: "Shambo Chatterjee",
    position: "Trek Guide",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Guiding", "Navigation", "Photography"],
    designation: Designation.Technical_Trek_Guides_and_Leaders,
    social: {
      instagram: "https://instagram.com/shambochatterjee",
    }
  },

  // Developer and Promotional Team
  {
    id: 6,
    name: "Sourajyoti",
    position: "Developer",
    image: "/images/team/soura.jpeg", // Placeholder image
    bio: "",
    expertise: ["Web Development", "UI/UX", "Digital Marketing"],
    designation: Designation.Developer_and_Promotional_Team,
    social: {
      linkedin: "https://linkedin.com/in/sourajyoti"
    }
  },
  {
    id: 7,
    name: "Soumyadeep",
    position: "Promotional Team",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Marketing", "Social Media", "Content Creation"],
    designation: Designation.Developer_and_Promotional_Team,
    social: {
      instagram: "https://instagram.com/soumyadip"
    }
  },
  {
    id: 8,
    name: "Shantanu Dey",
    position: "Developer",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Web Development", "Application Design", "SEO"],
    designation: Designation.Developer_and_Promotional_Team,
    social: {
      linkedin: "https://linkedin.com/in/shantanudey"
    }
  },

  // Other Core Members
  {
    id: 9,
    name: "Sandip Paul",
    position: "Coordinator - Logistics",
    image: "/images/team/sandip.jpeg",
    bio: "",
    expertise: [],
    designation: Designation.Other_Core_Members,
    social: {
      instagram: "https://instagram.com/sandippaulphoto",
      website: "https://sandippaulphoto.com"
    }
  },
  {
    id: 10,
    name: "Bartika Sikdar",
    position: "",
    image: "/images/team/bartika.jpeg",
    bio: "",
    expertise: ["Medical Expert - Doctor"],
    designation: Designation.Other_Core_Members,
    social: {
      instagram: "https://instagram.com/bartikadikdar",
      linkedin: "https://linkedin.com/in/bartikadikdar"
    }
  },
  {
    id: 11,
    name: "Rittwika Sardar",
    position: "Marketing - IT manager ",
    image: "/images/team/rittwika.jpeg",
    bio: "",
    expertise: ["Coordination", "Planning", "Client Support"],
    designation: Designation.Other_Core_Members,
    social: {
      instagram: "https://instagram.com/rittwikasardar",
      linkedin: "https://linkedin.com/in/rittwikasardar"
    }
  },
  {
    id: 12,
    name: "Ullash Mishra",
    position: "Core Member",
    image: "/images/team/ullash.jpeg", // Placeholder image
    bio: "",
    expertise: ["Logistics", "Support", "Operations"],
    designation: Designation.Other_Core_Members,
    social: {
      instagram: "https://instagram.com/ullashmishra"
    }
  }
];
