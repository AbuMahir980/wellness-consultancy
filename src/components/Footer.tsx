import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, brandInfo } from '@/data/contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-teal-400" />
              <span className="font-bold text-xl">{brandInfo.name}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {brandInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/wellness" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Wellness & Consultancy
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  Book a Session
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href={contactInfo.social.facebook}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.social.instagram}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.social.twitter}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {brandInfo.name}. All rights reserved. {brandInfo.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;