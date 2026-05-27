import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, Factory, Shield, Cpu, Activity, Briefcase } from 'lucide-react';
import Container from './common/Container';
import Section from './common/Section';
import Card from './common/Card';
import AnimatedHeading from './common/AnimatedHeading';

const PROJECTS = [
  {
    id: 1,
    client: 'Pakistan Atomic Energy Commission (PAEC)',
    title: 'Precision Instrumentation Supply for Power Generation',
    category: 'Government',
    featured: true,
    icon: Activity,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=PAEC+Project',
    desc: 'Supplied precision measuring instruments, control systems, and electrical components for PAEC\'s power generation facility. Project included 200+ precision instruments, automated control systems, and comprehensive technical support.',
    metrics: ['200+ Instruments', 'On-schedule Delivery', '100% Certified']
  },
  {
    id: 2,
    client: 'Fauji Cement Ltd.',
    title: 'Industrial Equipment & Components Supply',
    category: 'Private Sector',
    featured: false,
    icon: Factory,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=Cement+Plant',
    desc: 'Complete industrial equipment package including mechanical parts, lifting equipment, and safety gears supporting 24/7 cement production.'
  },
  {
    id: 3,
    client: 'Azko Nobel Pakistan',
    title: 'Specialized Chemical Processing Equipment',
    category: 'Chemicals',
    featured: false,
    icon: Shield,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=Chemicals',
    desc: 'Sourced specialized equipment for chemical manufacturing including precision measuring instruments, flow sensors, and control systems.'
  },
  {
    id: 4,
    client: 'Fauji Fresh & Freeze',
    title: 'Food Processing Equipment & Automation',
    category: 'Food',
    featured: false,
    icon: Cpu,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=Food+Processing',
    desc: 'Supplied refrigeration components, conveyor equipment, safety systems, and quality control instruments.'
  },
  {
    id: 5,
    client: 'Various Govt Organizations',
    title: 'Multi-Ministry Equipment Sourcing',
    category: 'Government',
    featured: false,
    icon: Building,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=Gov+Contract',
    desc: 'Approved government contractor supplying equipment to multiple federal and provincial organizations.'
  },
  {
    id: 6,
    client: 'Multiple Private Industries',
    title: 'Diversified Industrial Supply Chain',
    category: 'Private Sector',
    featured: false,
    icon: Briefcase,
    image: 'https://placehold.co/800x600/1e40af/FFFFFF?text=Industrial+Chain',
    desc: 'Ongoing supply contracts with 50+ private sector industries including textile mills, automotive suppliers, and engineering firms.'
  }
];

const TABS = ['All Projects', 'Government', 'Private Sector', 'Chemicals', 'Food'];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const filteredProjects = PROJECTS.filter(project => 
    activeTab === 'All Projects' || project.category === activeTab
  );

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0];
  const regularProjects = filteredProjects.filter(p => p.id !== featuredProject?.id);

  return (
    <Section id="projects" bg="muted">
      <Container>
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedHeading 
            text="Featured Projects & Success Stories" 
            className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 justify-center"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400"
          >
            M.R.S Enterprises has successfully completed projects for Pakistan's most demanding 
            organizations. From power generation facilities to manufacturing plants, we've consistently 
            delivered quality products on schedule.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured Project */}
            {featuredProject && (
              <Card className="mb-8 p-0 overflow-hidden border-2 border-primary/20 hover:border-primary/50">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto relative overflow-hidden group">
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={featuredProject.image} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Featured Case Study
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-primary font-bold mb-3">
                      <featuredProject.icon size={20} />
                      <span className="uppercase tracking-wider text-sm">{featuredProject.client}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {featuredProject.desc}
                    </p>
                    
                    {featuredProject.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-100 dark:border-slate-800">
                        {featuredProject.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{metric}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div>
                      <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-all hover:-translate-y-1 group">
                        View Full Case Study
                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Regular Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, idx) => (
                <Card key={project.id} className="p-0 overflow-hidden flex flex-col group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                      {project.client}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow mb-4">
                      {project.desc}
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-slate-800">
                      <a href="#contact" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors text-sm group/link">
                        Read Case Study 
                        <ArrowRight size={14} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </Container>
    </Section>
  );
};

export default ProjectsSection;
