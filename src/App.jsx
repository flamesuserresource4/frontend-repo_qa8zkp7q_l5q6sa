import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#0A0A12]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-white/60">
          <span>© {new Date().getFullYear()} Senior Dev — All rights reserved.</span>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
