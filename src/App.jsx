import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './views/components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Users from './views/Users';
import "./views/home.css"
import Footer from './views/components/Footer';
import Services from './views/Services';
import Layout from './Layout';


function App() {
  return (
    <div className='bg'>
      <Router>
        <div className='navbar-desktop'/>
        <Navbar />
        <Routes>
          <Route path="/projetoreligare/" element={<Home />} />
          <Route path="projetoreligare/about" element={<About />} />
          <Route path="projetoreligare/contact" element={<Contact />} />
          <Route path="projetoreligare/psi" element={<Users />} />
          <Route path="projetoreligare/services" element={<Services />} />
        </Routes>
        <Footer/>
      </Router>
      </div>
  );
}

export default App;
