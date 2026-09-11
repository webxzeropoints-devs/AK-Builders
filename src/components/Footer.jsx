import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../data/siteData';

const Footer = () => {
  const defaultFooterLinks = footerLinks || {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Press', href: '#' }
    ],
    services: [
      { name: 'Architecture', href: '#' },
      { name: 'Construction', href: '#' },
      { name: 'Interior Design', href: '#' }
    ],
    projects: [
      { name: 'Residential', href: '#' },
      { name: 'Commercial', href: '#' },
      { name: 'Renovations', href: '#' }
    ],
    contact: [
      { name: 'Request a Free Quote', to: '/quote' },
      { name: 'Contact Us', to: '/contact' },
      { name: 'Privacy Policy', to: '/privacy' },
      { name: 'Terms of Service', to: '/terms' }
    ]
  };

  const columns = [
    { title: 'Company', links: defaultFooterLinks.company },
    { title: 'Services', links: defaultFooterLinks.services },
    { title: 'Projects', links: defaultFooterLinks.projects },
    { title: 'Legal & Contact', links: defaultFooterLinks.contact },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="w-full bg-[#F5F0E6] pt-16 lg:pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Logo & Tagline Column */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4">
            <img
              src="/AKBuildersEnhanced.png"
              alt="AKBuildersEnhanced logo"
              className="h-28 w-auto object-contain mb-4"
            />
            <p className="text-[#252321] text-2xl font-medium tracking-[0.08em] uppercase">
              AK BUILDERS
            </p>
            <p className="text-[#77736C] text-sm leading-relaxed whitespace-pre-line">
              Building Visions.{"\n"}
              Creating Legacies.
            </p>
          </motion.div>

          {/* Links Columns */}
          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col">
                <h3 className="text-[#C7A96B] text-xs font-semibold uppercase tracking-wider mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links && col.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        to={link.to || '/'}
                        className="text-[#77736C] text-sm hover:text-[#252321] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#DED4C1] pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-[#77736C]">
            <p>© 2026 AK Builders</p>
            <span className="hidden sm:inline text-[#DED4C1]">•</span>
            <div className="flex items-center gap-4 text-xs tracking-wider uppercase">
              <Link to="/privacy" className="hover:text-[#252321] transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-[#252321] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-[#DED4C1] bg-[#F5F0E6] flex items-center justify-center text-[#252321] hover:bg-[#FAF7F0] hover:-translate-y-0.5 transition-transform">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#DED4C1] bg-[#F5F0E6] flex items-center justify-center text-[#252321] hover:bg-[#FAF7F0] hover:-translate-y-0.5 transition-transform">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[#DED4C1] bg-[#F5F0E6] flex items-center justify-center text-[#252321] hover:bg-[#FAF7F0] hover:-translate-y-0.5 transition-transform">
              <Send size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
