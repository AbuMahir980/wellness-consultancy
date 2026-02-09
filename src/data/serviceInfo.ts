import { ServiceInfo } from '@/types';
import { Users, Star, Sparkles, Clock } from 'lucide-react';

export const serviceInfo: Record<string, ServiceInfo> = {
  'Nursery/Playground': {
    description: 'A safe, nurturing environment for children with age-appropriate activities and qualified caregivers.',
    eta: 'Spring 2024',
    image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Age-appropriate educational activities',
      'Qualified and experienced caregivers',
      'Safe and secure play environment',
      'Flexible scheduling options',
      'Nutritious snacks and meals',
      'Regular parent updates'
    ],
    benefits: [
      {
        title: 'Social Development',
        description: 'Help children develop social skills through group play'
      },
      {
        title: 'Quality Care',
        description: 'Professional caregivers dedicated to child development'
      },
      {
        title: 'Fun Learning',
        description: 'Educational activities disguised as play time'
      }
    ]
  },
  'Salon': {
    description: 'Full-service beauty salon offering hair styling, nail care, and skincare treatments in a relaxing atmosphere.',
    eta: 'Summer 2024',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Professional hair styling and cuts',
      'Manicure and pedicure services',
      'Facial and skincare treatments',
      'Color treatments and highlights',
      'Special occasion styling',
      'Relaxing spa atmosphere'
    ],
    benefits: [
      {
        title: 'Expert Stylists',
        description: 'Trained professionals with years of experience'
      },
      {
        title: 'Premium Products',
        description: 'High-quality, professional-grade beauty products'
      },
      {
        title: 'Personal Service',
        description: 'Customized treatments for your unique needs'
      }
    ]
  },
  'Laundromart': {
    description: 'Convenient laundry and dry cleaning services with express options and eco-friendly practices.',
    eta: 'Fall 2024',
    image: 'https://images.pexels.com/photos/4700391/pexels-photo-4700391.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Wash and fold services',
      'Professional dry cleaning',
      'Express same-day service',
      'Eco-friendly cleaning products',
      'Pickup and delivery options',
      'Stain removal specialists'
    ],
    benefits: [
      {
        title: 'Time Saving',
        description: 'Free up your time for more important things'
      },
      {
        title: 'Professional Care',
        description: 'Expert handling of all fabric types'
      },
      {
        title: 'Convenient',
        description: 'Flexible pickup and delivery scheduling'
      }
    ]
  },
  'Supermart': {
    description: 'Fresh groceries and daily essentials with local products, online ordering, and home delivery.',
    eta: 'Winter 2024',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Fresh produce and organic options',
      'Local and artisanal products',
      'Online ordering system',
      'Same-day delivery service',
      'Weekly meal planning assistance',
      'Bulk buying options'
    ],
    benefits: [
      {
        title: 'Fresh Quality',
        description: 'Daily fresh produce and quality guarantee'
      },
      {
        title: 'Local Support',
        description: 'Supporting local farmers and producers'
      },
      {
        title: 'Convenient',
        description: 'Online ordering with flexible delivery'
      }
    ]
  }
};
