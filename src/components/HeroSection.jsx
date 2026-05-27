import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle, ShieldCheck, Building, Award } from 'lucide-react';
import Button from './common/Button';
import Container from './common/Container';

const HeroSection = () => {
  const BADGES = [
    { icon: CheckCircle, text: 'NTN Registered' },
    { icon: ShieldCheck, text: 'STN Certified' },
    { icon: Building, text: 'Chamber Member' },
    { icon: Award, text: "Gov't Contractor" },
  ];

  const headline = "Premium Industrial Solutions from Global Leaders";
  const words = headline.split(' ');
  const handleExploreProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  };
  const handleRequestQuotation = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Parallax & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("../assets/images/hero-bg.png")',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 to-slate-900/30" />

      {/* Floating Particles (Simplified CSS approach) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 text-center md:text-left flex flex-col items-center md:items-start pt-20 md:pt-0">
        
        {/* Animated Headline */}
        <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight flex flex-wrap justify-center md:justify-start max-w-4xl">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              className="mr-3 mb-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Animated Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans text-white/90 text-sm md:text-lg max-w-3xl mb-10 leading-relaxed"
        >
          M.R.S Enterprises delivers high-quality industrial components and equipment sourced 
          directly from premium manufacturers in Italy, France, Germany, USA, UAE, and China. 
          As a trusted government contractor and certified importer, we supply electrical 
          components, mechanical parts, and safety gears to over 100+ clients across Pakistan.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full md:w-auto"
        >
          <Button onClick={handleExploreProducts} size="lg" className="w-full sm:w-auto">Explore Our Products</Button>
          <Button variant="secondary" onClick={handleRequestQuotation} size="lg" className="w-full sm:w-auto">Request Quotation</Button>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {BADGES.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + (idx * 0.1) }}
                className="flex items-center justify-center md:justify-start space-x-2 bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm rounded-lg py-3 px-4"
              >
                <Icon size={18} className="text-blue-400" />
                <span className="font-sans font-bold text-xs md:text-sm text-blue-100 whitespace-nowrap">
                  {badge.text}
                </span>
              </motion.div>
            );
          })}
        </div>

      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={28} className="text-white" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
