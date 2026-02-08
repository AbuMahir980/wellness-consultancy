import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Video, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import ConsultantCard from '../components/ConsultantCard';
import BenefitCard from '../components/features/BenefitCard';
import FAQItem from '../components/features/FAQItem';
import { wellnessBenefits } from '@/data/benefits';
import { consultants } from '@/data/consultants';
import { wellnessFAQs } from '@/data/faqs';
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

const heroFeatures = [
  { icon: Calendar, label: 'Flexible Scheduling' },
  { icon: Video, label: 'Virtual & In-Person' },
  { icon: Award, label: 'Certified Experts' },
];

const WellnessPage = () => {
  return (
    <div>
      {/* Hero Section - Cinematic Entrance */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Title with blur-in */}
              <motion.div
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Wellness &
                  <motion.span
                    className="text-teal-700 block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.7, ease: easings.decel }}
                  >
                    Consultancy Services
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.3, duration: 0.6, ease: easings.decel }}
              >
                Transform your life with professional guidance from our certified wellness experts.
                Personalized sessions designed to help you achieve your mental, emotional, and physical wellbeing goals.
              </motion.p>

              {/* CTA with hover lift */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
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
                    className="bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center group shadow-lg hover:shadow-xl"
                  >
                    Book Your Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Feature badges with stagger */}
              <div className="grid grid-cols-3 gap-6 pt-4">
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    custom={index}
                    variants={heroBadgeVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + index * 0.15, ease: easings.elastic, duration: 0.5 }}
                    >
                      <feature.icon className="h-5 w-5 text-teal-600" />
                    </motion.div>
                    <span className="text-sm text-gray-600">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hero image with 3D perspective */}
            <motion.div
              className="relative"
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness consultation session"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: easings.smooth }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Transform Your Wellbeing
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Our comprehensive approach addresses all aspects of wellness to help you live your best life.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {wellnessBenefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultants Section */}
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
              Meet Our Expert Consultants
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Work with certified professionals who are passionate about helping you achieve your wellness goals.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {consultants.map((consultant, index) => (
              <ConsultantCard key={index} {...consultant} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              Everything you need to know about our wellness consultancy services.
            </motion.p>
          </div>

          <div className="space-y-2">
            {wellnessFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Begin Your Wellness Journey?
          </motion.h2>
          <motion.p
            className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto"
            variants={sectionSubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Take the first step towards a healthier, more balanced life.
            Our expert consultants are here to support you every step of the way.
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
                Schedule Your First Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WellnessPage;