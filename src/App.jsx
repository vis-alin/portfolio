import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates'; // ✅ Import Certificates
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // ✅ Import Footer

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certificates /> {/* ✅ Certificates component inserted */}
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* ✅ Footer component inserted */}
    </div>
  );
}

export default App;
