'use client'
import '../css/App.css';
import BackgroundVideo from '../lib/backgroundVideo';
import ResidentialCommerical from '../lib/ResidentialCommerical';
import AboutUs from '../lib/AboutUs';
import Contact from '../lib/Contact';
import Header from '../lib/HomeHeader';
import BigText from '../lib/BigText';

function Home() {
  return (
    <div className="App">
      <div className="HeaderGaurd">
        <BackgroundVideo/>
        <Header />
        <BigText />
      </div>
      <ResidentialCommerical />
      <AboutUs />
      <Contact  />
    </div>
  );
}

export default Home;