import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('ak_builders_loaded');
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('ak_builders_loaded', 'true');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#171716]"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-[#FAF7F0] tracking-[0.2em] mb-4 uppercase">
              AK Builders
            </h1>
            <p className="text-sm md:text-base font-sans text-[#C7A96B] tracking-widest uppercase mb-6 opacity-80">
              Building Visions. Creating Legacies.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="h-[1px] bg-[#C7A96B]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
