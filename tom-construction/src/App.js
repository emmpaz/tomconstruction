import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Video from './Video';

const videoJsOptions = {
  autoplay: false,
  controls: false,
  sources: [{
    src: './video/video.mp4',
    type: 'video/mp4'
  }]
}
function App() {
 

   
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path='/videos' element={<Video {...videoJsOptions}/>}/>
        </Routes>
      </Router>
    );
}

export default App;
