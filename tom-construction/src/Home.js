import './css/App.css';
import BackgroundVideo from './backgroundVideo';
import Header from './Header';
import BigText from './BigText';
import ResidentialCommerical from './ResidentialCommerical';
import AboutUs from './AboutUs';
import Contact from './Contact';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';


function Home(props) {

  const location = useLocation();
  const AboutUsRef = useRef(null);
  const ContactRef = useRef(null);

  const AboutUsScroll = () => {
    AboutUsRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  const ContactScroll = () => {
    ContactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (location.state) {
      const { sent } = location.state;
      if (sent === "about") {
        setTimeout(() => {
          AboutUsScroll();
        }, 200)
      }
      else if (sent === "contact") {
        setTimeout(() => {
          ContactScroll();
        }, 200)
      }
      window.history.replaceState({}, document.title);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <div className="HeaderGaurd">
        <BackgroundVideo />
        <Header aboutUsClick={AboutUsScroll.bind(this)} contactClick={ContactScroll.bind(this)} />
        <BigText />
      </div>
      <ResidentialCommerical />
      <AboutUs title={AboutUsRef} />
      <Contact title={ContactRef} />
    </div>
  );
}

export default Home;