import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { scrollStaggerItem, viewportSettings, imageRevealVariants, easings } from '@/lib/animations';

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
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)',
        transition: { duration: 0.35, ease: easings.smooth }
      }}
      whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
      viewport={viewportSettings}
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
        active ? 'ring-2 ring-teal-500' : ''
      }`}
    >
      {/* Image with zoom-on-hover */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: easings.smooth }}
        />
        {!active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-0 bg-gray-900/50 flex items-center justify-center backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, ease: easings.elastic }}
            >
              <Badge variant="secondary" className="bg-yellow-400 text-gray-900 px-4 py-2 hover:bg-yellow-400">
                <Clock className="h-4 w-4 mr-2" />
                Coming Soon
              </Badge>
            </motion.div>
          </motion.div>
        )}
        {active && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: easings.elastic }}
            className="absolute top-4 left-4"
          >
            <Badge className="bg-teal-500 hover:bg-teal-600">
              Available Now
            </Badge>
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {/* Features with staggered check animation */}
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4, ease: easings.decel }}
              className="flex items-center space-x-2 text-sm text-gray-600"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.3, ease: easings.elastic }}
              >
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              </motion.div>
              <span>{feature}</span>
            </motion.div>
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
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;