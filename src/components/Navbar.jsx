import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/siteData';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHomePage ? 'rgba(17, 17, 15, 0)' : 'rgba(37, 35, 33, 1)',
          borderBottom: isHomePage
            ? '1px solid rgba(255,255,255,0)'
            : '1px solid rgba(245, 240, 230, 0.15)',
          backdropFilter: isHomePage ? 'blur(0px)' : 'blur(10px)',
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 w-full text-[#F5F0E6]"
      >
        <div
          className={`max-w-[1600px] mx-auto ${
            isHomePage ? 'px-6 md:px-12 pt-6 pb-5' : 'px-6 md:px-12 py-4'
          }`}
        >
          <div className="flex items-center justify-between gap-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center"
              aria-label="AK BUILDERS home"
            >
              <img
                src="/AKBuilders.png"
                alt="AK BUILDERS logo"
                className="h-16 w-auto object-contain md:h-20"
              />
            </Link>

            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center justify-center gap-10 lg:gap-14">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="text-[0.7rem] uppercase tracking-[0.22em] font-medium text-[#F5F0E6] hover:text-[#C7A96B] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Top Right CTA */}
            <div className="hidden md:flex items-center justify-end">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#C7A96B] hover:bg-[#FAF7F0] text-[#171716] text-[0.68rem] tracking-[0.18em] font-semibold uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-[#C7A96B]/20 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Get a Free Quote</span>
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <Link
                to="/quote"
                className="bg-[#C7A96B] text-[#171716] text-[0.65rem] tracking-wider uppercase font-semibold px-3 py-1.5 rounded-full shadow-sm"
              >
                Get Quote
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-[#F5F0E6] hover:text-[#C7A96B] transition-colors"
                aria-label="Open menu"
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-[#F5F0E6] flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-[#252321] hover:text-[#C7A96B] transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-[#252321] uppercase tracking-[0.2em] font-medium hover:text-[#C7A96B] transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navItems.length}
                variants={linkVariants}
                className="pt-4"
              >
                <Link
                  to="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#C7A96B] hover:bg-[#171716] hover:text-[#FAF7F0] text-[#171716] text-xs tracking-[0.2em] font-semibold uppercase px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-md transition-colors"
                >
                  <span>Get a Free Quote</span>
                  <span>→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
