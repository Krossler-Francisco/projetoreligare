import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import "./views/home.css"
import Navbar from './views/components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Users from './views/Users';
import Footer from './views/components/Footer';
import Services from './views/Services';
import WhatsAppButton from './views/components/WhatsAppButton';
import NotFound from './views/components/Notfound';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light'); // Tema claro
  }, []);

  return (
    <div className='bg'>
      <Router>
        <div id='modal-closed' className='navbar-desktop' />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/psi" element={<Users />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
