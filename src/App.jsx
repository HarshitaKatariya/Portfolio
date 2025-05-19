import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence>
      <div className="text-slate-200 font-mono text-2xl w-full h-full">
        <Header />
        {/* Wrap the components with a consistent spacing */}
        <div className="space-y-16"> {/* Increased spacing between sections */}
          <Home />
          <Project />
          <Skill />
          <About />
        </div>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;