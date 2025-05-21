import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#00A0DC' }} className="text-slate-400 hover:text-sky-400 transition-colors">
            <Github size={28} />
          </motion.a>
          <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#0A66C2' }} className="text-slate-400 hover:text-sky-400 transition-colors">
            <Linkedin size={28} />
          </motion.a>
          <motion.a href="mailto:youremail@example.com" whileHover={{ scale: 1.2, color: '#EA4335' }} className="text-slate-400 hover:text-sky-400 transition-colors">
            <Mail size={28} />
          </motion.a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-xs mt-1">Built with React, TailwindCSS, and Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;