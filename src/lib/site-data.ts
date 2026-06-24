import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import type { Program } from "@/components/site/ProgramCard";
import type { ResultEntry } from "@/components/site/ResultCard";
import type { Testimonial } from "@/components/site/TestimonialCard";

export const PROGRAMS: Program[] = [
  {
    name: "Foundation Coaching",
    price: "€149",
    cadence: "Tier 01 — Get Started",
    pitch: "For beginners who need structure, direction, and consistency from day one.",
    includes: [
      "Custom training plan",
      "Nutrition targets",
      "Weekly check-ins",
      "Habit tracking",
      "Progress reviews",
      "Email support",
    ],
    cta: "Start Foundation",
  },
  {
    name: "Transformation Coaching",
    price: "€249",
    cadence: "Tier 02 — Most Popular",
    tag: "Most Popular",
    featured: true,
    pitch: "For clients who want serious fat loss, strength, and consistent support.",
    includes: [
      "Custom training plan",
      "Personalized nutrition strategy",
      "Weekly video check-ins",
      "Progress tracking",
      "Direct messaging support",
      "Monthly plan adjustments",
      "Lifestyle guidance",
    ],
    cta: "Apply For Transformation",
  },
  {
    name: "Elite 1:1 Coaching",
    price: "€399",
    cadence: "Tier 03 — Highest Touch",
    pitch: "For clients who want the highest level of accountability and personal support.",
    includes: [
      "Everything in Transformation",
      "Weekly strategy calls",
      "Priority messaging",
      "Advanced nutrition coaching",
      "Recovery and lifestyle optimization",
      "VIP accountability",
      "Full plan customization",
    ],
    cta: "Book Elite Call",
  },
];

export const RESULTS: ResultEntry[] = [
  {
    name: "Mia",
    result: "Lost 9 kg of body fat",
    timeframe: "12 weeks",
    metrics: "Waist −11 cm  ·  +24% strength",
    quote: "I stopped guessing. Every week had a plan and a reason behind it.",
    image: client1,
  },
  {
    name: "Luka",
    result: "Built strength and dropped body fat",
    timeframe: "16 weeks",
    metrics: "Strength +35%  ·  Body fat −7%",
    quote: "The structure made it impossible to fall off. I just had to show up.",
    image: client2,
  },
  {
    name: "Ana",
    result: "Lost 13 kg and rebuilt confidence",
    timeframe: "20 weeks",
    metrics: "−13 kg  ·  −14 cm waist",
    quote: "For the first time in years I feel in control of my body and my eating.",
    image: client3,
  },
  {
    name: "Sarah",
    result: "Improved consistency, dropped two sizes",
    timeframe: "18 weeks",
    metrics: "−2 clothing sizes",
    quote: "Coaching gave me a routine I can actually keep — not a diet I have to survive.",
    image: client1,
  },
  {
    name: "Daniel",
    result: "Added lean muscle while staying lean",
    timeframe: "6 months",
    metrics: "+6 kg lean mass",
    quote: "I finally understand what training and eating to grow actually looks like.",
    image: client2,
  },
  {
    name: "Elena",
    result: "Ended yo-yo dieting for good",
    timeframe: "9 months",
    metrics: "Stable weight  ·  Strong habits",
    quote: "I'm not starting over every Monday anymore. That alone changed my life.",
    image: client3,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mia Petrović",
    initials: "MP",
    rating: 5,
    program: "Transformation",
    result: "−9 kg in 12 weeks",
    quote:
      "I stopped guessing. For the first time, I knew exactly what to do each week — and I had someone in my corner when things got hard.",
  },
  {
    name: "Luka Horvat",
    initials: "LH",
    rating: 5,
    program: "Elite 1:1",
    result: "Strength +35%",
    quote:
      "The weekly calls kept me locked in. Training and nutrition finally felt like a system, not a guessing game.",
  },
  {
    name: "Ana Marković",
    initials: "AM",
    rating: 5,
    program: "Transformation",
    result: "−13 kg in 20 weeks",
    quote:
      "I tried every diet before this. The difference here was structure, honesty and weekly support. I stopped restarting.",
  },
  {
    name: "Sarah Klein",
    initials: "SK",
    rating: 5,
    program: "Foundation",
    result: "−2 sizes",
    quote:
      "The plan fit around my work and family. No extreme restrictions, just clear targets I could actually hit.",
  },
  {
    name: "Daniel Roth",
    initials: "DR",
    rating: 5,
    program: "Elite 1:1",
    result: "+6 kg lean mass",
    quote: "Best investment I've made in myself. The accountability alone is worth the program.",
  },
  {
    name: "Elena Costa",
    initials: "EC",
    rating: 5,
    program: "Transformation",
    result: "Sustainable routine",
    quote:
      "I learned how to eat and train in a way I can keep forever. That's the part no one else taught me.",
  },
];
