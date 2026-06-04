import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Certification from './components/Certification';
import CaseStudy from './components/CaseStudy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Certification />
        <CaseStudy />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
