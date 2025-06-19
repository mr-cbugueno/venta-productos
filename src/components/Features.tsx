import React from 'react';
import { Shield, Truck, Headphones, Award, Clock, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Your payment information is encrypted and secure with industry-standard SSL protection.',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50. Most orders delivered within 2-3 business days.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated customer support team is available around the clock to help you.',
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: '30-day money-back guarantee on all products. We stand behind our quality.',
    },
    {
      icon: Clock,
      title: 'Easy Returns',
      description: 'Hassle-free returns within 30 days. Simple online return process.',
    },
    {
      icon: Globe,
      title: 'Global Shipping',
      description: 'We ship worldwide to over 100 countries. International shipping available.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're committed to providing the best shopping experience with exceptional products and service.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;