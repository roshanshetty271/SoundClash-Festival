export const artists = [
  // Headliners
  { 
    name: "The Midnight", 
    genre: "Synthwave", 
    day: "Friday", 
    imageUrl: "https://picsum.photos/seed/midnight/400/400", 
    isHeadliner: true 
  },
  { 
    name: "Rage Protocol", 
    genre: "Electronic", 
    day: "Saturday", 
    imageUrl: "https://picsum.photos/seed/rage/400/400", 
    isHeadliner: true 
  },
  { 
    name: "Nova Twins", 
    genre: "Rock", 
    day: "Sunday", 
    imageUrl: "https://picsum.photos/seed/nova/400/400", 
    isHeadliner: true 
  },
  
  // Others
  { 
    name: "Glass Animals", 
    genre: "Indie", 
    day: "Friday", 
    imageUrl: "https://picsum.photos/seed/glass/400/400" 
  },
  { 
    name: "Brutalist", 
    genre: "Industrial", 
    day: "Friday", 
    imageUrl: "https://picsum.photos/seed/brutalist/400/400" 
  },
  { 
    name: "Lunar Waves", 
    genre: "Dream Pop", 
    day: "Saturday", 
    imageUrl: "https://picsum.photos/seed/lunar/400/400" 
  },
  { 
    name: "Concrete", 
    genre: "Post-Punk", 
    day: "Saturday", 
    imageUrl: "https://picsum.photos/seed/concrete/400/400" 
  },
  { 
    name: "Neon Ride", 
    genre: "Synthwave", 
    day: "Sunday", 
    imageUrl: "https://picsum.photos/seed/neon/400/400" 
  },
  { 
    name: "Hex", 
    genre: "Electronic", 
    day: "Sunday", 
    imageUrl: "https://picsum.photos/seed/hex/400/400" 
  },
  { 
    name: "Void Club", 
    genre: "Techno", 
    day: "Friday", 
    imageUrl: "https://picsum.photos/seed/void/400/400" 
  },
  { 
    name: "Static", 
    genre: "Noise", 
    day: "Saturday", 
    imageUrl: "https://picsum.photos/seed/static/400/400" 
  },
  { 
    name: "Chrome", 
    genre: "Industrial", 
    day: "Sunday", 
    imageUrl: "https://picsum.photos/seed/chrome/400/400" 
  },
];

export const schedule = {
  friday: [
    { time: "4:00 PM", artist: "Void Club", stage: "Main Stage" },
    { time: "5:30 PM", artist: "Brutalist", stage: "Warehouse" },
    { time: "7:00 PM", artist: "Glass Animals", stage: "Main Stage" },
    { time: "9:00 PM", artist: "The Midnight", stage: "Main Stage" },
    { time: "11:00 PM", artist: "After Dark DJ Set", stage: "Underground" },
  ],
  saturday: [
    { time: "3:00 PM", artist: "Static", stage: "Warehouse" },
    { time: "5:00 PM", artist: "Lunar Waves", stage: "Main Stage" },
    { time: "6:30 PM", artist: "Concrete", stage: "Warehouse" },
    { time: "8:30 PM", artist: "Rage Protocol", stage: "Main Stage" },
    { time: "11:00 PM", artist: "Techno Takeover", stage: "Underground" },
  ],
  sunday: [
    { time: "2:00 PM", artist: "Chrome", stage: "Warehouse" },
    { time: "4:00 PM", artist: "Neon Ride", stage: "Main Stage" },
    { time: "6:00 PM", artist: "Hex", stage: "Main Stage" },
    { time: "8:00 PM", artist: "Nova Twins", stage: "Main Stage" },
    { time: "10:30 PM", artist: "Closing Ceremony", stage: "All Stages" },
  ],
};

export const faqs = [
  {
    question: "What's included with my ticket?",
    answer: "All tickets include 3-day access to all stages, on-site camping, and festival app access. VIP adds front-stage viewing, lounge access, and complimentary drinks.",
  },
  {
    question: "Can I get a refund?",
    answer: "Tickets are non-refundable but are transferable. You can transfer your ticket to someone else through our official resale platform.",
  },
  {
    question: "What can I bring?",
    answer: "Small bags, blankets, sealed water bottles, sunscreen. No outside food/drinks, weapons, professional cameras, or drones.",
  },
  {
    question: "Is there an age limit?",
    answer: "The festival is all-ages. Anyone under 18 must be accompanied by a parent or guardian. Some areas (bars) are 21+.",
  },
  {
    question: "What about weather?",
    answer: "Rain or shine, we rock. Austin in June is hot—bring sunscreen, hats, and stay hydrated. Water stations are free throughout.",
  },
  {
    question: "How do I get to the front?",
    answer: "GA is first-come, first-served. VIP gets dedicated front-stage viewing areas. Pro tip: arrive early for headliners.",
  },
];

export const ticketTiers = [
  {
    name: "Early Bird",
    price: 199,
    originalPrice: 299,
    color: "bg-green",
    soldOut: true,
    features: [
      "3-day General Admission",
      "Access to all stages",
      "Festival app access",
      "Free parking (limited)",
    ],
  },
  {
    name: "General",
    price: 299,
    color: "bg-yellow",
    isFeatured: true,
    features: [
      "3-day General Admission",
      "Access to all stages",
      "Festival app access",
      "Exclusive merch discount",
      "Free parking",
    ],
  },
  {
    name: "VIP",
    price: 599,
    color: "bg-pink",
    features: [
      "3-day VIP Access",
      "Front-stage viewing areas",
      "VIP lounge access",
      "Complimentary drinks",
      "Meet & greet lottery",
      "Premium parking",
    ],
  },
];
