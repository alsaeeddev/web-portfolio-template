import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
          whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(168,85,247)" }}
        >
          MyPortfolio
        </motion.a>
        
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
              className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-300 hover:text-sky-400 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md shadow-lg py-4"
          >
            <ul className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.05 }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                    className="text-slate-300 hover:text-sky-400 transition-colors duration-300 text-lg py-2"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;