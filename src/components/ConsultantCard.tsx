import React from 'react';
import { Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { scrollStaggerItem, viewportSettings, easings } from '@/lib/animations';

interface ConsultantCardProps {
  name: string;
  title: string;
  specialties: string[];
  experience: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
}

const ConsultantCard = ({
  name,
  title,
  specialties,
  experience,
  rating,
  reviews,
  image,
  bio
}: ConsultantCardProps) => {
  return (
    <motion.div
      variants={scrollStaggerItem}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.4, ease: easings.smooth }
      }}
      viewport={viewportSettings}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      {/* Image with overlay on hover */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={`${name} - ${title}`}
          className="w-full h-64 object-cover"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: easings.smooth }}
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Rating badge with bounce-in */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -12 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5, ease: easings.elastic }}
          className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.6, delay: 1.2, ease: 'easeInOut' }}
          >
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </motion.div>
          <span className="text-sm font-medium text-gray-900">{rating}</span>
          <span className="text-xs text-gray-600">({reviews})</span>
        </motion.div>
      </div>

      <div className="p-6">
        {/* Name and title with slide-in */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {name}
            </h3>
            <p className="text-teal-700 font-medium">
              {title}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4, ease: easings.decel }}
            className="flex items-center space-x-1 text-teal-600"
          >
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">{experience}</span>
          </motion.div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {bio}
        </p>

        {/* Specialties with elastic stagger */}
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    duration: 0.4,
                    ease: easings.elastic
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-teal-100 text-teal-800 hover:bg-teal-200 hover:scale-110 transition-transform duration-200"
                  >
                    {specialty}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultantCard;