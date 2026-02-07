import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'wellness',
    title: "Wellness & Consultancy",
    description: "Professional wellness coaching and mental health support",
    image: "https://images.pexels.com/photos/3799283/pexels-photo-3799283.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/wellness",
    active: true,
    features: ["1-on-1 Sessions", "Group Workshops", "Virtual & In-person"]
  },
  {
    id: 'nursery',
    title: "Nursery & Playground",
    description: "Safe, nurturing childcare with educational activities",
    image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/nursery",
    active: false,
    features: ["Age-appropriate Activities", "Qualified Caregivers", "Safe Environment"]
  },
  {
    id: 'salon',
    title: "Beauty Salon",
    description: "Full-service salon for all your beauty and grooming needs",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/salon",
    active: false,
    features: ["Hair Styling", "Nail Care", "Skincare Treatments"]
  },
  {
    id: 'laundromart',
    title: "Laundromart",
    description: "Convenient laundry and dry cleaning services",
    image: "https://images.pexels.com/photos/5217876/pexels-photo-5217876.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/laundromart",
    active: false,
    features: ["Wash & Fold", "Dry Cleaning", "Express Service"]
  },
  {
    id: 'supermart',
    title: "Supermart",
    description: "Fresh groceries and daily essentials at your convenience",
    image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400",
    href: "/supermart",
    active: false,
    features: ["Fresh Produce", "Local Products", "Online Ordering"]
  }
];
