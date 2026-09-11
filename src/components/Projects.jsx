import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

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
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 items-start">
          
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
                01 / PROJECTS
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl text-[#252321] leading-tight"
            >
              Our Luxury<br/>Construction Projects
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#77736C] text-base leading-relaxed max-w-md"
            >
              Explore selected residential and commercial construction projects designed with architectural precision and attention to detail.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <button className="bg-[#FAF7F0] hover:bg-[#DED4C1] text-[#252321] px-8 py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 group">
                Explore Projects
                <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <ProjectCarousel />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
