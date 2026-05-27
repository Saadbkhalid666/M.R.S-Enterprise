import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import AnimatedHeading from './common/AnimatedHeading';

const CLIENTS = [
  'PAEC', 'Fauji Cement', 'Azko Nobel', 'Fauji Fresh & Freeze',
  'Nestle', 'Engro', 'Honda', 'Toyota', 'Packages Ltd', 'Dawlance'
];

const TESTIMONIALS = [
  {
    name: 'Engr. Muhammad Hassan',
    title: 'Project Manager',
    quote: 'M.R.S Enterprises has been our reliable partner for precision instruments and electrical components. Their commitment to quality and on-time delivery is exceptional. Highly recommended for any industrial procurement needs.',
    color: 'text-blue-600',
    bg: 'bg-blue-600',
    image: 'https://placehold.co/200x200/2563eb/FFFFFF?text=Engr+Hassan'
  },
  {
    name: 'Ayesha Khan',
    title: 'Operations Director',
    quote: 'Working with M.R.S Enterprises for our manufacturing equipment needs has been a game-changer. Their technical knowledge and dedication to customer service are outstanding. We\'ve saved costs while maintaining quality.',
    color: 'text-green-600',
    bg: 'bg-green-600',
    image: 'https://placehold.co/200x200/16a34a/FFFFFF?text=Ayesha+Khan'
  },
  {
    name: 'Rashid Ahmad',
    title: 'Supply Chain Manager',
    quote: 'M.R.S Enterprises stands out for their international sourcing capabilities and regulatory compliance expertise. Dealing with chemical processing equipment requires precision—they deliver both flawlessly.',
    color: 'text-purple-600',
    bg: 'bg-purple-600',
    image: 'https://placehold.co/200x200/9333ea/FFFFFF?text=Rashid+Ahmad'
  },
  {
    name: 'Dr. Saeed Ahmad',
    title: 'Head of Engineering',
    quote: 'As an ISO-certified manufacturer, we require suppliers who understand quality standards. M.R.S Enterprises delivers exactly that. Their certification documentation has made our compliance processes seamless.',
    color: 'text-red-600',
    bg: 'bg-red-600',
    image: 'https://placehold.co/200x200/dc2626/FFFFFF?text=Dr+Saeed'
  }
];

const ClientTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextTestimonial, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextTestimonial]);

  return (
    <Section id="testimonials" bg="default">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading 
            text="Trusted by Pakistan's Leading Organizations" 
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            M.R.S Enterprises has earned the trust of Pakistan's most demanding organizations. 
            From government agencies to leading private companies, our clients rely on us for 
            consistent quality and reliable delivery.
          </motion.p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20 border-b border-gray-100 dark:border-slate-800 pb-16">
          {CLIENTS.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center h-20 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-slate-700 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer group"
            >
              <span className="font-bold text-gray-400 group-hover:text-primary transition-colors text-center px-2">
                {client}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute -left-4 md:-left-12 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-xl rounded-2xl p-8 md:p-12 relative"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-8 text-8xl text-gray-100 dark:text-slate-800 font-serif leading-none select-none">
                  "
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                      <Star size={20} className="fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-10 relative z-10 leading-relaxed"
                >
                  "{TESTIMONIALS[currentIndex].quote}"
                </motion.p>

                {/* Author Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center relative z-10"
                >
                  <div className={`w-14 h-14 rounded-full p-1 border-2 ${TESTIMONIALS[currentIndex].color} border-opacity-50 mr-4 flex-shrink-0`}>
                    <img 
                      src={TESTIMONIALS[currentIndex].image} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className={`text-sm font-medium ${TESTIMONIALS[currentIndex].color}`}>
                      {TESTIMONIALS[currentIndex].title}, {TESTIMONIALS[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute -right-4 md:-right-12 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 dark:bg-slate-700 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default ClientTestimonialsSection;
