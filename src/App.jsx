
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import Skill from './components/Skill'

// function App() {

//   return (
//     <div className='text-slate-200 font-mono text-2xl w-full h-full'>
//       <Header />
//       <Home />
//       <Project />
//       <Skill />
//       <About />
//       <Footer />
//     </div>
//   )
// }

// export default App



function App() {
  return (
    <div className="text-slate-200 font-mono text-2xl w-full h-full">
      <Header />
      {/* Wrap the components with a consistent spacing */}
      <div className="space-y-5"> {/* Add consistent spacing */}
        <Home />
        <Project />
        <Skill />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
