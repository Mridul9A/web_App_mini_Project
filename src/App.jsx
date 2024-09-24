import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Community from './pages/Community';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Solutions from './pages/Solutions';
import Auth from './components/Auth';
import Registration from './components/Registration';
import Footer from './components/Footer';
import './App.css'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/signin" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Registration setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
