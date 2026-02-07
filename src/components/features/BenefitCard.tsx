import React from 'react';
import { LucideIcon } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

// BenefitCard is an alias for FeatureCard for semantic clarity
const BenefitCard = (props: BenefitCardProps) => {
  return <FeatureCard {...props} />;
};

export default BenefitCard;