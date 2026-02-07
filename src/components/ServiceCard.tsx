import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';

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
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg ${
      active ? 'ring-2 ring-teal-500' : ''
    }`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {!active && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Coming Soon</span>
            </div>
          </div>
        )}
        {active && (
          <div className="absolute top-4 left-4">
            <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Available Now
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to={href}
          className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            active
              ? 'bg-teal-700 text-white hover:bg-teal-800 focus:ring-teal-500 group'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500'
          }`}
          aria-label={active ? `Learn more about ${title}` : `Join waitlist for ${title}`}
        >
          {active ? 'Learn More' : 'Join Waitlist'}
          <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            active ? 'group-hover:translate-x-1' : ''
          }`} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;