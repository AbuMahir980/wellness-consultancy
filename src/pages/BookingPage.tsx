import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { consultantOptions } from '@/data/consultants';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  heroTextVariants,
  sectionHeaderVariants,
  sectionSubtitleVariants,
  scrollStaggerItem,
  viewportSettings,
  easings
} from '@/lib/animations';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  sessionType: 'in-person' | 'virtual' | '';
  consultant: string;
  preferredTimes: string;
  reason: string;
  consent: boolean;
  honeypot: string;
}

interface FormErrors {
  [key: string]: string;
}

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    sessionType: '',
    consultant: '',
    preferredTimes: '',
    reason: '',
    consent: false,
    honeypot: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.sessionType) {
      newErrors.sessionType = 'Please select a session type';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted and accept the privacy policy';
    }

    if (formData.honeypot) {
      newErrors.honeypot = 'Invalid submission';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call (replace with actual endpoint in production)
      await new Promise(resolve => setTimeout(resolve, 1500));

      navigate('/thank-you', {
        state: {
          name: formData.fullName,
          email: formData.email,
          sessionType: formData.sessionType
        }
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting your form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easings.decel }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Book Your Wellness Session
            </h1>
            <p className="text-gray-600">
              Take the first step towards your wellness journey. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error Message */}
            <AnimatePresence>
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: easings.smooth }}
                  className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                    <p className="text-sm text-red-700 mt-1">{errors.submit}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Personal Information */}
            <motion.div
              className="space-y-4"
              variants={scrollStaggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-teal-600" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: easings.decel }}
                >
                  <Label htmlFor="fullName" className="text-gray-700 mb-1 block">
                    Full Name *
                  </Label>
                  <Input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={errors.fullName ? 'border-red-300 focus-visible:ring-red-500' : 'border-gray-300 focus-visible:ring-teal-500'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  <AnimatePresence>
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        id="fullName-error"
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {errors.fullName}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4, ease: easings.decel }}
                  >
                    <Label htmlFor="email" className="text-gray-700 mb-1 block">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'border-red-300 focus-visible:ring-red-500' : 'border-gray-300 focus-visible:ring-teal-500'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          id="email-error"
                          className="mt-1 text-sm text-red-600"
                          role="alert"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: easings.decel }}
                  >
                    <Label htmlFor="phone" className="text-gray-700 mb-1 block">
                      Phone/WhatsApp *
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={errors.phone ? 'border-red-300 focus-visible:ring-red-500' : 'border-gray-300 focus-visible:ring-teal-500'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    <AnimatePresence>
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          id="phone-error"
                          className="mt-1 text-sm text-red-600"
                          role="alert"
                        >
                          {errors.phone}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Session Preferences */}
            <motion.div
              className="space-y-4"
              variants={scrollStaggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                Session Preferences
              </h2>

              {/* Session Type Radio */}
              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Session Type *
                  </legend>
                  <div className="space-y-2">
                    {[
                      { value: 'in-person', label: 'In-person session' },
                      { value: 'virtual', label: 'Virtual session (online)' }
                    ].map((option) => (
                      <motion.label
                        key={option.value}
                        className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          formData.sessionType === option.value
                            ? 'border-teal-500 bg-teal-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={option.value}
                          checked={formData.sessionType === option.value}
                          onChange={handleInputChange}
                          className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300"
                        />
                        <span className="ml-3 text-sm text-gray-700 font-medium">{option.label}</span>
                        {formData.sessionType === option.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto"
                          >
                            <CheckCircle className="h-4 w-4 text-teal-600" />
                          </motion.div>
                        )}
                      </motion.label>
                    ))}
                  </div>
                  <AnimatePresence>
                    {errors.sessionType && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {errors.sessionType}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </fieldset>
              </div>

              {/* Consultant Select */}
              <div>
                <Label htmlFor="consultant" className="text-gray-700 mb-1 block">
                  Preferred Consultant
                </Label>
                <select
                  id="consultant"
                  name="consultant"
                  value={formData.consultant}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {consultantOptions.map((consultant) => (
                    <option key={consultant.value} value={consultant.value}>
                      {consultant.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Times */}
              <div>
                <Label htmlFor="preferredTimes" className="text-gray-700 mb-1 block">
                  Preferred Dates/Times
                </Label>
                <Input
                  type="text"
                  id="preferredTimes"
                  name="preferredTimes"
                  value={formData.preferredTimes}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekdays after 3 PM, Saturday mornings"
                  className="border-gray-300 focus-visible:ring-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Let us know your availability and we'll find the best time that works for both of you.
                </p>
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              className="space-y-4"
              variants={scrollStaggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-teal-600" />
                Additional Information
              </h2>

              <div>
                <Label htmlFor="reason" className="text-gray-700 mb-1 block">
                  Reason/Goal for Session
                </Label>
                <Textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Please share what you'd like to work on or achieve through our sessions..."
                  className="border-gray-300 focus-visible:ring-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  This helps us better understand your needs and prepare for your session.
                </p>
              </div>
            </motion.div>

            {/* Consent */}
            <motion.div
              className="space-y-4"
              variants={scrollStaggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              <motion.label
                className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  formData.consent
                    ? 'border-teal-500 bg-teal-50'
                    : errors.consent
                      ? 'border-red-300 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-0.5 focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">
                  I agree to be contacted regarding my wellness session and accept the{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                    privacy policy
                  </a>
                  . *
                </span>
                {formData.consent && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ ease: easings.elastic }}
                    className="ml-auto flex-shrink-0"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-600" />
                  </motion.div>
                )}
              </motion.label>
              <AnimatePresence>
                {errors.consent && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-600"
                    role="alert"
                  >
                    {errors.consent}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Honeypot field (hidden) */}
            <div className="hidden">
              <label htmlFor="honeypot">Leave this field empty</label>
              <input
                type="text"
                id="honeypot"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: easings.decel }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white px-6 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Loader className="h-5 w-5 mr-2" />
                      </motion.div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Submit Booking Request
                    </>
                  )}
                </Button>
              </motion.div>
              <p className="mt-2 text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours to confirm your session details.
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;