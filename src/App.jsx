import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const App = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with modern UI and robust backend.',
      image: 'E-commerce platform screenshot',
      tags: ['React', 'Node.js', 'Stripe'],
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 2,
      title: 'Project Management Tool',
      description: 'A collaborative tool for teams to manage projects and tasks efficiently.',
      image: 'Project management tool interface',
      tags: ['Vue.js', 'Firebase', 'TailwindCSS'],
      liveLink: '#',
      sourceLink: '#',
    },
    {
      id: 3,
      title: 'Personal Portfolio API',
      description: 'A RESTful API to serve data for this portfolio and other projects.',
      image: 'API documentation page',
      tags: ['Python', 'Flask', 'Supabase'],
      liveLink: '#',
      sourceLink: '#',
    },
  ];

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Framer Motion', level: 70 },
    { name: 'Supabase', level: 80 },
  ];
  
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-slate-100 font-sans antialiased">
      <Toaster />
      <Header navItems={navItems} />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;