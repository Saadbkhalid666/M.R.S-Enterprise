import React from 'react';
import { motion } from 'framer-motion';
import { Link, ShieldCheck, Truck } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import AnimatedHeading from './common/AnimatedHeading';

const BRANDS = [
  { name: 'ABB', desc: 'Electrical & Automation' },
  { name: 'Honeywell', desc: 'Controls & Sensors' },
  { name: 'Schneider', desc: 'Power Distribution' },
  { name: 'Mitutoyo', desc: 'Precision Instruments' },
  { name: 'Rigid', desc: 'Professional Tools' },
  { name: 'Unit-T', desc: 'Industrial Components' },
  { name: 'Intelis', desc: 'Electrical Solutions' },
  { name: 'Tense', desc: 'Industrial Products' },
  { name: 'Insize', desc: 'Measuring Tools' },
  { name: 'Moteck', desc: 'Industrial Equipment' },
  { name: 'Fluke', desc: 'Testing & Diagnostic' },
  { name: 'Innerpack', desc: 'Protective Solutions' }
];

const COUNTRIES = [
  { flag: '🇮🇹', name: 'Italy', desc: 'Premium manufacturers' },
  { flag: '🇫🇷', name: 'France', desc: 'Industrial specialists' },
  { flag: '🇩🇪', name: 'Germany', desc: 'Engineering excellence' },
  { flag: '🇺🇸', name: 'USA', desc: 'Advanced technology' },
  { flag: '🇦🇪', name: 'UAE', desc: 'Middle East hub' },
  { flag: '🇨🇳', name: 'China', desc: 'Competitive manufacturing' }
];

const SuppliersSection = () => {
  return (
    <Section id="suppliers" bg="default">
      <Container>
        
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading 
            text="Trusted Global Manufacturers" 
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            At M.R.S Enterprises, we work exclusively with internationally recognized manufacturers. 
            Our sourcing relationships span across the globe, ensuring access to premium products at 
            competitive prices. Every brand is carefully selected for quality, reliability, and compliance.
          </motion.p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Text-based logo placeholder since we don't have images */}
              <div className="h-16 flex items-center justify-center mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="font-serif font-black text-2xl tracking-wider text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                  {brand.name.toUpperCase()}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">{brand.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{brand.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Global Network */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 md:p-12 mb-16 border border-gray-100 dark:border-slate-800">
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-center text-slate-900 dark:text-white mb-10">
            Global Sourcing Network
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {COUNTRIES.map((country, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center text-center p-4"
              >
                <span className="text-4xl mb-3 drop-shadow-md">{country.flag}</span>
                <span className="font-bold text-slate-900 dark:text-white">{country.name}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{country.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Link, color: "text-blue-500", title: "Direct Sourcing", desc: "Direct relationships eliminate middlemen, ensuring competitive pricing without quality compromises." },
            { icon: ShieldCheck, color: "text-green-500", title: "Quality Assured", desc: "Every product undergoes rigorous inspection. All items come with certifications and guarantees." },
            { icon: Truck, color: "text-purple-500", title: "Reliable Delivery", desc: "Established logistics partnerships ensure on-time delivery across Pakistan with proper tracking." }
          ].map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className={`p-4 rounded-full bg-slate-100 dark:bg-slate-800 mb-4`}>
                  <Icon className={benefit.color} size={32} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">{benefit.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            )
          })}
        </div>

      </Container>
    </Section>
  );
};

export default SuppliersSection;
