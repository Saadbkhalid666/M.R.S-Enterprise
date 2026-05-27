import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import DarkModeToggle from './common/DarkModeToggle';
import Container from './common/Container';

const SERVICES = [
  'Electrical Components', 'Mechanical Parts', 'Lifting Equipment',
  'Measuring Tools', 'Safety Gears', 'Industrial Consumables',
  'Lubricants & Oils', 'Wall Fittings', 'Rotameters & Sensors',
  'Control Systems', 'Testing Equipment', 'Custom Solutions'
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <a
            href="/"
            className={`font-serif font-bold text-2xl tracking-tight ${
              isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}
          >
            M.R.S <span className="text-primary">Enterprises</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
          
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`flex items-center font-sans font-medium text-[15px] transition-colors ${
                isScrolled ? 'text-slate-700 dark:text-slate-200 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-64 pt-4"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-gray-100 dark:border-slate-800 p-2 grid grid-cols-1 gap-1">
                    {SERVICES.map((service, idx) => (
                      <a
                        key={idx}
                        href="#products"
                        className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary rounded-md transition-colors"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="#projects" isScrolled={isScrolled}>Projects</NavLink>
          <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${
              isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-40 flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 text-lg font-medium">
              <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              
              <div className="flex flex-col space-y-3">
                <div className="text-slate-900 dark:text-white pb-2 border-b border-gray-200 dark:border-slate-800">
                  Services
                </div>
                <div className="pl-4 flex flex-col space-y-3 text-base">
                  {SERVICES.slice(0, 5).map((service, idx) => (
                    <MobileNavLink key={idx} href="#products" onClick={() => setMobileMenuOpen(false)}>
                      {service}
                    </MobileNavLink>
                  ))}
                  <MobileNavLink href="#products" className="text-primary" onClick={() => setMobileMenuOpen(false)}>
                    View All Services &rarr;
                  </MobileNavLink>
                </div>
              </div>

              <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`relative group font-sans font-medium text-[15px] transition-colors ${
      isScrolled ? 'text-slate-700 dark:text-slate-200 hover:text-primary' : 'text-white/90 hover:text-white'
    }`}
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileNavLink = ({ href, children, onClick, className }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-slate-700 dark:text-slate-300 hover:text-primary transition-colors ${className || ''}`}
  >
    {children}
  </a>
);

export default Navbar;
