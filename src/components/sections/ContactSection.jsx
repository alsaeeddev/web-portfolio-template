import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
      duration: 5000,
    });
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Mail className="inline-block w-10 h-10 mr-3 align-text-bottom" />
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleContactSubmit}
          className="max-w-xl mx-auto bg-slate-800/70 p-8 md:p-10 rounded-xl shadow-2xl border border-slate-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="your.email@example.com" />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">Message</label>
            <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-sky-500 focus:border-sky-500 transition-colors" placeholder="Your message..."></textarea>
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;