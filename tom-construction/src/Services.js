import './css/Services.css';
import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import ServiceBox from './ServiceBox';


import driveway from './images/services-icons/icons8-driveway-96_upscaled.png';
import patio from './images/services-icons/icons8-patio-100_upscaled.png';
import sidewalk from './images/services-icons/icons8-sidewalk-100_upscaled.png';
import porch from './images/services-icons/icons8-house-60_upscaled.png';
import foundation from './images/services-icons/icons8-reinforced-concrete-100_upscaled.png';
import stamped from './images/services-icons/icons8-paving-stone-walkway-100_upscaled.png';
import garage from './images/services-icons/icons8-garage-100_upscaled.png';
import commercialbuilding from './images/services-icons/icons8-building-100_upscaled.png';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  servicesImages = [
    driveway,
    patio,
    sidewalk,
    porch,
    foundation,
    stamped,
    garage,
    commercialbuilding
  ]

  servicesNames = [
    "Driveways",
    "Patios",
    "Sidewalks",
    "Porches",
    "Foundations",
    "Stamped Concrete",
    "Garage Floors",
    "Commericial Buildings"
  ]


  render() {
    return (
      <div className="ServicesContainer">
        <HeaderComponent highlight="services" />
        <div className='services-big-text-container'>
          <p className='hundred-text'>100%</p>
          <p className='guarantee-text'>satification guaranteed</p>
        </div>
        <div className='ServicesBoxContainer'>
          {this.servicesNames.map((value, index) => {
            console.log(index)
            return <ServiceBox name={value} index={index} key={index} pic={this.servicesImages[index]} />
          })}
        </div>
        <p className='footer-text'>Contact us if a concrete service you need isn't listed</p>
      </div>
    );
  }
}

export default Home;