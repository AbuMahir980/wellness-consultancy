export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  active: boolean;
  features: string[];
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceInfo {
  description: string;
  eta: string;
  image: string;
  features: string[];
  benefits: ServiceBenefit[];
}
