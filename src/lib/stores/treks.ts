
export enum Season {
  ALL = "All Seasons",
  SPRING = "Spring Treks",
  SUMMER = "Summer Treks",
  AUTUMN = "Autumn Treks",
  WINTER = "Winter Treks"
};



// Helper functions
export function getTrekById(id: number, treksList: Trek[]) {
  return treksList.find(trek => trek.id === id) || null;
}

export function getTreksBySeason(season: Season, treksList: Trek[]) {
  if (season === Season.ALL) {
    return treksList;
  }
  return treksList.filter(trek => trek.bestSeason === season);
}

export function getRelatedTreks(currentTrekId: number, season: Season, treksList: Trek[], limit = 2) {
  return treksList
    .filter(trek => trek.id !== currentTrekId && trek.bestSeason === season)
    .slice(0, limit);
}


export interface Trek {
  id: number;
  title: string;
  bestSeason: Season;
  image: string;
  description: string;
  duration: string;
  altitude: string;
  location: string;
  distance: string;
  dates: string[];
  budget: string;
  advancePayment: string;
  groupSize: string;
  showKeyDetails: boolean;
  longDescription: string;
  highlights: string[];
  upcoming: boolean;
  featured: boolean;
  itinerary: {
    day: number;
    title: string;
    description: string;
    duration: string;
    distance: string;
    elevation: string;
    difficulty: string;
    accommodation: string;
    meals: string;
    locations: { name: string; color: string; icon: string }[];
    highlights: string;
  }[];
}


