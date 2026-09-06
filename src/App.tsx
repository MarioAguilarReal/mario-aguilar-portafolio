import { AppProvider } from './AppContext';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </AppProvider>
  );
}
