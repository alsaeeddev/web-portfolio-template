import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="container mx-auto px-6 py-20 md:py-32 text-center min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-8"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
        <img 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-slate-700 shadow-2xl relative z-10"
          alt="Portrait of the developer"
         src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?ga=GA1.1.318242380.1730289478&semt=ais_hybrid&w=740" />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi, I'm Your Name
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        A passionate Full-Stack Developer creating modern and responsive web applications. I turn ideas into reality with code.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          onClick={scrollToContact}
        >
          Get in Touch <Mail className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;