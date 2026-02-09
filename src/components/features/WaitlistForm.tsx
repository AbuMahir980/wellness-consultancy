import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { easings } from '@/lib/animations';

interface WaitlistFormProps {
  service: string;
  onSuccess?: () => void;
}

interface WaitlistData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const WaitlistForm = ({ service, onSuccess }: WaitlistFormProps) => {
  const [waitlistData, setWaitlistData] = useState<WaitlistData>({
    name: '',
    email: '',
    phone: '',
    service: service
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWaitlistData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!waitlistData.name || !waitlistData.email) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(waitlistData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easings.elastic }}
        className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm"
      >
        <div className="flex items-start space-x-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easings.elastic }}
          >
            <CheckCircle className="h-7 w-7 text-green-600 flex-shrink-0" />
          </motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="font-semibold text-green-900 mb-1 text-lg"
            >
              You're on the waitlist!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-green-700 text-sm"
            >
              We'll notify you as soon as {service} launches. Thank you for your interest!
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: easings.smooth }}
          className="mt-4 h-1 bg-green-300 rounded-full origin-left"
        />
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easings.decel }}
    >
      {/* Name Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4, ease: easings.decel }}
      >
        <Label htmlFor="name" className="text-gray-700 mb-1 block text-sm font-medium">
          Full Name *
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={waitlistData.name}
          onChange={handleInputChange}
          required
          placeholder="Your name"
          className="border-gray-300 focus-visible:ring-teal-500"
        />
      </motion.div>

      {/* Email Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: easings.decel }}
      >
        <Label htmlFor="email" className="text-gray-700 mb-1 block text-sm font-medium">
          Email Address *
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={waitlistData.email}
          onChange={handleInputChange}
          required
          placeholder="your@email.com"
          className="border-gray-300 focus-visible:ring-teal-500"
        />
      </motion.div>

      {/* Phone Field */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: easings.decel }}
      >
        <Label htmlFor="phone" className="text-gray-700 mb-1 block text-sm font-medium">
          Phone Number (Optional)
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={waitlistData.phone}
          onChange={handleInputChange}
          placeholder="+1 (234) 567-890"
          className="border-gray-300 focus-visible:ring-teal-500"
        />
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: easings.smooth }}
            className="flex items-start space-x-2 text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-lg"
          >
            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: easings.decel }}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-700 hover:bg-teal-800 text-white px-6 py-5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Loader className="h-5 w-5 mr-2" />
                </motion.div>
                Joining Waitlist...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5 mr-2" />
                Join Waitlist
              </>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
};

export default WaitlistForm;