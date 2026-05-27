import React from 'react';
import { Zap, Cog, Ruler, Shield, Box, Droplet, Hammer, Activity, Cpu, Lightbulb, ArrowRight } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import Card from './common/Card';
import AnimatedHeading from './common/AnimatedHeading';
import elimg from "../assets/images/electrical.jpeg"
 import mechimg from "../assets/images/mechanical.jpeg"
 import liftimg from "../assets/images/lifting.jpeg"
 import safetyimg from "../assets/images/safety.jpg"
 import toolimg from "../assets/images/measuring.jpeg"
 import lubricantsimg from "../assets/images/lubricants.jpg"
 import wallimg from "../assets/images/wall-fitting.jpg"
 import rotameterimg from "../assets/images/sensors.jpg"
 import industialimg from "../assets/images/industrial.jpg"
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
const PRODUCTS = [  
  {
    icon: Zap, color: 'text-blue-500',
    title: 'Electrical Components',
    desc: 'High-quality electrical components including breakers, switches, contactors, relays, and distribution equipment from ABB, Schneider Electric, and Honeywell.',
    image: elimg
  },
  {
    icon: Cog, color: 'text-purple-500',
    title: 'Mechanical Parts',
    desc: 'Precision mechanical components including bearings, gears, shafts, couplings, seals, and fasteners for demanding industrial applications.',
    image: mechimg
  },
  {
    icon: Zap, color: 'text-green-500', rotate: true,
    title: 'Lifting Equipment',
    desc: 'Professional-grade lifting solutions including hoists, chain blocks, wire ropes, slings, and rigging equipment with safety certifications.',
    image: liftimg
  },
  {
    icon: Ruler, color: 'text-orange-500',
    title: 'Measuring Tools & Instruments',
    desc: 'Precision measuring instruments from Mitutoyo including digital calipers, micrometers, depth gauges, and measuring scales.',
    image: toolimg
  },
  {
    icon: Shield, color: 'text-red-500',
    title: 'Safety Gears & PPE',
    desc: 'Complete range of safety equipment including safety helmets, gloves, harnesses, eye protection, respirators, and industrial clothing.',
    image: safetyimg
  },
  {
    icon: Box, color: 'text-yellow-500',
    title: 'Industrial Consumables',
    desc: 'Regular-use industrial supplies including cleaning agents, maintenance products, spare parts, and operational consumables.',
    image: industialimg
  },
  {
    icon: Droplet, color: 'text-indigo-500',
    title: 'Lubricants & Industrial Oils',
    desc: 'Premium lubricants and industrial oils for machinery maintenance and protection, ensuring proper viscosity grades.',
    image: lubricantsimg
  },
  {
    icon: Hammer, color: 'text-amber-700',
    title: 'Wall Fittings & Hardware',
    desc: 'Durable wall-mounted fittings, brackets, anchors, and hardware solutions for heavy-duty industrial installations.',
    image: wallimg
  },
  {
    icon: Activity, color: 'text-cyan-500',
    title: 'Rotameters & Flow Sensors',
    desc: 'Precision flow measurement instruments including rotameters and electronic sensors for industrial processes.',
    image: rotameterimg
  }
];

const ProductsSection = () => {
  return (
    <Section id="products" bg="muted">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading 
            text="Our Industrial Product Categories" 
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            M.R.S Enterprises specializes in importing and supplying a comprehensive range of 
            industrial components and equipment. Whether you need electrical components for power 
            systems, precision mechanical parts, or safety equipment, we have you covered. Browse 
            our 12+ categories sourced from premium global manufacturers.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Card className="h-full flex flex-col group overflow-hidden p-0">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={product.image} 
                      alt={`${product.title} from M.R.S Enterprises`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg">
                      <Icon className={`${product.color} ${product.rotate ? 'rotate-45' : ''} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} size={24} />
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                      {product.desc}
                    </p>
                    
                    {/* CTA Link */}
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800">
                      <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group/link">
                        Learn More 
                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
};

export default ProductsSection;
