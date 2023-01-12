import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Video from './Video';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path='/videos' element={<Video/>}/>
        </Routes>
      </Router>
    );
}

export default App;
