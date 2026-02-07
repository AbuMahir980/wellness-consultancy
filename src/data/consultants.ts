import { Consultant, ConsultantOption } from '@/types';

export const consultants: Consultant[] = [
  {
    id: 'dr-sarah-mitchell',
    name: "Dr. Sarah Mitchell",
    title: "Licensed Clinical Psychologist",
    specialties: ["Anxiety & Stress", "Life Transitions", "Mindfulness"],
    experience: "12 years",
    rating: 4.9,
    reviews: 127,
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Mitchell specializes in helping individuals navigate life's challenges with evidence-based therapeutic approaches."
  },
  {
    id: 'marcus-johnson',
    name: "Marcus Johnson",
    title: "Certified Wellness Coach",
    specialties: ["Goal Setting", "Motivation", "Habit Formation"],
    experience: "8 years",
    rating: 4.8,
    reviews: 94,
    image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Marcus empowers clients to create lasting positive changes through personalized coaching strategies."
  },
  {
    id: 'dr-emily-chen',
    name: "Dr. Emily Chen",
    title: "Holistic Health Practitioner",
    specialties: ["Mind-Body Connection", "Nutrition", "Energy Healing"],
    experience: "10 years",
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/6098089/pexels-photo-6098089.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Dr. Chen integrates traditional wellness practices with modern therapeutic techniques."
  }
];

// Single source of truth for consultant options used in forms
export const consultantOptions: ConsultantOption[] = [
  { value: '', label: 'First Available' },
  ...consultants.map(c => ({
    value: c.id,
    label: `${c.name} - ${c.title.split(' ').slice(-2).join(' ')}`
  }))
];
