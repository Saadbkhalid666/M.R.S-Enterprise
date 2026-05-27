import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ShieldCheck, Building, Award } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import AnimatedHeading from './common/AnimatedHeading';
import aboutimg from "../assets/images/about-image.jpg"

// Animated Counter Component
const AnimatedCounter = ({ from, to, suffix = '', duration = 2.5 }) => {
  const [count, setCount] = useState(from);
  const nodeRef = React.useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
};

const AboutSection = () => {
  const credentials = [
    { icon: CheckCircle, label: 'NTN Registered', desc: "Officially registered with Pakistan's tax authority" },
    { icon: ShieldCheck, label: 'STN Certified', desc: "Compliant with all sales tax regulations" },
    { icon: Building, label: 'Chamber Member', desc: "Active member of Lahore Chamber of Commerce" },
    { icon: Award, label: "Gov't Contractor", desc: "Approved contractor for government projects" },
  ];

  return (
    <Section id="about" bg="default" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image + Timeline Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={aboutimg}
                alt="M.R.S Enterprises office in Lahore, Pakistan"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            
            {/* Timeline Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur rounded-lg p-6 shadow-xl">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Our Journey</h4>
              <div className="space-y-3">
                {[
                  { year: '2015', text: 'Founded by Mr. Abdul Raheem' },
                  { year: '2018', text: 'Certified Government Contractor' },
                  { year: '2020', text: '50+ Active Clients Nationwide' },
                  { year: '2024', text: '100+ Trusted Industrial Partners' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-12 font-bold text-primary text-sm">{item.year}</div>
                    <div className="ml-4 flex-1 border-l-2 border-gray-200 dark:border-slate-700 pl-4 text-sm text-slate-600 dark:text-slate-400">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedHeading 
              text="About M.R.S Enterprises" 
              className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6"
            />
            
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              Founded in 2015 by Mr. Abdul Raheem, M.R.S Enterprises is a trusted industrial importer, 
              government contractor, and general order supplier based in Lahore, Pakistan. With a strong 
              focus on quality and client satisfaction, we proudly serve industries across the country. 
              Under the leadership of CEO Abdul Raheem, we've grown from a regional business into a 
              nationwide industrial solutions provider.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              What sets us apart is our direct relationship with world-leading manufacturers. We source 
              exclusively from trusted global brands including ABB, Honeywell, Schneider Electric, Mitutoyo, 
              and Fluke. This direct sourcing eliminates middlemen, ensuring competitive pricing without 
              compromising quality. Every product is thoroughly inspected to guarantee compliance with 
              international standards.
            </p>

            {/* Mission Statement */}
            <div className="border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg mb-8">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Our Mission</h4>
              <p className="italic text-slate-700 dark:text-slate-300 text-sm md:text-base">
                "To serve as Pakistan's most reliable industrial solutions provider by delivering 
                premium imported components, ensuring on-time delivery, maintaining strict quality standards, 
                and building long-term partnerships."
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="mb-8">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Official Credentials</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="bg-blue-50 dark:bg-slate-800 p-4 rounded-lg flex items-start space-x-3 transition-shadow hover:shadow-md"
                    >
                      <Icon className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">{cred.label}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cred.desc}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 dark:border-slate-800 pt-6">
              {[
                { label: 'Years Experience', value: 9, suffix: '+' },
                { label: 'Trusted Partners', value: 100, suffix: '+' },
                { label: 'Product Categories', value: 12, suffix: '+' },
                { label: 'Global Suppliers', value: 6, suffix: '+' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="font-serif font-bold text-3xl text-primary mb-1">
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
