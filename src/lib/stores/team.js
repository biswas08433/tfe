import { writable } from 'svelte/store';

export const teamMembers = writable([
  // Administration/Founder
  {
    id: 1,
    name: "Paramita Chakrabarty",
    position: "Founder & Trek Leader",
    image: "/images/team/paramita.jpeg",
    bio: "",
    expertise: ["Administration", "Trek Leading", "Founder"],
    category: "Administration/Founder",
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
    category: "Technical Trek Guides and Leaders",
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
    category: "Technical Trek Guides and Leaders",
    social: {
      instagram: "https://instagram.com/rohan",
      facebook: "https://facebook.com/rohan"
    }
  },
  {
    id: 4,
    name: "Anamitra Basu",
    position: "Trek Leader",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Trek Leading", "First Aid", "Group Management"],
    category: "Technical Trek Guides and Leaders",
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
    expertise: ["Guiding", "Local Knowledge", "Safety"],
    category: "Technical Trek Guides and Leaders",
    social: {
      instagram: "https://instagram.com/shambochatterjee",
    }
  },

  // Developer and Promotional Team
  {
    id: 6,
    name: "Sourajyoti",
    position: "Developer",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Web Development", "UI/UX", "Digital Marketing"],
    category: "Developer and Promotional Team",
    social: {
      linkedin: "https://linkedin.com/in/sourajyoti"
    }
  },
  {
    id: 7,
    name: "Soumyadip",
    position: "Promotional Team",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Marketing", "Social Media", "Content Creation"],
    category: "Developer and Promotional Team",
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
    category: "Developer and Promotional Team",
    social: {
      linkedin: "https://linkedin.com/in/shantanudey"
    }
  },
  
  // Other Core Members
  {
    id: 9,
    name: "Sandip Paul",
    position: "Adventure Photographer",
    image: "/images/team/sandip.jpeg",
    bio: "",
    expertise: ["Photography", "Content Creation", "Visual Storytelling"],
    category: "Other Core Members",
    social: {
      instagram: "https://instagram.com/sandippaulphoto",
      website: "https://sandippaulphoto.com"
    }
  },
  {
    id: 10,
    name: "Bartika Sikdar",
    position: "Marketing Manager",
    image: "/images/team/bartika.jpeg",
    bio: "",
    expertise: ["Marketing", "Client Relations", "Event Management"],
    category: "Other Core Members",
    social: {
      instagram: "https://instagram.com/bartikadikdar",
      linkedin: "https://linkedin.com/in/bartikadikdar"
    }
  },
  {
    id: 11,
    name: "Rittwika Sardar",
    position: "Trekking Coordinator",
    image: "/images/team/rittwika.jpeg",
    bio: "",
    expertise: ["Coordination", "Planning", "Client Support"],
    category: "Other Core Members",
    social: {
      instagram: "https://instagram.com/rittwikasardar",
      linkedin: "https://linkedin.com/in/rittwikasardar"
    }
  },
  {
    id: 12,
    name: "Ullash Mishra",
    position: "Core Member",
    image: "/images/team/default.jpeg", // Placeholder image
    bio: "",
    expertise: ["Logistics", "Support", "Operations"],
    category: "Other Core Members",
    social: {
      instagram: "https://instagram.com/ullashmishra"
    }
  }
]);
