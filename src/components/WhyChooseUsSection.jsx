import React from 'react';
import { motion } from 'framer-motion';
import { Link, ShieldCheck, TrendingDown, Truck, Users, Package, Zap, Award, Check, X } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import AnimatedHeading from './common/AnimatedHeading';

const ADVANTAGES = [
  {
    icon: Link, color: "text-blue-500", borderColor: "border-blue-500",
    title: "Direct Sourcing",
    desc: "We maintain direct relationships with premium manufacturers globally. This eliminates middlemen and ensures competitive pricing without compromising quality."
  },
  {
    icon: ShieldCheck, color: "text-green-500", borderColor: "border-green-500",
    title: "Fully Compliant",
    desc: "Officially registered (NTN, STN, Chamber) and an approved government contractor. All products come with proper documentation and certifications."
  },
  {
    icon: TrendingDown, color: "text-purple-500", borderColor: "border-purple-500",
    title: "Best Pricing",
    desc: "Direct sourcing and 9+ years of industry relationships allow us to offer competitive pricing. You don't pay for middlemen markups."
  },
  {
    icon: Truck, color: "text-orange-500", borderColor: "border-orange-500",
    title: "100% On-Time",
    desc: "Our 100% on-time delivery rate is our promise. Established logistics partnerships ensure your equipment arrives when you need it."
  },
  {
    icon: Users, color: "text-red-500", borderColor: "border-red-500",
    title: "Expert Support",
    desc: "Our team includes experienced engineers and product specialists who understand your requirements. We provide technical guidance and troubleshooting."
  },
  {
    icon: Package, color: "text-cyan-500", borderColor: "border-cyan-500",
    title: "Wide Selection",
    desc: "12+ product categories covering electrical, mechanical, safety, and more. Whether standard or specialized items, we source solutions for your needs."
  },
  {
    icon: Zap, color: "text-yellow-500", borderColor: "border-yellow-500",
    title: "Fast Response",
    desc: "Get quotations and technical information within 24 hours. Our responsive customer service team understands that in industry, time is money."
  },
  {
    icon: Award, color: "text-pink-500", borderColor: "border-pink-500",
    title: "Proven Success",
    desc: "100+ satisfied clients including government agencies (PAEC) and leading companies (Fauji, Azko Nobel). 9+ years of reliable service."
  }
];

const COMPARISON = [
  { feature: "Direct Manufacturer Access", mrs: true, comp: false },
  { feature: "Government Registration", mrs: true, comp: "Sometimes" },
  { feature: "100% On-Time Delivery", mrs: true, comp: "~85%" },
  { feature: "Technical Support Included", mrs: true, comp: "Extra Cost" },
  { feature: "Certification Documentation", mrs: "Complete", comp: "Partial" },
  { feature: "Pricing Transparency", mrs: true, comp: "Hidden Costs" },
  { feature: "24-Hour Response Time", mrs: true, comp: "48+ Hours" },
  { feature: "Product Warranty", mrs: "Full", comp: "Limited" },
  { feature: "Custom Sourcing Available", mrs: true, comp: "Limited" }
];

const WhyChooseUsSection = () => {
  return (
    <Section id="why-choose-us" bg="muted">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading 
            text="Why Choose M.R.S Enterprises?" 
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            In Pakistan's competitive industrial market, choosing the right supplier matters. 
            We stand out through our direct manufacturer relationships, regulatory compliance, 
            customer-centric approach, and proven track record.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-white dark:bg-slate-900 border-2 ${adv.borderColor} border-opacity-20 hover:border-opacity-100 rounded-xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className="flex justify-center mb-6">
                  <Icon className={`${adv.color} transform group-hover:scale-125 transition-transform duration-300`} size={48} />
                </div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-3">{adv.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {adv.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">How We Compare</h3>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="py-4 px-6 font-bold text-slate-700 dark:text-slate-300 border-b border-gray-200 dark:border-slate-700">Feature</th>
                    <th className="py-4 px-6 font-bold text-primary border-b border-gray-200 dark:border-slate-700 text-center bg-primary/5">M.R.S Enterprises</th>
                    <th className="py-4 px-6 font-bold text-slate-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-700 text-center">Typical Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-center bg-primary/5 border-l border-r border-primary/10">
                        {row.mrs === true ? (
                          <div className="flex justify-center"><Check className="text-green-500" size={20} /></div>
                        ) : (
                          <span className="text-sm font-bold text-green-600 dark:text-green-400">{row.mrs}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.comp === false ? (
                          <div className="flex justify-center"><X className="text-red-400" size={20} /></div>
                        ) : (
                          <span className="text-sm text-slate-500 dark:text-slate-400">{row.comp}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
};

export default WhyChooseUsSection;
