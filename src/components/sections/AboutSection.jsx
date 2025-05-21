import React from 'react';
import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <UserCircle className="inline-block w-10 h-10 mr-3 align-text-bottom" />
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img  
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-purple-500/50 flex-shrink-0"
              alt="Another portrait of the developer, perhaps in a different setting"
             src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b" />
            <div className="text-slate-300 text-lg leading-relaxed">
              <p className="mb-4">
                Hello! I'm [Your Name], a dedicated and results-oriented Full-Stack Developer with a knack for building elegant and efficient web solutions. My journey into the world of technology began with a fascination for how complex systems work, which quickly evolved into a passion for coding and software development.
              </p>
              <p className="mb-4">
                Over the years, I've honed my skills in various technologies, including React, Node.js, and modern database solutions. I thrive on tackling challenging problems and am always eager to learn new tools and techniques to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or diving into a good book. I believe in continuous growth, both personally and professionally, and I'm excited to bring my skills and enthusiasm to your next project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;