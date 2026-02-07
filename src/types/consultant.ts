export interface Consultant {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
}

export interface ConsultantOption {
  value: string;
  label: string;
}
