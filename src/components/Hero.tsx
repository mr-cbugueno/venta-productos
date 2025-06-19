import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 10,000+ customers worldwide
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Premium Products
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover our curated collection of high-quality products designed to enhance your lifestyle. 
            From cutting-edge technology to everyday essentials, we've got everything you need.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;