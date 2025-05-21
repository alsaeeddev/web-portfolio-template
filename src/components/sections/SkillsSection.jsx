import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code } from 'lucide-react';

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Lightbulb className="inline-block w-10 h-10 mr-3 align-text-bottom" />
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-slate-800/70 p-6 rounded-lg shadow-xl text-center flex flex-col items-center border border-slate-700 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3 text-purple-400"><Code className="w-10 h-10 text-sky-400" /></div>
              <h3 className="text-xl font-semibold mb-2 text-slate-200">{skill.name}</h3>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-sky-500 to-purple-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;