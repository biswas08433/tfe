import { writable } from 'svelte/store';

export const experiences = writable([
  {
    id: 1,
    title: "Rupin Pass Trek",
    date: "April 2025",
    location: "Nepal",
    description: "Our team successfully led a group of 12 adventurers to Rupin Pass, experiencing breathtaking views of the Himalayas.",
    gallery: [
      {
        src: "/images/experiences/rupin/1.jpeg",
        caption: "Whatever the weather, we trekked on!"
      },
      {
        src: "/images/experiences/rupin/2.jpeg",
        caption: "Our team at Rupin Pass (4,650m) with the majestic Himalayas in the background"
      },
      {
        src: "/images/experiences/rupin/3.jpeg",
        caption: "Crossing a suspension bridge over the Dudh Kosi River"
      },
      {
        src: "/images/experiences/rupin/4.jpeg",
        caption: "Prayer flags at Tengboche Monastery"
      }
    ],
    testimonial: {
      quote: "The journey to Rupin Pass was life-changing. Our guides were knowledgeable, supportive, and made the experience truly unforgettable.",
      author: "Emily W., United Kingdom"
    }
  },
  {
    id: 2,
    title: "Madri Himal Trek",
    date: "March 2025",
    location: "Nepal",
    description: "We embarked on a challenging trek to Madri Himal, navigating through rugged terrain and enjoying the serene beauty of the mountains.",
    gallery: [
      {
        src: "/images/experiences/madri_himal/1.jpeg",
        caption: "First glimpse of Madri Himal"
      },
    ],
    testimonial: {
      quote: "The Madri Himal trek was a test of endurance and spirit. The guides were exceptional, ensuring our safety while allowing us to fully immerse in the experience.",
      author: "Tarikul, WB, India"
    }
  }
]);
