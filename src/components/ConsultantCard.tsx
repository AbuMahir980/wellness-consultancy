import React from 'react';
import { Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { cardHoverVariants, itemVariants } from '@/lib/animations';

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
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={image}
          alt={`${name} - ${title}`}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-md">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-900">{rating}</span>
          <span className="text-xs text-gray-600">({reviews})</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {name}
            </h3>
            <p className="text-teal-700 font-medium">
              {title}
            </p>
          </div>
          <div className="flex items-center space-x-1 text-teal-600">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">{experience}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {bio}
        </p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800 hover:bg-teal-200">
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