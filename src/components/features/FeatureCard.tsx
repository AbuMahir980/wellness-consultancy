import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { scrollStaggerItem, viewportSettings, easings } from '@/lib/animations';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'teal' | 'yellow';
}

const FeatureCard = ({ icon: Icon, title, description, variant = 'teal' }: FeatureCardProps) => {
  const colorClasses = {
    teal: 'bg-teal-100 text-teal-700 group-hover:bg-teal-200 group-hover:shadow-teal-200/50',
    yellow: 'bg-yellow-100 text-yellow-700 group-hover:bg-yellow-200 group-hover:shadow-yellow-200/50'
  };

  return (
    <motion.div
      variants={scrollStaggerItem}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: easings.smooth }
      }}
      viewport={viewportSettings}
      className="text-center group cursor-pointer"
    >
      {/* Icon with spin-in and float animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easings.elastic }}
        whileHover={{
          scale: 1.15,
          rotate: [0, -5, 5, 0],
          transition: { duration: 0.4 }
        }}
        className={`${colorClasses[variant]} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg`}
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      {/* Content slides up after icon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: easings.decel, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;