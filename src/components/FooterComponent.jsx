import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, ChevronRight
} from 'lucide-react';
import Container from './common/Container';
import BackToTopButton from './common/BackToTopButton';

const FooterComponent = () => {
  return (
    <footer className="relative bg-slate-950 pt-20 overflow-hidden text-slate-300">
      
      {/* Parallax Background Element (subtle) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url("https://placehold.co/2000x1000/0f172a/FFFFFF?text=Texture")' }}
      ></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <a href="/" className="inline-block font-serif font-bold text-2xl tracking-tight text-white mb-2">
              M.R.S <span className="text-primary">Enterprises</span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Pakistan's trusted industrial importer and government contractor. 
              Delivering premium components from global manufacturers to your facility.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+923214243092" className="hover:text-white transition-colors">+92 3214243092</a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:mrsenterprises29@gmail.com" className="hover:text-white transition-colors">mrsenterprises29@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Top Products</h4>
            <ul className="space-y-3">
              {[
                'Electrical Components', 'Mechanical Parts', 'Lifting Equipment', 
                'Measuring Tools', 'Safety Gears', 'Control Systems'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#products" className="text-sm text-slate-400 hover:text-primary transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Suppliers', href: '#suppliers' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Request Quotation', href: '#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-white" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} M.R.S Enterprises. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by <a href="https://saadbinkhalid.vercel.app" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">Saad Bin Khalid | Full Stack Engineer</a>
          </p>
        </div>
      </Container>
      
      <BackToTopButton />
    </footer>
  );
};

export default FooterComponent;
