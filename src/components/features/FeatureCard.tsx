import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { scrollStaggerItem, viewportSettings } from '@/lib/animations';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'teal' | 'yellow';
}

const FeatureCard = ({ icon: Icon, title, description, variant = 'teal' }: FeatureCardProps) => {
  const colorClasses = {
    teal: 'bg-teal-100 text-teal-700 group-hover:bg-teal-200',
    yellow: 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200'
  };

  return (
    <motion.div
      variants={scrollStaggerItem}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.02 }}
      viewport={viewportSettings}
      className="text-center group"
    >
      <div className={`${colorClasses[variant]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;