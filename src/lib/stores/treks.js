import { writable, derived } from 'svelte/store';

// Trek data
export const treks = writable([
  {
    id: 1,
    title: "Everest Base Camp",
    category: "autumn",
    image: "https://images.ctfassets.net/83pwon8meh4m/eTxVO309vlKJYVlmQKMUf/eb3a617a3713fd9cd3cd4fb4ec05eb97/Ours_Everest_Base_Camp_EBC_Nepal_Trekkers_Flags_Fun.jpg",
    description: "A classic Himalayan trek to the foot of the world's highest mountain.",
    difficulty: "Advanced",
    duration: "14 days",
    altitude: "5,364m",
    location: "Nepal",
    season: "March-May, September-November",
    bestSeason: "Autumn",
    distance: "130 km", // Added total distance field
    // Key details
    dates: ["September 10, 2025", "October 15, 2025", "November 5, 2025"],
    budget: "$2,500 per person",
    advancePayment: "$500 (20%)",
    groupSize: "6-12 persons",
    showKeyDetails: false,
    longDescription: "The Everest Base Camp trek is one of the most popular trekking routes in Nepal and the world. This incredible journey takes you through the heart of the Khumbu region to the base of Mount Everest, the world's highest peak. Along the way, you'll experience breathtaking mountain scenery, unique Sherpa culture, and visit ancient monasteries. The trek is challenging due to the high altitude and sometimes harsh weather conditions, but the spectacular views and sense of achievement make it all worthwhile.",
    highlights: [
      "Standing at Everest Base Camp (5,364m)",
      "Panoramic views from Kala Patthar (5,545m)",
      "Experiencing Sherpa culture and hospitality",
      "Visiting the famous Tengboche Monastery",
      "Traversing the Khumbu Glacier"
    ],
    itinerary: [
      { 
        day: 1, 
        title: "Fly from Kathmandu to Lukla, trek to Phakding (2,610m)", 
        description: "Begin your journey with a scenic flight to Lukla. After lunch, a gentle trek along the Dudh Kosi River to Phakding.",
        duration: "30 min flight, 3-4 hours trekking",
        distance: "8 km",
        elevation: "+100m/-200m",
        difficulty: "Easy",
        accommodation: "Tea House in Phakding",
        meals: "Lunch, Dinner",
        locations: [
          { name: "Kathmandu", color: "#673ab7", icon: "fa-solid fa-city" },
          { name: "Lukla", color: "#673ab7", icon: "fa-solid fa-plane-arrival" },
          { name: "Phakding", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "First views of the Himalayas, crossing suspension bridges, Buddhist prayer wheels and mani stones"
      },
      { 
        day: 2, 
        title: "Trek to Namche Bazaar (3,440m)", 
        description: "A challenging day crossing suspension bridges and climbing to the Sherpa capital of Namche Bazaar.",
        duration: "6-7 hours trekking",
        distance: "10 km",
        elevation: "+830m",
        difficulty: "Moderate to Hard",
        accommodation: "Tea House in Namche Bazaar",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Phakding", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Monjo", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Namche Bazaar", color: "#673ab7", icon: "fa-solid fa-store" }
        ],
        highlights: "Crossing the famous Hillary Suspension Bridge, first views of Mount Everest, entering Sagarmatha National Park"
      },
      { 
        day: 3, 
        title: "Acclimatization day in Namche Bazaar", 
        description: "Rest day with an optional hike to Everest View Hotel for your first glimpse of Mount Everest.",
        duration: "2-3 hours optional hiking",
        distance: "4 km (optional)",
        elevation: "+300m/-300m (optional)",
        difficulty: "Easy to Moderate",
        accommodation: "Tea House in Namche Bazaar",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Namche Bazaar", color: "#673ab7", icon: "fa-solid fa-store" },
          { name: "Everest View Hotel", color: "#673ab7", icon: "fa-solid fa-binoculars" }
        ],
        highlights: "Panoramic views of Everest, Lhotse, and Ama Dablam, Sherpa Culture Museum, local markets"
      },
      { 
        day: 4, 
        title: "Trek to Tengboche (3,860m)", 
        description: "Trek through rhododendron forests to Tengboche Monastery with stunning views of Everest, Lhotse, and Ama Dablam.",
        duration: "5-6 hours trekking",
        distance: "9 km",
        elevation: "+420m/-100m",
        difficulty: "Moderate",
        accommodation: "Tea House in Tengboche",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Namche Bazaar", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Tengboche", color: "#673ab7", icon: "fa-solid fa-place-of-worship" }
        ],
        highlights: "Tengboche Monastery (largest in Khumbu region), close-up views of Ama Dablam, rhododendron forests"
      },
      { 
        day: 5, 
        title: "Trek to Dingboche (4,410m)", 
        description: "Continue into the Imja Valley with spectacular views of the Himalayan peaks.",
        duration: "5-6 hours trekking",
        distance: "11 km",
        elevation: "+550m",
        difficulty: "Moderate to Hard",
        accommodation: "Tea House in Dingboche",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Tengboche", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Pangboche", color: "#673ab7", icon: "fa-solid fa-place-of-worship" },
          { name: "Dingboche", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Ancient monastery in Pangboche, entering the alpine zone, crossing the treeline"
      },
      { 
        day: 6, 
        title: "Acclimatization day in Dingboche", 
        description: "Another rest day with an optional hike to Nangkartshang Peak for panoramic views.",
        duration: "3-4 hours optional hiking",
        distance: "5 km (optional)",
        elevation: "+400m/-400m (optional)",
        difficulty: "Moderate",
        accommodation: "Tea House in Dingboche",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Dingboche", color: "#673ab7", icon: "fa-solid fa-bed" },
          { name: "Nangkartshang Peak", color: "#673ab7", icon: "fa-solid fa-mountain" }
        ],
        highlights: "360-degree panoramic views of Makalu, Lhotse, Ama Dablam, and Island Peak"
      },
      { 
        day: 7, 
        title: "Trek to Lobuche (4,940m)", 
        description: "A shorter but challenging day as you gain significant altitude.",
        duration: "5 hours trekking",
        distance: "7 km",
        elevation: "+530m",
        difficulty: "Hard",
        accommodation: "Basic Tea House in Lobuche",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Dingboche", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Thukla Pass", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Lobuche", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Memorials to climbers who perished on Everest, crossing the Khumbu Glacier moraine"
      },
      { 
        day: 8, 
        title: "Trek to Gorak Shep (5,170m), visit Everest Base Camp (5,364m)", 
        description: "Early start for the challenging trek to Gorak Shep, then continue to Everest Base Camp.",
        duration: "7-8 hours trekking (3 hours to Gorak Shep, 4-5 hours round trip to EBC)",
        distance: "13 km total",
        elevation: "+230m to Gorak Shep, +194m/-194m to EBC and back",
        difficulty: "Very Hard",
        accommodation: "Basic Tea House in Gorak Shep",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Lobuche", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Gorak Shep", color: "#673ab7", icon: "fa-solid fa-bed" },
          { name: "Everest Base Camp", color: "#673ab7", icon: "fa-solid fa-flag" }
        ],
        highlights: "Standing at the base of the world's highest mountain, Khumbu Icefall views, crossing rocky terrain"
      },
      { 
        day: 9, 
        title: "Hike to Kala Patthar (5,545m), trek to Pheriche (4,280m)", 
        description: "Pre-dawn hike for sunrise views from Kala Patthar, then descend to Pheriche.",
        duration: "8-9 hours total (2-3 hours to Kala Patthar, 5-6 hours to Pheriche)",
        distance: "16 km total",
        elevation: "+375m to Kala Patthar, -1265m to Pheriche",
        difficulty: "Very Hard (morning), Moderate (afternoon)",
        accommodation: "Tea House in Pheriche",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Gorak Shep", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Kala Patthar", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Pheriche", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Best panoramic view of Mount Everest summit, sunrise over the Himalayas"
      },
      { 
        day: 10, 
        title: "Trek to Namche Bazaar (3,440m)", 
        description: "Begin your descent back through familiar territory.",
        duration: "6-7 hours trekking",
        distance: "15 km",
        elevation: "-840m",
        difficulty: "Moderate",
        accommodation: "Tea House in Namche Bazaar",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Pheriche", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Tengboche", color: "#673ab7", icon: "fa-solid fa-place-of-worship" },
          { name: "Namche Bazaar", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Revisit Tengboche Monastery, descending through rhododendron forests, Khumbu Valley views"
      },
      { 
        day: 11, 
        title: "Trek to Lukla (2,860m)", 
        description: "Final day of trekking back to Lukla.",
        duration: "6-7 hours trekking",
        distance: "18 km",
        elevation: "-580m/+180m",
        difficulty: "Moderate",
        accommodation: "Tea House in Lukla",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Namche Bazaar", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Phakding", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Lukla", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Celebration dinner, farewell to porters and guides, final views of the lower Khumbu"
      },
      { 
        day: 12, 
        title: "Fly from Lukla to Kathmandu", 
        description: "Morning flight back to Kathmandu, concluding your trek.",
        duration: "30 min flight",
        distance: "138 km",
        elevation: "-1380m",
        difficulty: "Easy",
        accommodation: "Hotel in Kathmandu",
        meals: "Breakfast",
        locations: [
          { name: "Lukla", color: "#673ab7", icon: "fa-solid fa-plane-departure" },
          { name: "Kathmandu", color: "#673ab7", icon: "fa-solid fa-city" }
        ],
        highlights: "Scenic mountain flight, return to urban comforts"
      }
    ],
    upcoming: false,
    featured: true
  },
  {
    id: 2,
    title: "Annapurna Circuit",
    category: "spring",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=400&h=300",
    description: "One of the most diverse treks offering stunning mountain views and cultural experiences.",
    difficulty: "Moderate",
    duration: "12-20 days",
    altitude: "5,416m (Thorong La Pass)",
    location: "Nepal",
    season: "March-May, September-November",
    bestSeason: "Spring",
    distance: "160 km", // Added total distance field
    // Key details
    dates: ["March 25, 2025", "April 12, 2025", "May 5, 2025"],
    budget: "$1,800 per person",
    advancePayment: "$400 (22%)",
    groupSize: "4-10 persons",
    showKeyDetails: false,
    longDescription: "The Annapurna Circuit is one of the world's classic treks, offering incredible diversity in terms of climate, culture, and landscapes. Starting in lush subtropical forests and climbing to the high-altitude desert of the Thorong La Pass, this trek circles the magnificent Annapurna massif. You'll pass through traditional Hindu villages in the lower regions and Tibetan Buddhist communities in the higher areas, providing a rich cultural experience alongside the natural beauty.",
    highlights: [
      "Crossing the challenging Thorong La Pass (5,416m)",
      "Natural hot springs at Tatopani",
      "Sunrise views from Poon Hill",
      "Apple orchards of Marpha",
      "Scenic flight through Kali Gandaki (world's deepest gorge)"
    ],
    itinerary: [
      { 
        day: 1, 
        title: "Drive from Kathmandu to Besisahar to Khudi", 
        description: "Begin your journey with a scenic drive and short walk to Khudi.",
        duration: "6-7 hours drive, 1 hour trekking",
        distance: "187 km driving, 3 km trekking",
        elevation: "+200m",
        difficulty: "Easy",
        accommodation: "Tea House in Khudi",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Kathmandu", color: "#673ab7", icon: "fa-solid fa-city" },
          { name: "Besisahar", color: "#673ab7", icon: "fa-solid fa-bus" },
          { name: "Khudi", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Scenic drive along Trishuli River, first views of the Annapurna range"
      },
      { 
        day: 2, 
        title: "Trek to Bahundanda", 
        description: "Hike through terraced rice fields and villages.",
        duration: "5-6 hours trekking",
        distance: "8 km",
        elevation: "+300m",
        difficulty: "Easy to Moderate",
        accommodation: "Tea House in Bahundanda",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Khudi", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Bahundanda", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Beautiful terraced fields, traditional farming villages, views of Manaslu"
      },
      { 
        day: 3, 
        title: "Trek to Chamje", 
        description: "Descend to the Marsyangdi River and climb to Chamje.",
        duration: "5-6 hours trekking",
        distance: "10 km",
        elevation: "-500m/+200m",
        difficulty: "Moderate",
        accommodation: "Tea House in Chamje",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Bahundanda", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Chamje", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Marsyangdi River gorge, waterfalls, bamboo forests"
      },
      { 
        day: 4, 
        title: "Trek to Dharapani", 
        description: "Enter the Manang district with Buddhist influence.",
        duration: "5-6 hours trekking",
        distance: "12 km",
        elevation: "+500m",
        difficulty: "Moderate",
        accommodation: "Tea House in Dharapani",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Chamje", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Tal", color: "#673ab7", icon: "fa-solid fa-water" },
          { name: "Dharapani", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Tal village (first Buddhist village), prayer flags and mani walls, entering Manang district"
      },
      { 
        day: 5, 
        title: "Trek to Chame", 
        description: "Walk through pine forests with views of Annapurna II.",
        duration: "5-6 hours trekking",
        distance: "15 km",
        elevation: "+300m",
        difficulty: "Moderate",
        accommodation: "Tea House in Chame",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Dharapani", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Bagarchhap", color: "#673ab7", icon: "fa-solid fa-place-of-worship" },
          { name: "Chame", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "First views of Annapurna II, hot springs, apple orchards"
      },
      { 
        day: 6, 
        title: "Trek to Upper Pisang", 
        description: "Dramatic landscape changes with mountain views.",
        duration: "5-6 hours trekking",
        distance: "14 km",
        elevation: "+400m",
        difficulty: "Moderate",
        accommodation: "Tea House in Upper Pisang",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Chame", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Bhratang", color: "#673ab7", icon: "fa-solid fa-tree" },
          { name: "Upper Pisang", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Apple orchards of Bhratang, dramatic landscape change to arid valley, views of Annapurna II and IV"
      },
      { 
        day: 7, 
        title: "Trek to Manang", 
        description: "Choose between the northern or southern route to Manang.",
        duration: "6-7 hours trekking",
        distance: "16 km (high route) or 13 km (low route)",
        elevation: "+300m",
        difficulty: "Moderate to Hard (high route) or Moderate (low route)",
        accommodation: "Tea House in Manang",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Upper Pisang", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Ghyaru", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Ngawal", color: "#673ab7", icon: "fa-solid fa-place-of-worship" },
          { name: "Manang", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Panoramic mountain views from high route, ancient monasteries, Tibetan-style villages"
      },
      { 
        day: 8, 
        title: "Acclimatization day in Manang", 
        description: "Rest day with optional hikes.",
        duration: "3-4 hours optional hiking",
        distance: "5 km (optional)",
        elevation: "+400m/-400m (optional)",
        difficulty: "Easy to Moderate",
        accommodation: "Tea House in Manang",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Manang", color: "#673ab7", icon: "fa-solid fa-bed" },
          { name: "Ice Lake", color: "#673ab7", icon: "fa-solid fa-water" }
        ],
        highlights: "Visit to the Himalayan Rescue Association, possible hike to Ice Lake or Gangapurna Lake, acclimatization lectures"
      },
      { 
        day: 9, 
        title: "Trek to Yak Kharka", 
        description: "Gradual ascent to help with acclimatization.",
        duration: "3-4 hours trekking",
        distance: "9 km",
        elevation: "+400m",
        difficulty: "Moderate",
        accommodation: "Basic Tea House in Yak Kharka",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Manang", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Yak Kharka", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Entering high alpine terrain, yak pastures, views of Annapurna III and Gangapurna"
      },
      { 
        day: 10, 
        title: "Trek to Thorong Phedi", 
        description: "Short but challenging day to the base of the pass.",
        duration: "3-4 hours trekking",
        distance: "6 km",
        elevation: "+400m",
        difficulty: "Moderate",
        accommodation: "Basic Tea House in Thorong Phedi",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Yak Kharka", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Ledar", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Thorong Phedi", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Views of the Thorong La Pass, high-altitude terrain, final preparations for crossing"
      },
      { 
        day: 11, 
        title: "Cross Thorong La Pass, trek to Muktinath", 
        description: "Early start for the challenging crossing, then descend to Muktinath.",
        duration: "8-10 hours trekking",
        distance: "16 km",
        elevation: "+916m/-1,600m",
        difficulty: "Very Hard",
        accommodation: "Tea House in Muktinath",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Thorong Phedi", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Thorong La Pass", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Muktinath", color: "#673ab7", icon: "fa-solid fa-place-of-worship" }
        ],
        highlights: "Thorong La Pass (5,416m), spectacular views of Dhaulagiri and Annapurna ranges, sacred temple complex at Muktinath"
      },
      { 
        day: 12, 
        title: "Trek to Marpha", 
        description: "Descend into the Kali Gandaki valley to the apple growing region.",
        duration: "6-7 hours trekking",
        distance: "20 km",
        elevation: "-1,200m",
        difficulty: "Moderate",
        accommodation: "Tea House in Marpha",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Muktinath", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Jomsom", color: "#673ab7", icon: "fa-solid fa-wind" },
          { name: "Marpha", color: "#673ab7", icon: "fa-solid fa-apple-whole" }
        ],
        highlights: "Kali Gandaki gorge (deepest in the world), windy Jomsom, white-washed houses of Marpha, famous apple products"
      },
      { 
        day: 13, 
        title: "Trek to Tatopani", 
        description: "Continue down the valley to the hot springs.",
        duration: "7-8 hours trekking",
        distance: "25 km",
        elevation: "-1,100m",
        difficulty: "Hard (long day)",
        accommodation: "Tea House in Tatopani",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Marpha", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Kalopani", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Tatopani", color: "#673ab7", icon: "fa-solid fa-hot-tub" }
        ],
        highlights: "Views of Dhaulagiri and Nilgiri, natural hot springs at Tatopani, changing landscapes"
      },
      { 
        day: 14, 
        title: "Trek to Ghorepani", 
        description: "Climb to Ghorepani for stunning mountain views.",
        duration: "7-8 hours trekking",
        distance: "16 km",
        elevation: "+1,600m",
        difficulty: "Very Hard",
        accommodation: "Tea House in Ghorepani",
        meals: "Breakfast, Lunch, Dinner",
        locations: [
          { name: "Tatopani", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Sikha", color: "#673ab7", icon: "fa-solid fa-place-of-worship" },
          { name: "Ghorepani", color: "#673ab7", icon: "fa-solid fa-bed" }
        ],
        highlights: "Steep climb, rhododendron forests (spectacular in spring), traditional Magar villages"
      },
      { 
        day: 15, 
        title: "Hike to Poon Hill, trek to Nayapul, drive to Pokhara", 
        description: "Early morning hike for sunrise, then final descent and drive to Pokhara.",
        duration: "1 hour to Poon Hill, 4-5 hours trek to Nayapul, 1.5 hour drive",
        distance: "3 km to Poon Hill and back, 15 km to Nayapul, 42 km to Pokhara",
        elevation: "+350m/-1,650m",
        difficulty: "Easy to Moderate",
        accommodation: "Hotel in Pokhara",
        meals: "Breakfast, Lunch",
        locations: [
          { name: "Ghorepani", color: "#673ab7", icon: "fa-solid fa-hiking" },
          { name: "Poon Hill", color: "#673ab7", icon: "fa-solid fa-mountain" },
          { name: "Nayapul", color: "#673ab7", icon: "fa-solid fa-bus" },
          { name: "Pokhara", color: "#673ab7", icon: "fa-solid fa-city" }
        ],
        highlights: "Stunning sunrise over the Himalayan panorama from Poon Hill, traditional stone stairs on descent, finishing in lakeside Pokhara"
      }
    ],
    upcoming: false,
    featured: true
  },
  {
    id: 3,
    title: "Poon Hill Trek",
    category: "spring",
    image: "https://www.supertrekkers.in/wp-content/uploads/2024/09/Poon-Hill-Trek-ViewPoint.jpeg",
    description: "A short trek with spectacular sunrise views of the Annapurna and Dhaulagiri ranges.",
    difficulty: "Beginner",
    duration: "4-5 days",
    altitude: "3,210m",
    location: "Nepal",
    season: "March-May, September-November",
    bestSeason: "Spring",
    distance: "35 km", // Added total distance field
    // Key details
    dates: ["March 15, 2025", "April 5, 2025", "October 20, 2025"],
    budget: "$800 per person",
    advancePayment: "$200 (25%)",
    groupSize: "2-15 persons",
    showKeyDetails: true,
    upcoming: false,
    featured: true
  },
  {
    id: 4,
    title: "Inca Trail to Machu Picchu",
    category: "winter",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Follow in the footsteps of the Incas on this historic trail to the lost city of Machu Picchu.",
    difficulty: "Moderate",
    duration: "4 days",
    altitude: "4,215m (Dead Woman's Pass)",
    location: "Peru",
    season: "May-September (dry season)",
    bestSeason: "Winter",
    distance: "42 km", // Added total distance field
    // Key details
    dates: ["May 20, 2025", "June 15, 2025", "July 10, 2025"],
    budget: "$650 per person",
    advancePayment: "$200 (31%)",
    groupSize: "8-16 persons",
    showKeyDetails: false,
    upcoming: false,
    featured: false
  },
  {
    id: 5,
    title: "Tour du Mont Blanc",
    category: "summer",
    image: "https://www.trekking-mont-blanc.com/wp-content/uploads/2022/02/Faire-le-Tour-du-Mont-Blanc-sans-guide.jpg",
    description: "A classic European trek circling Mont Blanc through France, Italy, and Switzerland.",
    difficulty: "Moderate",
    duration: "7-11 days",
    altitude: "2,665m (Fenêtre d'Arpette)",
    location: "France, Italy, Switzerland",
    season: "June-September",
    bestSeason: "Summer",
    distance: "170 km", // Added total distance field
    // Key details
    dates: ["June 25, 2025", "July 15, 2025", "August 5, 2025"],
    budget: "$1,200 per person",
    advancePayment: "$300 (25%)",
    groupSize: "6-14 persons",
    showKeyDetails: true,
    upcoming: false,
    featured: false
  },
  {
    id: 6,
    title: "Kilimanjaro Summit",
    category: "winter",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&q=80&w=400&h=300",
    description: "Climb to the roof of Africa on this challenging high-altitude trek.",
    difficulty: "Advanced",
    duration: "5-9 days",
    altitude: "5,895m",
    location: "Tanzania",
    season: "January-March, June-October",
    bestSeason: "Winter",
    distance: "70 km", // Added total distance field
    // Key details
    dates: ["January 15, 2026", "February 10, 2026", "July 25, 2025"],
    budget: "$3,200 per person",
    advancePayment: "$800 (25%)",
    groupSize: "8-12 persons",
    showKeyDetails: false,
    upcoming: false,
    featured: false
  },
  {
    id: 7,
    title: "Milford Track",
    category: "summer",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/28/MilfordTrack02.jpg",
    description: "Known as the 'finest walk in the world' through New Zealand's stunning fjordlands.",
    difficulty: "Beginner",
    duration: "4 days",
    altitude: "1,154m (Mackinnon Pass)",
    location: "New Zealand",
    season: "October-April",
    bestSeason: "Summer",
    distance: "53 km", // Added total distance field
    // Key details
    dates: ["November 5, 2025", "December 15, 2025", "January 20, 2026"],
    budget: "17000/- per person",
    advancePayment: "5000/- (29%)",
    groupSize: "4-8 persons",
    showKeyDetails: true,
    upcoming: false,
    featured: false
  },
  {
    id: 8,
    title: "West Highland Way",
    category: "summer",
    image: "https://e457sf3hgvi.exactdn.com/wp-content/uploads/2021/09/2019-5-20-DickvanderPlas@whw-22.jpg",
    description: "Scotland's premier long distance route through the stunning Highlands.",
    difficulty: "Beginner",
    duration: "5-8 days",
    altitude: "548m (Devil's Staircase)",
    location: "Scotland",
    season: "May-September",
    bestSeason: "Summer",
    distance: "152 km", // Added total distance field
    // Key details
    dates: ["May 15, 2025", "June 10, 2025", "August 20, 2025"],
    budget: "$950 per person",
    advancePayment: "$250 (26%)",
    groupSize: "4-12 persons",
    showKeyDetails: false,
    upcoming: false,
    featured: false
  },
  {
    id: 9,
    title: "Torres del Paine Circuit",
    category: "autumn",
    image: "https://torresdelpaine.com/wp-content/uploads/sites/6/2023/08/tdp-atractivo-basetorres-08.jpg",
    description: "Experience the stunning landscapes of Patagonia on this challenging trek.",
    difficulty: "Advanced",
    duration: "7-10 days",
    altitude: "1,200m (John Gardner Pass)",
    location: "Chile",
    season: "November-March",
    bestSeason: "Autumn",
    distance: "130 km", // Added total distance field
    // Key details
    dates: ["November 10, 2025", "December 5, 2025", "February 15, 2026"],
    budget: "$2,100 per person",
    advancePayment: "$500 (24%)",
    groupSize: "6-10 persons",
    showKeyDetails: true,
    upcoming: false,
    featured: false
  },
  {
    id: 10,
    title: "Hampta Pass Trek (Howrah to Howrah)",
    category: "summer",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&q=80&w=400&h=300",
    description: "A beautiful crossover trek from the lush green Kullu Valley to the barren landscapes of Lahaul, with convenient train travel from Howrah.",
    difficulty: "Moderate",
    duration: "9 days",
    altitude: "4,270m",
    location: "India (Himachal Pradesh)",
    season: "June-September",
    bestSeason: "Summer",
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
]);


// Season categories
export const seasons = writable([
  { id: "all", name: "All Seasons" },
  { id: "spring", name: "Spring Treks" },
  { id: "summer", name: "Summer Treks" },
  { id: "autumn", name: "Autumn Treks" },
  { id: "winter", name: "Winter Treks" },
]);

// Derived stores
export const featuredTreks = derived(treks, $treks => $treks.filter(trek => trek.featured));
export const upcomingTreks = derived(treks, $treks => $treks.filter(trek => trek.upcoming === true));

// Helper functions
export function getTrekById(id, treksList) {
  return treksList.find(trek => trek.id === parseInt(id)) || null;
}

export function getTreksByCategory(category, treksList) {
  if (category === 'all') {
    return treksList;
  }
  return treksList.filter(trek => trek.category === category);
}

export function getRelatedTreks(currentTrekId, category, treksList, limit = 2) {
  return treksList
    .filter(trek => trek.id !== parseInt(currentTrekId) && trek.category === category)
    .slice(0, limit);
}
