import React from 'react';
import Navbar from './components/navbar/Navbar.jsx'
import Intro from './components/intro/Intro.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Skills from './components/skills/Skills.jsx'
import Contact from './components/contact/Contact.jsx'
import './app.scss'
import { useState } from 'react';
import Menu from './components/menu/Menu.jsx'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
