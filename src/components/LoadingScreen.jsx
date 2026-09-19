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
    }, 2200);

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
            initial={{ scale: 0.92, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center px-6 text-center"
          >
            <motion.img
              src="/images/ak-logo.png"
              alt="AK BUILDERS"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain mb-6 drop-shadow-[0_10px_30px_rgba(199,169,107,0.25)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xs sm:text-sm font-sans text-[#C7A96B] tracking-[0.28em] uppercase mb-6"
            >
              Building Visions. Creating Legacies.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 1.1, delay: 0.4, ease: "easeInOut" }}
              className="h-[1.5px] bg-gradient-to-r from-transparent via-[#C7A96B] to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
