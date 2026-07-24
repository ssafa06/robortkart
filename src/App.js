import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SpareParts from './headersection/SpareParts';
import Services from './headersection/Services';
import Logistics from './headersection/logistics';
import Robots from './headersection/robots';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robots-marketplace" element={<Robots />} />
            <Route path="/spare-parts" element={<SpareParts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/robots" element={<Robots />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;