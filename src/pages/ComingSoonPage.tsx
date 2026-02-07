import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, CheckCircle, AlertCircle, Loader, ArrowLeft, Calendar, Star, Users, Sparkles } from 'lucide-react';

interface ComingSoonPageProps {
  service: string;
}

interface WaitlistData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

const ComingSoonPage = ({ service }: ComingSoonPageProps) => {
  const [waitlistData, setWaitlistData] = useState<WaitlistData>({
    name: '',
    email: '',
    phone: '',
    service: service
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const serviceInfo = {
    'Nursery/Playground': {
      description: 'A safe, nurturing environment for children with age-appropriate activities and qualified caregivers.',
      eta: 'Spring 2024',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Age-appropriate educational activities',
        'Qualified and experienced caregivers',
        'Safe and secure play environment',
        'Flexible scheduling options',
        'Nutritious snacks and meals',
        'Regular parent updates'
      ],
      benefits: [
        { icon: <Users className="h-6 w-6" />, title: 'Social Development', description: 'Help children develop social skills through group play' },
        { icon: <Star className="h-6 w-6" />, title: 'Quality Care', description: 'Professional caregivers dedicated to child development' },
        { icon: <Sparkles className="h-6 w-6" />, title: 'Fun Learning', description: 'Educational activities disguised as play time' }
      ]
    },
    'Salon': {
      description: 'Full-service beauty salon offering hair styling, nail care, and skincare treatments in a relaxing atmosphere.',
      eta: 'Summer 2024',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Professional hair styling and cuts',
        'Manicure and pedicure services',
        'Facial and skincare treatments',
        'Color treatments and highlights',
        'Special occasion styling',
        'Relaxing spa atmosphere'
      ],
      benefits: [
        { icon: <Star className="h-6 w-6" />, title: 'Expert Stylists', description: 'Trained professionals with years of experience' },
        { icon: <Sparkles className="h-6 w-6" />, title: 'Premium Products', description: 'High-quality, professional-grade beauty products' },
        { icon: <Users className="h-6 w-6" />, title: 'Personal Service', description: 'Customized treatments for your unique needs' }
      ]
    },
    'Laundromart': {
      description: 'Convenient laundry and dry cleaning services with express options and eco-friendly practices.',
      eta: 'Fall 2024',
      image: 'https://images.pexels.com/photos/5217876/pexels-photo-5217876.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Wash and fold services',
        'Professional dry cleaning',
        'Express same-day service',
        'Eco-friendly cleaning products',
        'Pickup and delivery options',
        'Stain removal specialists'
      ],
      benefits: [
        { icon: <Clock className="h-6 w-6" />, title: 'Time Saving', description: 'Free up your time for more important things' },
        { icon: <Sparkles className="h-6 w-6" />, title: 'Professional Care', description: 'Expert handling of all fabric types' },
        { icon: <Users className="h-6 w-6" />, title: 'Convenient', description: 'Flexible pickup and delivery scheduling' }
      ]
    },
    'Supermart': {
      description: 'Fresh groceries and daily essentials with local products, online ordering, and home delivery.',
      eta: 'Winter 2024',
      image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Fresh produce and organic options',
        'Local and artisanal products',
        'Online ordering system',
        'Same-day delivery service',
        'Weekly meal planning assistance',
        'Bulk buying options'
      ],
      benefits: [
        { icon: <Star className="h-6 w-6" />, title: 'Fresh Quality', description: 'Daily fresh produce and quality guarantee' },
        { icon: <Users className="h-6 w-6" />, title: 'Local Support', description: 'Supporting local farmers and producers' },
        { icon: <Clock className="h-6 w-6" />, title: 'Convenient', description: 'Online ordering with flexible delivery' }
      ]
    }
  };

  const currentService = serviceInfo[service as keyof typeof serviceInfo];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!waitlistData.email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(waitlistData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      setError('There was an error joining the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWaitlistData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              You're on the waitlist!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in our {service} service. We'll notify you as soon as it becomes available.
            </p>
            <Link
              to="/"
              className="bg-teal-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-yellow-600 mb-4">
                <Clock className="h-6 w-6" />
                <span className="font-semibold">Coming {currentService.eta}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {service}
                <span className="text-yellow-600 block">Coming Soon</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {currentService.description}
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Be the first to know!</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join our waitlist and get exclusive early access when we launch.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="h-4 w-4" />
                      <span>{error}</span>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="name"
                      value={waitlistData.name}
                      onChange={handleInputChange}
                      placeholder="Your name (optional)"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                    <input
                      type="email"
                      name="email"
                      value={waitlistData.email}
                      onChange={handleInputChange}
                      placeholder="Email address *"
                      required
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    />
                  </div>
                  
                  <input
                    type="tel"
                    name="phone"
                    value={waitlistData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number (optional)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin h-4 w-4 mr-2" />
                        Joining...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Join Waitlist
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="relative">
              <img
                src={currentService.image}
                alt={service}
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're working hard to bring you the best {service.toLowerCase()} experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentService.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentService.benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-700 group-hover:bg-yellow-200 transition-colors duration-200">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-yellow-600 mb-4">
            <Calendar className="h-6 w-6" />
            <span className="font-semibold">Expected Launch: {currentService.eta}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our waitlist to get exclusive updates, early access, and special launch offers 
            for our {service} service.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center space-x-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
              
              <input
                type="email"
                name="email"
                value={waitlistData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Joining Waitlist...
                  </>
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-teal-700 py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-teal-100 mb-4">
            While you wait, explore our current wellness services
          </p>
          <Link
            to="/"
            className="bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComingSoonPage;