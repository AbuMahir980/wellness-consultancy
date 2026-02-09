import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/features/FeatureCard';
import { homeFeatures } from '@/data/features';
import { services } from '@/data/services';
import {
  scrollStaggerContainer,
  viewportSettings,
  heroTextVariants,
  heroImageVariants,
  heroCtaVariants,
  heroBadgeVariants,
  sectionHeaderVariants,
  sectionSubtitleVariants,
  ctaSectionVariants,
  ctaButtonVariants,
  easings
} from '@/lib/animations';

const badges = ['Free Consultation', 'Certified Experts', 'Flexible Scheduling'];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section - Cinematic Entrance */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Title with blur-in reveal */}
              <motion.div
                className="space-y-4"
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Journey to
                  <motion.span
                    className="text-teal-700 block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: easings.decel }}
                  >
                    Wellness Starts Here
                  </motion.span>
                </h1>
                <motion.p
                  className="text-xl text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: easings.decel }}
                >
                  Discover a holistic approach to wellness with our professional consultancy services.
                  Transform your life with personalized guidance and expert support.
                </motion.p>
              </motion.div>

              {/* CTAs slide up */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-stretch gap-4"
                variants={heroCtaVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/booking"
                    className="bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center group shadow-lg hover:shadow-xl h-full"
                  >
                    Book Your First Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to="/wellness"
                    className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center h-full"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>

              {/* Badges with elastic pop-in */}
              <div className="flex items-center flex-wrap gap-6 text-sm text-gray-600">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    custom={index}
                    variants={heroBadgeVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.15, ease: easings.elastic, duration: 0.5 }}
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                    </motion.span>
                    <span>{badge}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hero image with 3D reveal */}
            <motion.div
              className="relative"
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src="https://images.pexels.com/photos/3799283/pexels-photo-3799283.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness consultation session"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: easings.smooth }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Headers animate in */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Why Choose WellnessHub?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              We're committed to providing exceptional wellness services that transform lives
              and build stronger, healthier communities.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {homeFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Comprehensive wellness and lifestyle services designed to support every aspect of your wellbeing.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Scale in with pulsing button */}
      <motion.section
        className="bg-teal-700 py-16"
        variants={ctaSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Start Your Wellness Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto"
            variants={sectionSubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Take the first step towards a healthier, happier you. Our expert consultants
            are here to guide and support you every step of the way.
          </motion.p>
          <motion.div
            variants={ctaButtonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <Link
                to="/booking"
                className="bg-white text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 inline-flex items-center group shadow-lg"
              >
                Book Your Session Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;