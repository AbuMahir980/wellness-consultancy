import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Users, Sparkles, Calendar } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const HomePage = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personalized Care",
      description: "Tailored wellness plans designed specifically for your unique needs and goals."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Consultants",
      description: "Work with certified professionals who are passionate about your wellbeing."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Holistic Approach",
      description: "Addressing mind, body, and spirit for comprehensive wellness transformation."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "In-person or virtual sessions that fit seamlessly into your busy lifestyle."
    }
  ];

  const services = [
    {
      title: "Wellness & Consultancy",
      description: "Professional wellness coaching and mental health support",
      image: "https://images.pexels.com/photos/3799283/pexels-photo-3799283.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/wellness",
      active: true,
      features: ["1-on-1 Sessions", "Group Workshops", "Virtual & In-person"]
    },
    {
      title: "Nursery & Playground",
      description: "Safe, nurturing childcare with educational activities",
      image: "https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/nursery",
      active: false,
      features: ["Age-appropriate Activities", "Qualified Caregivers", "Safe Environment"]
    },
    {
      title: "Beauty Salon",
      description: "Full-service salon for all your beauty and grooming needs",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/salon",
      active: false,
      features: ["Hair Styling", "Nail Care", "Skincare Treatments"]
    },
    {
      title: "Laundromart",
      description: "Convenient laundry and dry cleaning services",
      image: "https://images.pexels.com/photos/5217876/pexels-photo-5217876.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/laundromart",
      active: false,
      features: ["Wash & Fold", "Dry Cleaning", "Express Service"]
    },
    {
      title: "Supermart",
      description: "Fresh groceries and daily essentials at your convenience",
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400",
      href: "/supermart",
      active: false,
      features: ["Fresh Produce", "Local Products", "Online Ordering"]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Journey to 
                  <span className="text-teal-700 block">Wellness Starts Here</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover a holistic approach to wellness with our professional consultancy services. 
                  Transform your life with personalized guidance and expert support.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center group"
                >
                  Book Your First Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/wellness"
                  className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certified Experts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Flexible Scheduling</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3799283/pexels-photo-3799283.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness consultation session"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WellnessHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional wellness services that transform lives 
              and build stronger, healthier communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-700 group-hover:bg-teal-200 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive wellness and lifestyle services designed to support every aspect of your wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, happier you. Our expert consultants 
            are here to guide and support you every step of the way.
          </p>
          <Link
            to="/booking"
            className="bg-white text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 inline-flex items-center group"
          >
            Book Your Session Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;