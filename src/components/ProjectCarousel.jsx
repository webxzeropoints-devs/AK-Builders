import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/siteData';

export default function ProjectCarousel() {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ right: 0, left: 0 });
  const x = useMotionValue(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && carouselRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const carouselWidth = carouselRef.current.scrollWidth;
        setDragConstraints({ right: 0, left: -(carouselWidth - containerWidth) });
      }
    };
    
    updateConstraints();
    // Use timeout to wait for images to load ideally, or rely on resize
    setTimeout(updateConstraints, 100);
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const handleNext = () => {
    const cardWidth = containerRef.current ? containerRef.current.offsetWidth * 0.7 : 380;
    const maxScroll = dragConstraints.left;
    const currentX = x.get();
    const nextX = Math.max(currentX - cardWidth, maxScroll);
    
    animate(x, nextX, { type: "spring", stiffness: 300, damping: 30 });
  };

  const handlePrev = () => {
    const cardWidth = containerRef.current ? containerRef.current.offsetWidth * 0.7 : 380;
    const currentX = x.get();
    const prevX = Math.min(currentX + cardWidth, 0);
    
    animate(x, prevX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <div className="relative w-full flex flex-col" ref={containerRef}>
      {/* Navigation Controls */}
      <div className="flex justify-end gap-3 mb-6">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-[#DED4C1] flex items-center justify-center text-[#252321] hover:bg-[#DED4C1] transition-colors"
          aria-label="Previous projects"
        >
          <ChevronLeft strokeWidth={1.5} className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-[#DED4C1] flex items-center justify-center text-[#252321] hover:bg-[#DED4C1] transition-colors"
          aria-label="Next projects"
        >
          <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing">
        <motion.div
          ref={carouselRef}
          style={{ x }}
          drag="x"
          dragConstraints={dragConstraints}
          className="flex gap-6 w-max"
        >
          {projects?.map((project, index) => (
            <ProjectCard 
              key={project.id || index}
              number={`0${index + 1}`}
              category={project.category || "RESIDENTIAL"}
              title={project.title || "Project Title"}
              image={project.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"}
              alt={project.title}
            />
          ))}
        </motion.div>
      </div>

      {/* Drag Indicator */}
      <div className="mt-8 flex items-center gap-2 text-[#77736C]">
        <span className="text-xs uppercase tracking-wide">DRAG</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </div>
    </div>
  );
}
