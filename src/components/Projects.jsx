import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import { company } from '../data/siteData';

const InstagramIcon = ({ size = 18, className = "" }) => (
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

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="bg-[#F5F0E6] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-[0.35fr_0.65fr] gap-12 items-start">
          
          {/* Left Info */}
          <motion.div 
            className="flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C7A96B] font-medium">
                01 / ON-SITE VIDEOS
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl text-[#252321] leading-tight"
            >
              Real Projects<br/>On-Site & Handover
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#77736C] text-base leading-relaxed max-w-md"
            >
              Watch live site walkthroughs and key handover moments across Tiruvallur and Chennai. Drag to explore videos in widescreen landscape, or use the Reel button to watch the original on Instagram.
            </motion.p>
            
            <motion.div variants={itemVariants} className="pt-2">
              <a 
                href={company.socials?.instagram || "https://www.instagram.com/ak_builders_2020"}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#252321] hover:bg-[#C7A96B] text-white hover:text-[#252321] px-7 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2.5 group shadow-sm"
              >
                <InstagramIcon size={16} />
                <span>Visit Instagram</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full min-w-0"
          >
            <ProjectCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
