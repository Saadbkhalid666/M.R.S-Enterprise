import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <Section id="contact" bg="muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          

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
                    <a href="mailto:mrsenterprises29@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      mrsenterprises29@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">Phone</h5>
                    <a href="tel:+9303214243092" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +93 0321 4243092
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">WhatsApp</h5>
                    <a href="https://wa.me/923214243092" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
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

            
            

          </motion.div>

        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;
