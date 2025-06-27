import { writable } from 'svelte/store';

export const teamMembers = writable([
  {
    id: 1,
    name: "Paramita Chakrabarty",
    position: "Lead Guide & Co-founder",
    image: "/images/team/paramita.jpeg",
    bio: "BMC",
    social: {
      instagram: "https://instagram.com/paramitachakrabarty",
      twitter: "https://twitter.com/paramitachakrabarty",
      linkedin: "https://linkedin.com/in/paramitachakrabarty"
    }
  },
  {
    id: 2,
    name: "Rohan Sinha",
    position: "",
    image: "/images/team/rohan.jpeg",
    bio: "Born in the Khumbu region, Rohan has been guiding in the Everest area for over 20 years. His knowledge of local culture and mountain conditions is unmatched.",
    social: {
      instagram: "https://instagram.com/rohan",
      facebook: "https://facebook.com/rohan"
    }
  },
  {
    id: 3,
    name: "Rittwika Sardar",
    position: "Trekking Coordinator",
    image: "/images/team/rittwika.jpeg",
    bio: "Rittwika handles all trek logistics and ensures that every trekker has a safe and memorable experience. Her organizational skills are key to our success.",
    social: {
      instagram: "https://instagram.com/rittwikasardar",
      linkedin: "https://linkedin.com/in/rittwikasardar"
    }
  },
  {
    id: 4,
    name: "Sandip Paul",
    position: "Adventure Photographer",
    image: "/images/team/sandip.jpeg",
    bio: "Sandip captures the breathtaking beauty of the Himalayas through his lens. His photography has been featured in numerous travel magazines.",
    social: {
      instagram: "https://instagram.com/sandippaulphoto",
      website: "https://sandippaulphoto.com"
    }
  },
  {
    id: 5,
    name: "Bartika Sikdar",
    position: "Marketing Manager",
    image: "/images/team/bartika.jpeg",
    bio: "Bartika is responsible for spreading the word about our treks and adventures. Her passion for travel and storytelling helps us reach more adventure seekers.",
    social: {
      instagram: "https://instagram.com/bartikadikdar",
      linkedin: "https://linkedin.com/in/bartikadikdar"
    }
  },
  {
    id: 6,
    name: "Rajarshi Goswami",
    position: "Trekking Guide",
    image: "/images/team/rajarshi.jpeg",
    bio: "Rajarshi is an experienced trekking guide who knows the Himalayas like the back of his hand. He is passionate about sharing his love for the mountains with others.",
    social: {
      instagram: "https://instagram.com/rajarshigoswami",
      linkedin: "https://linkedin.com/in/rajarshigoswami"
    }
  }
]);
