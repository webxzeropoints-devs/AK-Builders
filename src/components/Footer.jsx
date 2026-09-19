import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks, company } from '../data/siteData';

const YouTubeIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const defaultFooterLinks = footerLinks || {
    company: [
      { name: 'About Us', to: '/company' },
      { name: 'Our Projects', to: '/projects' },
      { name: 'Construction Services', to: '/services' },
      { name: 'Contact Us', to: '/contact' }
    ],
    services: [
      { name: 'Residential Construction', to: '/services' },
      { name: 'Commercial Construction', to: '/services' },
      { name: 'Architecture & Construction', to: '/services' },
      { name: 'Renovation & Remodeling', to: '/services' }
    ],
    projects: [
      { name: 'Coastal Luxury Villa', to: '/projects' },
      { name: 'Modern Courtyard Residence', to: '/projects' },
      { name: 'Commercial & Corporate Hub', to: '/projects' },
      { name: 'Contemporary Heritage Estate', to: '/projects' }
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
    { title: 'Legal & Quick Links', links: defaultFooterLinks.contact },
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
    <footer className="w-full bg-[#F5F0E6] pt-16 lg:pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#DED4C1]/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Logo & Contact Info Column */}
          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/ak-logo.png"
                alt="AK Builders logo"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[#77736C] text-sm leading-relaxed mb-6">
              Building Visions. Creating Legacies.<br />
              Premium construction across Chennai & Tiruvallur.
            </p>

            {/* Address with Google Maps link */}
            <div className="space-y-3 text-sm text-[#252321] mb-6">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-[#252321] hover:text-[#C7A96B] transition-colors group"
                title="Open in Google Maps"
              >
                <MapPin size={18} className="text-[#C7A96B] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-snug underline-offset-2 group-hover:underline">
                  204, Gundu Malli St, Poonga Nagar, Tiruvallur, Kakkalur, Tamil Nadu 602001
                </span>
              </a>

              {/* Phone Numbers */}
              <div className="flex items-center gap-2.5 text-[#252321]">
                <Phone size={16} className="text-[#C7A96B] shrink-0" />
                <div className="flex flex-wrap gap-2">
                  <a
                    href="tel:+916380224982"
                    className="hover:text-[#C7A96B] transition-colors font-medium"
                  >
                    +91 63802 24982
                  </a>
                  <span className="text-[#DED4C1]">/</span>
                  <a
                    href="tel:+919940901290"
                    className="hover:text-[#C7A96B] transition-colors font-medium"
                  >
                    +91 99409 01290
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5 text-[#252321]">
                <Mail size={16} className="text-[#C7A96B] shrink-0" />
                <a
                  href="mailto:akbuilders8989@gmail.com"
                  className="hover:text-[#C7A96B] transition-colors"
                >
                  akbuilders8989@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons: YouTube & Instagram ONLY */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@AKBuildersOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#DED4C1] bg-[#FAF7F0] flex items-center justify-center text-[#252321] hover:bg-[#C7A96B] hover:text-white hover:border-[#C7A96B] hover:-translate-y-0.5 transition-all shadow-sm"
                aria-label="AK Builders YouTube Channel"
              >
                <YouTubeIcon size={19} />
              </a>
              <a
                href="https://www.instagram.com/ak_builders_2020"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-[#DED4C1] bg-[#FAF7F0] flex items-center justify-center text-[#252321] hover:bg-[#C7A96B] hover:text-white hover:border-[#C7A96B] hover:-translate-y-0.5 transition-all shadow-sm"
                aria-label="AK Builders Instagram Profile"
              >
                <InstagramIcon size={19} />
              </a>
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col, index) => (
              <motion.div key={index} variants={itemVariants} className="flex flex-col">
                <h3 className="text-[#C7A96B] text-xs font-semibold uppercase tracking-wider mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-3.5">
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
          className="border-t border-[#DED4C1] pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-[#77736C]">
            <p>© 2026 AK Builders. All rights reserved.</p>
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


        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
