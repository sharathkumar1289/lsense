import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './components/Privacy';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Saola Innovations");

  return (
    <>
      <Router>
      <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/privacy" element={<Privacy />} />
            <Route exact path="/home" element={<ScrollToTop><Home /></ScrollToTop>} />
            <Route path="/contact" element={ <ScrollToTop><Contact /></ScrollToTop>} />
            <Route path="/get-demo" element={<ScrollToTop><DemoProduct /></ScrollToTop>} /> 
          </Routes>
        
      </Router>
    </>
  );
}


export default App;