// Trek data
export const treks: Trek[] = [
  {
    id: 1,
    title: "Hampta Pass Trek (Howrah to Howrah)",
    image: "https://trekthehimalayas.com/images/HamptaPassTrek/Slider/48a112f2-f40e-4dc3-829d-5507a5ad7472_hampta%20pass%20slider%20desk%20(3).webp",
    description: "A beautiful crossover trek from the lush green Kullu Valley to the barren landscapes of Lahaul, with convenient train travel from Howrah.",

    duration: "9 days",
    altitude: "4,270m",
    location: "India (Himachal Pradesh)",

    bestSeason: Season.SUMMER,
    distance: "75 km", // Added total distance field
    // Key details
    dates: ["5th Sept, 2025", "14th Sept, 2025"],
    budget: "17,000/- per person",
    advancePayment: "5000/- (30%)",
    groupSize: "8-12 persons",
    showKeyDetails: true,
    longDescription: "The Hampta Pass trek is a mesmerizing journey that takes you from the verdant Kullu Valley to the stark landscapes of Lahaul. This dramatic change in terrain over a short distance is what makes this trek unique. As you cross the pass, you'll witness spectacular views of the Dhauladhar ranges and Pir Panjal mountains. The highlight of this trek is the beautiful crescent-shaped Chandratal Lake (Moon Lake) with its crystal clear blue waters. This special 9-day package includes comfortable train travel from Howrah to Delhi (Howrah-Kalka Mail) and return by premium Rajdhani Express, making it convenient for trekkers from Eastern India.",
    highlights: [
      "Dramatic change in landscapes from lush green to desert terrain",
      "Crossing the challenging Hampta Pass at 4,270m",
      "Visiting the stunning Chandratal Lake",
      "Panoramic views of Dhauladhar and Pir Panjal ranges",
      "Experiencing high-altitude Himalayan meadows"
    ],
    itinerary: [
      {
        day: 1,
        title: "Train Journey from Howrah to Chandigarh - 5th Sept, 2025",
        description: "Begin your adventure with a comfortable overnight train journey from Howrah to Delhi, traversing the heartland of India.",
        duration: "17-18 hours train journey",
        distance: "1,450 km",
        elevation: "0m",
        difficulty: "Easy",
        accommodation: "Train",
        meals: "Meals available for purchase on train",
        locations: [
          { name: "Howrah", color: "#673ab7", icon: "fa-solid fa-city" },
          { name: "Netaji Express", color: "green", icon: "fa-solid fa-train" },
          { name: "Chandigarh", color: "#673ab7", icon: "fa-solid fa-city" }
        ],
        highlights: "Scenic journey through multiple states, crossing the Gangetic plains, overnight travel experience"
      },
      {
        day: 2,
        title: "Chandigarh to Manali - Manali Acclimatization and Preparation - 6th Sept, 2025",
        description: "Arrive in Manali. Day for rest, acclimatization, gear check, and briefing about the trek.",
        duration: "Free day for acclimatization",
        distance: "Local exploration",
        elevation: "2,050m (stable)",
        difficulty: "Easy",
        accommodation: "Volvo AC Sleeper Bus",
        meals: "Breakfast, Lunch in Chandigarh, Dinner in Manali",
        locations: [
          { name: "Chandigarh", color: "#673ab7", icon: "fa-solid fa-city" },
          { name: "Bus", color: "green", icon: "fa-solid fa-bus" },
          { name: "Manali", color: "#673ab7", icon: "fa-solid fa-mountain-city" }
        ],
        highlights: "Brief exploration of Delhi, scenic night journey through the foothills of Himalayas, ascending to higher altitudes"
      },
      {
        day: 3,
        title: "Drive from Manali to Jobra, trek to Chika (3,100m) - 7th Sept, 2025",
        description: "After a scenic drive to Jobra, begin your trek through beautiful pine forests and meadows to reach Chika campsite.",
        duration: "2 hours drive, 2-3 hours trekking",
        distance: "4 km trekking",
        elevation: "+300m (from Jobra)",
        difficulty: "Easy to Moderate",
        accommodation: "Camping at Chika",
        meals: "Breakfast, Packed Lunch, Dinner",
        locations: [
          { name: "Manali", color: "#673ab7", icon: "fa-solid fa-mountain-city" },
          { name: "Jobra", color: "#673ab7", icon: "fa-solid fa-mountain-city" },
          { name: "Chika", color: "#673ab7", icon: "fa-solid fa-mountain-city" }
        ],
        highlights: "Beautiful drive through Kullu Valley, first views of the Pir Panjal range, alpine meadows with wildflowers"
      },
      {
        day: 4,
        title: "Trek to Balu Ka Ghera (3,600m) - 8th Sept, 2025",
        description: "Trek alongside the Hampta River through magnificent valleys with waterfalls and wildflowers.",
        duration: "5-6 hours trekking",
        distance: "8 km",
        elevation: "+500m",
        difficulty: "Moderate",
        accommodation: "Camping at Balu Ka Ghera",
        meals: "Breakfast, Packed Lunch, Dinner",
        locations: [
          { name: "Chika", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Jwara", color: "#673ab7", icon: "fa-solid fa-water" },
          { name: "Balu Ka Ghera", color: "#673ab7", icon: "fa-solid fa-campground" }
        ],
        highlights: "Pristine river crossings, cascading waterfalls, vast meadows, stunning valley views"
      },
      {
        day: 5,
        title: "Trek to Hampta Pass (4,270m) and Shea Goru (3,900m) - 9th Sept, 2025",
        description: "The challenging climb to Hampta Pass is rewarded with breathtaking views before descending to Shea Goru.",
        duration: "7-8 hours trekking",
        distance: "12 km",
        elevation: "+670m/-370m",
        difficulty: "Hard",
        accommodation: "Camping at Shea Goru",
        meals: "Breakfast, Packed Lunch, Dinner",
        locations: [
          { name: "Balu Ka Ghera", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Hampta Pass", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Shea Goru", color: "#673ab7", icon: "fa-solid fa-campground" }
        ],
        highlights: "Panoramic views from Hampta Pass, dramatic landscape change from green Kullu Valley to barren Lahaul Valley"
      },
      {
        day: 6,
        title: "Trek to Chatru (3,300m), drive to Chandratal (4,300m) - 10th Sept, 2025",
        description: "Trek to Chatru and then drive to the enchanting Chandratal Lake, where you can enjoy sunset views.",
        duration: "4-5 hours trekking, 2 hours drive",
        distance: "10 km trekking, 30 km driving",
        elevation: "-600m/+1000m",
        difficulty: "Moderate",
        accommodation: "Camping near Chandratal Lake",
        meals: "Breakfast, Packed Lunch, Dinner",
        locations: [
          { name: "Shea Goru", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Chatru", color: "#673ab7", icon: "fa-solid fa-dharmachakra" },
          { name: "Chandratal Lake", color: "#673ab7", icon: "fa-solid fa-water" }
        ],
        highlights: "Crossing the Chandra River, first views of the barren Spiti landscape, breathtaking Chandratal Lake with its crescent shape"
      },
      {
        day: 7,
        title: "Drive from Chandratal to Manali, board night bus to Delhi - 11th Sept, 2025",
        description: "A long but scenic drive back to Manali via the Rohtang Pass, followed by an overnight bus to Delhi.",
        duration: "6-7 hours driving to Manali, 12-14 hours bus to Delhi",
        distance: "120 km to Manali, 550 km to Delhi",
        elevation: "-1000m to Manali, -2,050m to Delhi",
        difficulty: "Easy",
        accommodation: "Bus",
        meals: "Breakfast, Lunch",
        locations: [
          { name: "Chandratal Lake", color: "#673ab7", icon: "fa-solid fa-water" },
          { name: "Rohtang Pass", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Manali", color: "#673ab7", icon: "fa-solid fa-mountain-city" },
          { name: "Bus", color: "green", icon: "fa-solid fa-bus" }
        ],
        highlights: "Views from Rohtang Pass (3,980m), spectacular landscapes, celebration lunch in Manali"
      },
      {
        day: 8,
        title: "Delhi to Howrah by Train - 12th Sept, 2025",
        description: "Return to Howrah by train",
        duration: "17 hours train journey",
        distance: "1,450 km",
        elevation: "0m",
        difficulty: "Easy",
        accommodation: "Train",
        meals: "All meals included on Rajdhani Express",
        locations: [
          { name: "Delhi", color: "#673ab7", icon: "fa-solid fa-city" },
          { name: "Poorva Express", color: "green", icon: "fa-solid fa-train" },
          { name: "Howrah", color: "#673ab7", icon: "fa-solid fa-city" }
        ],
        highlights: "Premium train experience with all meals, completing the full circle journey, reflecting on your Himalayan adventure"
      }
    ],
    upcoming: true,
    featured: false
  }
];

export const seasons = Object.values(Season);

// Derived stores
export const featuredTreks = treks.filter(trek => trek.featured);
export const upcomingTreks = treks.filter(trek => trek.upcoming === true);


