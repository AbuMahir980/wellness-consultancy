import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { easings, scrollStaggerItem, viewportSettings } from '@/lib/animations';

const ThankYouPage = () => {
  const location = useLocation();
  const { name, email, sessionType } = location.state || {};

  const steps = [
    {
      icon: Mail,
      title: 'Email Confirmation',
      description: `You'll receive a confirmation email${email ? ` at ${email}` : ''} within the next few minutes.`,
    },
    {
      icon: Phone,
      title: 'Personal Contact',
      description: `Our team will contact you within 24 hours to confirm your ${sessionType || 'session'} details and schedule.`,
    },
    {
      icon: Calendar,
      title: 'Session Scheduling',
      description: "We'll work with you to find the perfect time that fits your schedule and preferences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easings.decel }}
        >
          {/* Success Icon */}
          <motion.div
            className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: easings.elastic, delay: 0.2 }}
          >
            <CheckCircle className="h-10 w-10 text-green-600" />
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: easings.decel, delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You{name ? `, ${name}` : ''}!
            </h1>
            <p className="text-xl text-gray-600">
              Your wellness session booking has been submitted successfully.
            </p>
          </motion.div>

          {/* Confirmation Details */}
          <motion.div
            className="bg-gray-50 rounded-lg p-6 mb-8 text-left"
            variants={scrollStaggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              What happens next?
            </h2>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.4, ease: easings.decel }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.3, ease: easings.elastic }}
                  >
                    <step.icon className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-900">{step.title}</p>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            className="bg-teal-50 rounded-lg p-6 mb-8"
            variants={scrollStaggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <h3 className="text-lg font-semibold text-teal-900 mb-2">
              Preparing for Your Session
            </h3>
            <p className="text-teal-800 mb-4">
              To make the most of your wellness consultation, consider:
            </p>
            <ul className="text-left text-teal-700 space-y-1 text-sm">
              {[
                'Thinking about your wellness goals and challenges',
                'Preparing any questions you\'d like to discuss',
                'Ensuring you have a quiet space for virtual sessions',
                'Bringing any relevant health information or concerns',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3, ease: easings.decel }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease: easings.decel }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button asChild className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-5 font-semibold shadow-lg">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Return to Home
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button asChild variant="outline" className="border-2 border-teal-700 text-teal-700 hover:bg-teal-50 px-6 py-5 font-semibold">
                  <Link to="/wellness">
                    Learn More About Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <p className="text-sm text-gray-600 mb-2">
              Questions about your booking?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="mailto:hello@wellnesshub.com"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
              >
                hello@wellnesshub.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
              >
                +1 (234) 567-890
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouPage;