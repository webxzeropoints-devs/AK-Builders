import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hero_slide_1.jpg',
    alt: 'Luxury Tamil Nadu Villa with Pool — AK Builders ECR Chennai',
  },
  {
    image: '/images/hero_slide_2.jpg',
    alt: 'Contemporary Courtyard Residence — AK Builders Chettinad Style',
  },
  {
    image: '/images/hero_slide_3.jpg',
    alt: 'Modern Luxury Villa Tamil Nadu — AK Builders Premium Construction',
  },
  {
    image: '/images/hero_slide_4.jpg',
    alt: 'South Indian Heritage Estate — AK Builders Traditional Architecture',
  },
];

const SLIDE_DURATION = 10000; // 10 seconds

const Hero = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [currentSlide, nextSlide]);

  // Handle drag gesture to change photos
  const handleDragEnd = (event, info) => {
    const swipeThreshold = 40;
    const swipeVelocityThreshold = 300;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocityThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocityThreshold) {
      prevSlide();
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0E] flex items-center select-none"
    >
      {/* Draggable Background Image Area */}
      <motion.div
        style={{ y }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.18}
        onDragEnd={handleDragEnd}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0 touch-pan-y"
      >
        <AnimatePresence mode="sync" custom={direction}>
          <motion.img
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            src={slide.image}
            alt={slide.alt}
            draggable="false"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </AnimatePresence>
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 pointer-events-none" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full pt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-5xl pointer-events-auto"
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

      {/* Left/Right Navigation Arrows for quick clicking */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 z-20 items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Previous photo"
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm border border-white/10 text-[#FAF7F0] flex items-center justify-center pointer-events-auto transition-all hover:scale-105"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next photo"
          className="w-12 h-12 rounded-full bg-black/30 hover:bg-black/60 backdrop-blur-sm border border-white/10 text-[#FAF7F0] flex items-center justify-center pointer-events-auto transition-all hover:scale-105"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Bottom Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="flex gap-3 items-center">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="relative h-[2px] overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: index === currentSlide ? '36px' : '12px' }}
            >
              <div
                className="absolute inset-0 transition-colors duration-300"
                style={{
                  backgroundColor: index === currentSlide ? '#C7A96B' : 'rgba(250, 247, 240, 0.3)',
                }}
              />
              {/* Animated progress bar on active indicator */}
              {index === currentSlide && (
                <motion.div
                  key={`progress-${currentSlide}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                  style={{ transformOrigin: 'left center' }}
                  className="absolute inset-y-0 left-0 w-full bg-[#FAF7F0]"
                />
              )}
            </button>
          ))}
        </div>
        <span className="text-[10px] tracking-[0.2em] text-[#FAF7F0]/40 uppercase">
          DRAG TO EXPLORE
        </span>
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
