import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPastor from './components/AboutPastor';
import About from './components/About';
import Services from './components/Services';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutPastor />
      <About />
      <Services />
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;