import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolling(true);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Hide when scrolling stops (after 1.2s of inactivity)
        timeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1200);
      } else {
        setIsScrolling(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isVisible = (isScrolling || isHovered) && typeof window !== 'undefined' && window.scrollY > 300;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-3 md:bottom-6 right-2 z-50 w-12 h-12 flex items-center justify-center
            bg-[#111111] text-white border-2 border-[#111111] rounded-xl
            shadow-[3px_3px_0_#86A789] hover:shadow-[4px_4px_0_#86A789]
            hover:-translate-y-1 active:translate-y-0 active:shadow-[1px_1px_0_#86A789]
            transition-all duration-200 cursor-pointer font-heading"
          aria-label="Scroll to top"
        >
          <svg
            viewBox="0 0 512 512"
            className="w-[22px] h-[22px] fill-current"
            aria-hidden="true"
          >
            <polygon points="256,99 512,355 453,414 256,217 59,414 0,355" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
