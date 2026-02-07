import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUpVariants } from '@/lib/animations';

interface HeroButton {
  text: string;
  href: string;
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle: string;
  cta?: HeroButton;
  secondaryCta?: HeroButton;
  image: string;
  imageAlt?: string;
  gradient?: string;
  badges?: string[];
}

const HeroSection = ({
  title,
  subtitle,
  cta,
  secondaryCta,
  image,
  imageAlt = 'Hero image',
  gradient = 'from-teal-50 to-blue-50',
  badges
}: HeroSectionProps) => {
  return (
    <section className={`relative bg-gradient-to-br ${gradient} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {(cta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {cta && (
                  <Link
                    to={cta.href}
                    className="bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center group"
                  >
                    {cta.text}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    to={secondaryCta.href}
                    className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-center"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </div>
            )}

            {badges && badges.length > 0 && (
              <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <img
              src={image}
              alt={imageAlt}
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;