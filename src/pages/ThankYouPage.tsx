import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, Home } from 'lucide-react';

const ThankYouPage = () => {
  const location = useLocation();
  const { name, email, sessionType } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thank You{name ? `, ${name}` : ''}!
            </h1>
            <p className="text-xl text-gray-600">
              Your wellness session booking has been submitted successfully.
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              What happens next?
            </h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Email Confirmation</p>
                  <p className="text-sm text-gray-600">
                    You'll receive a confirmation email{email ? ` at ${email}` : ''} within the next few minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Personal Contact</p>
                  <p className="text-sm text-gray-600">
                    Our team will contact you within 24 hours to confirm your {sessionType || 'session'} details and schedule.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Session Scheduling</p>
                  <p className="text-sm text-gray-600">
                    We'll work with you to find the perfect time that fits your schedule and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-teal-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-teal-900 mb-2">
              Preparing for Your Session
            </h3>
            <p className="text-teal-800 mb-4">
              To make the most of your wellness consultation, consider:
            </p>
            <ul className="text-left text-teal-700 space-y-1 text-sm">
              <li>• Thinking about your wellness goals and challenges</li>
              <li>• Preparing any questions you'd like to discuss</li>
              <li>• Ensuring you have a quiet space for virtual sessions</li>
              <li>• Bringing any relevant health information or concerns</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-teal-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 inline-flex items-center justify-center group"
              >
                <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Return to Home
              </Link>
              <Link
                to="/wellness"
                className="border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 inline-flex items-center justify-center group"
              >
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 pt-8 border-t border-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;