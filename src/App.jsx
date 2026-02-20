import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import About from './pages/About';
import Article from './pages/Article';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
