import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Compass } from 'lucide-react';

const FeatureCard = () => {
  return (
    <div className="relative z-20 w-full px-4 max-w-4xl mx-auto -mt-16 lg:-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="bg-[#FAF7F0] rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#DED4C1] p-8 lg:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-3xl lg:text-4xl text-[#252321] leading-tight">
                Architecture &<br />
                Design
              </h3>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#DED4C1]"></div>
            
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#DED4C1]">
                  <DraftingCompass size={18} className="text-[#C7A96B]" />
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#DED4C1]">
                  <Compass size={18} className="text-[#C7A96B]" />
                </div>
              </div>
              <p className="text-sm text-[#77736C] max-w-[200px]">
                SEO-friendly<br />
                Construction Design
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
