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
        <div id='modal-closed' className='navbar-desktop'/>
        <Navbar />
        <Routes>
          <Route path="/projetoreligare/" element={<Home />} />
          <Route path="projetoreligare/about" element={<About />} />
          <Route path="projetoreligare/contact" element={<Contact />} />
          <Route path="projetoreligare/psi" element={<Users />} />
          <Route path="projetoreligare/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton/>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
