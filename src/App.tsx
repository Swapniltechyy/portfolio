import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import TechStack from './components/TechStack';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-primary/40">
      <Navbar />
      
      <main className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <TechStack />
        <Philosophy />
        <Services />
        <CurrentlyBuilding />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
