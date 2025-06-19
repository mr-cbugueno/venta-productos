import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;