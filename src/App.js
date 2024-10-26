import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import mainImage from './main.png';
import Analysis from './AnalysisPage';
import About from './About';
import Navbar from './Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />


        {/* Routing to different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

