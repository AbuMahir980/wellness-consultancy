import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { consultantOptions } from '@/data/consultants';

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

    // Required fields
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

    // Honeypot check
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
      // Simulate form submission (replace with actual Formspree endpoint)
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      
      const submissionData = {
        ...formData,
        service: 'Wellness Consultation',
        submittedAt: new Date().toISOString()
      };

      // Remove honeypot field before submission
      delete submissionData.honeypot;

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Navigate to thank you page
        navigate('/thank-you', { 
          state: { 
            name: formData.fullName,
            email: formData.email,
            sessionType: formData.sessionType 
          } 
        });
      } else {
        throw new Error('Submission failed');
      }
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Book Your Wellness Session
            </h1>
            <p className="text-gray-600">
              Take the first step towards your wellness journey. Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* General Error Message */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-medium text-red-800">Submission Error</h3>
                  <p className="text-sm text-red-700 mt-1">{errors.submit}</p>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2 text-teal-600" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                      errors.fullName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Session Preferences */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                Session Preferences
              </h2>

              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Session Type *
                  </legend>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sessionType"
                        value="in-person"
                        checked={formData.sessionType === 'in-person'}
                        onChange={handleInputChange}
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">In-person session</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="sessionType"
                        value="virtual"
                        checked={formData.sessionType === 'virtual'}
                        onChange={handleInputChange}
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300"
                      />
                      <span className="ml-3 text-sm text-gray-700">Virtual session (online)</span>
                    </label>
                  </div>
                  {errors.sessionType && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                      {errors.sessionType}
                    </p>
                  )}
                </fieldset>
              </div>

              <div>
                <label htmlFor="consultant" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Consultant
                </label>
                <select
                  id="consultant"
                  name="consultant"
                  value={formData.consultant}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {consultantOptions.map((consultant) => (
                    <option key={consultant.value} value={consultant.value}>
                      {consultant.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredTimes" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Dates/Times
                </label>
                <input
                  type="text"
                  id="preferredTimes"
                  name="preferredTimes"
                  value={formData.preferredTimes}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekdays after 3 PM, Saturday mornings"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Let us know your availability and we'll find the best time that works for both of you.
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-teal-600" />
                Additional Information
              </h2>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason/Goal for Session
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Please share what you'd like to work on or achieve through our sessions..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
                <p className="mt-1 text-xs text-gray-500">
                  This helps us better understand your needs and prepare for your session.
                </p>
              </div>
            </div>

            {/* Consent */}
            <div className="space-y-4">
              <div>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className={`mt-0.5 focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded ${
                      errors.consent ? 'border-red-300' : ''
                    }`}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I agree to be contacted regarding my wellness session and accept the{' '}
                    <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                      privacy policy
                    </a>
                    . *
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

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
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Submit Booking Request
                  </>
                )}
              </button>
              <p className="mt-2 text-xs text-gray-500 text-center">
                We'll get back to you within 24 hours to confirm your session details.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;