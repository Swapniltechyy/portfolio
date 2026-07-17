import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f5f2eb]/90 backdrop-blur-md border-b-[3px] border-[#111111]' : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-11 md:h-12">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-base md:text-lg font-extrabold font-heading tracking-tight text-[#111111]">
              SWAPNIL.
              {/* &lt;/&gt; */}
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-5 mr-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#2D2D2D] hover:text-[#111111] font-semibold text-xs tracking-wide uppercase transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#111111] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="retro-btn bg-[#86A789] text-[#111111] px-3 py-1 text-xs font-bold tracking-wide uppercase hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#111111] shadow-[2px_2px_0_#111111]"
            >
              Let's Connect
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#111111] focus:outline-none p-1 border-2 border-[#111111] rounded-md shadow-[2px_2px_0_#111111] bg-white"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f5f2eb] border-b-[3px] border-[#111111] overflow-hidden"
          >
            <div className="px-3 pt-2 pb-4 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-bold text-[#111111] border border-transparent hover:border-[#111111] hover:bg-white rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block px-3 py-2 text-sm font-bold text-center text-[#111111] border-2 border-[#111111] bg-[#86A789] shadow-[3px_3px_0_#111111] rounded-lg"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
