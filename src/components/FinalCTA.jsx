import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 bg-[#F5F0E6] overflow-hidden text-center">
      {/* Decorative Elements */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "300px", opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-0 h-64 border-t border-r border-[#C7A96B] rounded-tr-[100px] pointer-events-none"
      />
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "300px", opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-1/4 right-0 h-64 border-b border-l border-[#C7A96B] rounded-bl-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
            }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-2 h-2 border border-[#C7A96B] rotate-45 opacity-50"></div>
            <p className="text-[#C7A96B] text-xs uppercase tracking-[0.2em] font-semibold">
              AK Builders Construction & Architecture
            </p>
            <div className="w-2 h-2 border border-[#C7A96B] rotate-45 opacity-50"></div>
          </motion.div>

          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#252321] mb-8 relative"
          >
            Let's Build Something<br />
            Exceptional.
            <Sparkle size={20} className="absolute -top-4 -right-8 text-[#C7A96B] opacity-40" />
          </motion.h2>

          <motion.p 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="text-[#77736C] max-w-2xl mx-auto text-base lg:text-lg mb-10 leading-relaxed"
          >
            Have a project in mind? Let's transform your vision into a thoughtfully designed and precisely built space.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="px-8 py-4 bg-[#C7A96B] text-[#252321] rounded-full font-medium hover:bg-[#b89b60] transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Explore Projects <span className="text-xl leading-none">→</span>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border border-[#252321] text-[#252321] rounded-full font-medium hover:bg-[#252321] hover:text-[#FAF7F0] transition-colors inline-flex items-center gap-2"
            >
              Start a Project <span className="text-xl leading-none">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
