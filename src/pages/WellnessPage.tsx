import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Calendar, Video, Users, Award, Heart, Brain, Shield } from 'lucide-react';
import ConsultantCard from '../components/ConsultantCard';

const WellnessPage = () => {
  const benefits = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mental Clarity",
      description: "Develop focus and clear thinking patterns for better decision-making."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Emotional Balance",
      description: "Learn to manage stress and emotions with proven techniques."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Resilience Building",
      description: "Strengthen your ability to overcome challenges and bounce back."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Better Relationships",
      description: "Improve communication and connection with others."
    }
  ];

  const consultants = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety & Stress", "Life Transitions", "Mindfulness"],
      experience: "12 years",
      rating: 4.9,
      reviews: 127,
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Mitchell specializes in helping individuals navigate life's challenges with evidence-based therapeutic approaches."
    },
    {
      name: "Marcus Johnson",
      title: "Certified Wellness Coach",
      specialties: ["Goal Setting", "Motivation", "Habit Formation"],
      experience: "8 years",
      rating: 4.8,
      reviews: 94,
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Marcus empowers clients to create lasting positive changes through personalized coaching strategies."
    },
    {
      name: "Dr. Emily Chen",
      title: "Holistic Health Practitioner",
      specialties: ["Mind-Body Connection", "Nutrition", "Energy Healing"],
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      image: "https://images.pexels.com/photos/6098089/pexels-photo-6098089.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Dr. Chen integrates traditional wellness practices with modern therapeutic techniques."
    }
  ];

  const faqs = [
    {
      question: "What can I expect from my first session?",
      answer: "Your first session is a comprehensive consultation where we'll discuss your goals, concerns, and create a personalized wellness plan. We'll also answer any questions you have about the process."
    },
    {
      question: "Are sessions available online?",
      answer: "Yes! We offer both in-person and virtual sessions to accommodate your preferences and schedule. Our virtual sessions are just as effective and provide the same level of personalized care."
    },
    {
      question: "How often should I schedule sessions?",
      answer: "The frequency depends on your individual needs and goals. Many clients start with weekly sessions, then transition to bi-weekly or monthly as they progress. Your consultant will recommend the best schedule for you."
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept most major insurance plans and can provide documentation for reimbursement. Please contact us with your insurance information to verify coverage."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "We understand that schedules change. We ask for at least 24 hours notice for cancellations or rescheduling to avoid any fees. Emergency situations are handled case-by-case."
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Wellness & 
                <span className="text-teal-700 block">Consultancy Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your life with professional guidance from our certified wellness experts. 
                Personalized sessions designed to help you achieve your mental, emotional, and physical wellbeing goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 flex items-center justify-center group"
                >
                  Book Your Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Virtual & In-Person</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-teal-600" />
                  <span className="text-sm text-gray-600">Certified Experts</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wellness consultation session"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Wellbeing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses all aspects of wellness to help you live your best life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-700 group-hover:bg-teal-200 transition-colors duration-200">
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

      {/* Consultants Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Consultants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work with certified professionals who are passionate about helping you achieve your wellness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.map((consultant, index) => (
              <ConsultantCard key={index} {...consultant} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our wellness consultancy services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 group">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer hover:text-teal-700 transition-colors duration-200 flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="h-5 w-5 text-gray-400 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier, more balanced life. 
            Our expert consultants are here to support you every step of the way.
          </p>
          <Link
            to="/booking"
            className="bg-white text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-700 inline-flex items-center group"
          >
            Schedule Your First Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WellnessPage;