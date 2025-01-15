import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/index.tsx';
import Portfolio from './components/portfolio/index.tsx';
import About from './components/about/index.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
  );
}

export default App;
