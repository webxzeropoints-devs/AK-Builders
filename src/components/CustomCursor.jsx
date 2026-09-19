import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isTouchDevice] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  ));
  const [cursorMode, setCursorMode] = useState('default');

  // Motion values for tracking pointer
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for smooth tracking
  const springConfig = { damping: 22, stiffness: 340 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (isTouchDevice) return;

    const handlePointerMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handlePointerOver = (e) => {
      // Determine what element the pointer is hovering over
      if (e.target.closest('article')) {
        setCursorMode('view');
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorMode('open');
      } else {
        setCursorMode('default');
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerover', handlePointerOver);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerover', handlePointerOver);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Render nothing on touch devices
  if (isTouchDevice) return null;

  // Variants for cursor modes (sizes and backgrounds)
  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(199, 169, 107, 0)',
    },
    view: {
      width: 68,
      height: 68,
      backgroundColor: 'rgba(199, 169, 107, 0.15)', // Slightly visible gold background
    },
    open: {
      width: 44,
      height: 44,
      backgroundColor: 'rgba(199, 169, 107, 0.15)', // Slightly visible gold background
    }
  };

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 hidden md:flex items-center justify-center pointer-events-none z-[100] rounded-full mix-blend-difference font-sans"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        border: '1px solid #C7A96B',
        willChange: 'transform'
      }}
      variants={variants}
      animate={cursorMode}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {cursorMode === 'view' && (
        <span className="text-[9px] uppercase tracking-widest text-white">
          VIEW
        </span>
      )}
      {cursorMode === 'open' && (
        <span className="text-[9px] uppercase tracking-widest text-white">
          OPEN
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
