import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ value, suffix = "", duration = 1.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  const statItems = [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Projects Completed", value: 100, suffix: "+" },
    { label: "Happy Clients", value: 50, suffix: "+" },
    { label: "Commitment", value: 100, suffix: "%" }
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#171716] overflow-hidden">
      {/* Architectural grid decoration */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Subtle gold curves & elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border border-[#C7A96B]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 border border-[#C7A96B]/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#C7A96B]/20 rotate-45" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 border border-[#C7A96B]/20 rotate-45" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#C7A96B] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Project Statistics
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FAF7F0] mb-16 lg:mb-24">
            Project Statistics
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {statItems.map((item, index) => (
            <div 
              key={index}
              className={`relative flex flex-col items-center justify-center ${
                index !== statItems.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#C7A96B] mb-4 tracking-tight">
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#FAF7F0]/80">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
