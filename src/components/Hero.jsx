import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0E] flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          src="/images/hero_tamilnadu_villa.jpg"
          alt="AK Builders Luxury Architecture — Contemporary Tamil Nadu Villa"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="font-serif text-[#FAF7F0] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 tracking-tight">
            Building Visions.<br />
            Creating Legacies.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <motion.div whileHover={{ y: -2, scale: 1.02 }}>
              <Link
                to="/projects"
                className="bg-[#C7A96B] text-[#252321] font-sans font-medium px-8 py-4 rounded-full transition-colors hover:bg-[#DED4C1] shadow-lg shadow-black/20 inline-flex"
              >
                Explore Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ backgroundColor: "rgba(250, 247, 240, 0.05)" }}>
              <Link
                to="/contact"
                className="group border border-[#FAF7F0]/60 text-[#FAF7F0] font-sans font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-all hover:border-[#FAF7F0]"
              >
                Start a Project
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center">
        <div className="h-[2px] w-[32px] bg-[#C7A96B]" />
        <div className="h-[2px] w-[12px] bg-[#FAF7F0]/30" />
        <div className="h-[2px] w-[12px] bg-[#FAF7F0]/30" />
        <div className="h-[2px] w-[12px] bg-[#FAF7F0]/30" />
      </div>

      {/* Architectural Decorations */}
      <div className="absolute top-24 right-16 md:right-32 z-10 opacity-40 pointer-events-none">
        <div className="w-[8px] h-[8px] border border-[#C7A96B] rotate-45" />
      </div>
      <div className="absolute bottom-32 left-12 md:left-24 z-10 opacity-40 pointer-events-none">
        <div className="w-[3px] h-[3px] bg-[#C7A96B] rounded-full" />
      </div>
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-[#C7A96B]/50 to-transparent opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[1px] h-40 bg-gradient-to-t from-[#C7A96B]/50 to-transparent opacity-40 pointer-events-none" />

    </section>
  );
};

export default Hero;
