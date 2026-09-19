import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArchitecturalDecor from './ArchitecturalDecor';

const About = () => {
  return (
    <section id="company" className="relative bg-[#F5F0E6] pt-12 pb-0 sm:pt-16 lg:py-32 overflow-hidden">
      <ArchitecturalDecor variant="cream" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 lg:col-start-2 flex flex-col justify-center space-y-5 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-[#C7A96B] font-sans"
            >
              <p>ABOUT</p>
              <p>AK BUILDERS</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] leading-[1.05]"
            >
              <span className="block">BUILDING WITH</span>
              <span className="block">PURPOSE.</span>
              <span className="block mt-2">CREATING WITH</span>
              <span className="block">PRECISION.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base lg:text-lg text-[#77736C] leading-relaxed max-w-lg font-sans"
            >
              AK BUILDERS delivers premium construction solutions with a focus on architectural quality, precise execution, thoughtful planning, and lasting results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-0 sm:pt-4"
            >
              <motion.div whileHover="hover">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center bg-[#DED4C1] text-[#252321] px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-[#d4c6b0]"
                >
                  Learn More
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center border border-[#252321] text-[#252321] px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-colors hover:bg-[#252321] hover:text-white"
              >
                Explore Projects →
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 lg:col-start-8 relative -mt-8 sm:mt-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
              className="absolute -left-6 top-0 w-px bg-[#C7A96B] opacity-50 hidden lg:block z-0"
            />
            
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative h-[380px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden shadow-2xl z-10 flex items-center justify-center bg-[#171716]"
              style={{ borderRadius: '2rem' }}
            >
              <motion.img
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                src="/images/company-ak-logo.png"
                alt="AK BUILDERS logo"
                className="w-full h-full object-contain p-6 sm:p-10"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
