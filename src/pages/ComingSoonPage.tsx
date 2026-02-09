import { Link } from 'react-router-dom';
import { Clock, CheckCircle, ArrowLeft, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { serviceInfo } from '@/data/serviceInfo';
import WaitlistForm from '@/components/features/WaitlistForm';
import { Button } from '@/components/ui/button';
import {
  easings,
  scrollStaggerContainer,
  scrollStaggerItem,
  sectionHeaderVariants,
  sectionSubtitleVariants,
  heroTextVariants,
  heroImageVariants,
  viewportSettings,
} from '@/lib/animations';

interface ComingSoonPageProps {
  service: string;
}

const ComingSoonPage = ({ service }: ComingSoonPageProps) => {
  const currentService = serviceInfo[service as keyof typeof serviceInfo];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-2 text-yellow-600 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: easings.decel }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <Clock className="h-6 w-6" />
                </motion.div>
                <span className="font-semibold">Coming {currentService.eta}</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
                variants={heroTextVariants}
                initial="hidden"
                animate="visible"
              >
                {service}
                <motion.span
                  className="text-yellow-600 block"
                  initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3, duration: 0.6, ease: easings.decel }}
                >
                  Coming Soon
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: easings.decel }}
              >
                {currentService.description}
              </motion.p>

              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: easings.decel }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">Be the first to know!</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our waitlist and get exclusive early access when we launch.
                </p>
                <WaitlistForm service={service} />
              </motion.div>
            </div>

            <motion.div
              className="relative"
              variants={heroImageVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={currentService.image}
                alt={service}
                className="rounded-xl shadow-xl w-full h-96 object-cover"
                loading="lazy"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: easings.smooth }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/10 to-transparent rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What to Expect
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={sectionSubtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              We're working hard to bring you the best {service.toLowerCase()} experience possible.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {currentService.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                variants={scrollStaggerItem}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3, ease: easings.elastic }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                </motion.div>
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={scrollStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {currentService.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                variants={scrollStaggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: easings.smooth } }}
              >
                <motion.div
                  className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-700 group-hover:bg-yellow-200 transition-colors duration-300 shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * index, duration: 0.6, ease: easings.elastic }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="flex items-center justify-center space-x-2 text-yellow-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easings.elastic }}
          >
            <Calendar className="h-6 w-6" />
            <span className="font-semibold">Expected Launch: {currentService.eta}</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8"
            variants={sectionSubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            Join our waitlist to get exclusive updates, early access, and special launch offers
            for our {service} service.
          </motion.p>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md mx-auto"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easings.decel }}
          >
            <WaitlistForm service={service} />
          </motion.div>
        </div>
      </section>

      {/* Back to Home */}
      <motion.section
        className="bg-teal-700 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-teal-100 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: easings.decel }}
          >
            While you wait, explore our current wellness services
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="secondary" className="bg-white text-teal-700 hover:bg-gray-50 px-6 py-5 font-semibold shadow-lg">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ComingSoonPage;