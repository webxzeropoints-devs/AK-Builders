import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ number, category, title, image, alt }) {
  return (
    <motion.article 
      className="relative flex-shrink-0 w-full min-w-[320px] md:min-w-[380px] lg:min-w-[420px] h-[420px] md:h-[480px] rounded-2xl overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={alt || title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
        />
      </div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <div className="flex justify-between items-end">
          <div className="flex flex-col transform transition-transform duration-500 group-hover:-translate-y-1">
            <span className="text-xs uppercase tracking-wide text-[#C7A96B] mb-2 opacity-90">
              {number && `${number} / `} {category}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white">
              {title}
            </h3>
          </div>
          
          <div className="w-10 h-10 rounded-full border border-[#C7A96B]/50 bg-black/40 flex items-center justify-center backdrop-blur-sm transform transition-transform duration-500 group-hover:bg-[#C7A96B] group-hover:translate-x-1 group-hover:border-[#C7A96B]">
            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
