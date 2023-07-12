import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skill from './components/Skill';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skill/>
      
      <Projects/>
      <Experience/>
      
      
      <Contact/>

     
    </div>
  );
}

export default App;
