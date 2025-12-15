// src/pages/home/index.tsx
import { useRef } from 'react';
import Hero from './sections/hero';
import Skills from './sections/skills';
import Projects from './sections/projects';
import Footer from '@components/footer';
import Navbar from '@components/navbar';
import { portfolioData } from '@shared/constants';

// Dados do portfólio - depois você pode mover para um arquivo separado ou buscar de uma API

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar data={portfolioData.navbar}></Navbar>
      <Hero data={portfolioData.hero} onContactClick={scrollToContact} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Footer data={portfolioData.footer}></Footer>
    </>
  );
};

export default Home;