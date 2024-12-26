import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { SideBar } from './components/SideBar';
import { Resume } from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <main>
          <SideBar />
          <div className="main-content">
            <NavBar />
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              {/* <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} /> */}
              <Route path="/" element={<About />} /> 
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
