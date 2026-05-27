import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  User, Building, Mail, Phone, MapPin, 
  MessageCircle, Clock, Globe, CheckCircle, 
  Ruler, Zap, Shield
} from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import Button from './common/Button';
import AnimatedHeading from './common/AnimatedHeading';

const PRODUCT_CATEGORIES = [
  'Electrical Components', 'Mechanical Parts', 'Lifting Equipment',
  'Measuring Tools', 'Safety Gears', 'Industrial Consumables',
  'Lubricants & Oils', 'Wall Fittings', 'Rotameters & Sensors',
  'Control Systems', 'Testing Equipment', 'Custom/Other'
];

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Honeypot check
    if (data.website) return;
    
    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleQuickQuote = (category) => {
    setValue('category', category);
    document.getElementById('quotation-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="contact" bg="muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Quotation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 p-8 md:p-10 relative overflow-hidden"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-0 left-0 w-full p-4 bg-green-500 text-white flex items-center justify-center space-x-2 z-20"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">Thank you! We've received your request. Our team will contact you within 24 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                Request a Quotation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Fill out your requirements and get pricing within 24 hours.
              </p>
            </div>

            <form id="quotation-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field (hidden from users) */}
              <input type="text" {...register("website")} className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                      {...register("name", { required: true, minLength: 3 })}
                    />
                  </div>
                  {errors.name && <span className="text-xs text-red-500 absolute -bottom-4 left-0">Name is required (min 3 chars).</span>}
                </div>

                {/* Company Name */}
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Your company"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                      {...register("company", { required: true })}
                    />
                  </div>
                  {errors.company && <span className="text-xs text-red-500 absolute -bottom-4 left-0">Company is required.</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="your@company.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                  </div>
                  {errors.email && <span className="text-xs text-red-500 absolute -bottom-4 left-0">Valid email is required.</span>}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="+92 XXX XXXXXXX"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all"
                      {...register("phone")}
                    />
                  </div>
                </div>
              </div>

              {/* Product Category & Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Product Category <span className="text-red-500">*</span></label>
                  <select 
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.category ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all appearance-none`}
                    {...register("category", { required: true })}
                  >
                    <option value="">Select a category...</option>
                    {PRODUCT_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                  {errors.category && <span className="text-xs text-red-500 absolute -bottom-4 left-0">Category is required.</span>}
                </div>
                
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Quantity <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    min="1"
                    placeholder="E.g., 10"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.quantity ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all`}
                    {...register("quantity", { required: true, min: 1 })}
                  />
                </div>
              </div>

              {/* Specific Product */}
              <div className="space-y-2 relative">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Specific Product Name/Specs <span className="text-red-500">*</span></label>
                <textarea 
                  rows="2"
                  placeholder="E.g., 'Mitutoyo Digital Calipers 0-150mm' or 'Schneider Electric Contactor 32A'"
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.product ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-slate-700 focus:ring-primary'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none`}
                  {...register("product", { required: true, minLength: 5 })}
                ></textarea>
                {errors.product && <span className="text-xs text-red-500 absolute -bottom-4 left-0">Please provide product specifics.</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Estimated Value (Optional)</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all appearance-none"
                    {...register("budget")}
                  >
                    <option value="">Not disclosed</option>
                    <option value="50K - 1 Lac PKR">50K - 1 Lac PKR</option>
                    <option value="1 Lac - 5 Lac PKR">1 Lac - 5 Lac PKR</option>
                    <option value="5 Lac - 10 Lac PKR">5 Lac - 10 Lac PKR</option>
                    <option value="10 Lac - 50 Lac PKR">10 Lac - 50 Lac PKR</option>
                    <option value="50 Lac - 1 Crore PKR">50 Lac - 1 Crore PKR</option>
                    <option value="1+ Crore PKR">1+ Crore PKR</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Delivery Timeline</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all appearance-none"
                    {...register("timeline")}
                  >
                    <option value="Not sure yet">Not sure yet</option>
                    <option value="ASAP (within 7 days)">ASAP (within 7 days)</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-3 months">1-3 months</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Project Details/Additional Notes</label>
                <textarea 
                  rows="3"
                  placeholder="Tell us about your project, application, and any specific requirements..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-slate-700 focus:ring-primary bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 transition-all resize-none"
                  {...register("details")}
                ></textarea>
              </div>

              {/* Terms and Preferred Contact */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3">
                  <input 
                    type="checkbox" 
                    id="terms"
                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                    {...register("terms", { required: true })}
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600 dark:text-slate-400">
                    I agree to M.R.S Enterprises Privacy Policy and Terms of Service <span className="text-red-500">*</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Preferred Contact Method</label>
                  <div className="flex space-x-6">
                    {['Email', 'WhatsApp', 'Phone Call'].map(method => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input 
                          type="radio" 
                          value={method} 
                          defaultChecked={method === 'Email'}
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                          {...register("contactMethod")}
                        />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4" isLoading={isSubmitting}>
                {isSubmitting ? 'Sending Request...' : 'Request Quotation'}
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Address</h5>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      M.R.S Enterprises, Lahore, Punjab, Pakistan
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Email</h5>
                    <a href="mailto:contact@mrsenterprises.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      contact@mrsenterprises.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Phone</h5>
                    <a href="tel:+923000000000" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +92 300 0000000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">WhatsApp</h5>
                    <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                      Send message on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-orange-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Business Hours</h5>
                    <p className="text-slate-600 dark:text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM (PST)<br/>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="text-purple-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Timezone</h5>
                    <p className="text-slate-600 dark:text-slate-400">Pakistan Standard Time (PST) - UTC+5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110 font-bold">
                  in
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-110 font-bold">
                  f
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-800 rounded-full text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all shadow-sm hover:shadow-md hover:scale-110 font-bold">
                  X
                </a>
              </div>
            </div>

            {/* Quick Quote Cards */}
            <div>
              <h5 className="font-bold text-slate-900 dark:text-white mb-4">Quick Quote Templates</h5>
              <div className="space-y-3">
                {[
                  { icon: Ruler, title: 'Mitutoyo Measuring Tools', desc: 'Precision instruments', cat: 'Measuring Tools' },
                  { icon: Zap, title: 'Electrical Components', desc: 'Breakers, switches, contactors', cat: 'Electrical Components' },
                  { icon: Shield, title: 'Safety Equipment', desc: 'Helmets, gloves, harnesses', cat: 'Safety Gears' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-xl shadow-sm cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => handleQuickQuote(item.cat)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-slate-50 dark:bg-slate-900 rounded-lg">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h6 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h6>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-primary hover:text-secondary px-3 py-1.5 bg-primary/5 rounded-md">
                        Get Quote
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </div>

          </motion.div>

        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
