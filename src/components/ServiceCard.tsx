import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { scrollStaggerItem, viewportSettings } from '@/lib/animations';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  active: boolean;
  features: string[];
}

const ServiceCard = ({ title, description, image, href, active, features }: ServiceCardProps) => {
  return (
    <motion.div
      variants={scrollStaggerItem}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={viewportSettings}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        active ? 'ring-2 ring-teal-500' : ''
      }`}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {!active && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-yellow-400 text-gray-900 px-4 py-2 hover:bg-yellow-400">
              <Clock className="h-4 w-4 mr-2" />
              Coming Soon
            </Badge>
          </div>
        )}
        {active && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-teal-500 hover:bg-teal-600">
              Available Now
            </Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button
          asChild
          variant={active ? 'default' : 'secondary'}
          className="w-full group"
        >
          <Link
            to={href}
            aria-label={active ? `Learn more about ${title}` : `Join waitlist for ${title}`}
          >
            {active ? 'Learn More' : 'Join Waitlist'}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;