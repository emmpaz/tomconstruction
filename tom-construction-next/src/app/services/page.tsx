'use server'
import '../../css/Services.css';
import React, { Component } from 'react';
import HeaderComponent from '../../lib/HeaderComponent';
import ServiceBox from '../../lib/ServiceBox';


import driveway from '../../lib/content/services-icons/icons8-driveway-96_upscaled.png';
import patio from '../../lib/content/services-icons/icons8-patio-100_upscaled.png';
import sidewalk from '../../lib/content/services-icons/icons8-sidewalk-100_upscaled.png';
import porch from '../../lib/content/services-icons/icons8-house-60_upscaled.png';
import foundation from '../../lib/content/services-icons/icons8-reinforced-concrete-100_upscaled.png';
import stamped from '../../lib/content/services-icons/icons8-paving-stone-walkway-100_upscaled.png';
import garage from '../../lib/content/services-icons/icons8-garage-100_upscaled.png';
import commercialbuilding from '../../lib/content/services-icons/icons8-building-100_upscaled.png';

function Page(){

  const servicesImages = [
    driveway,
    patio,
    sidewalk,
    porch,
    foundation,
    stamped,
    garage,
    commercialbuilding
  ]

  const servicesNames = [
    "Driveways",
    "Patios",
    "Sidewalks",
    "Porches",
    "Foundations",
    "Stamped Concrete",
    "Garage Floors",
    "Commericial Buildings"
  ]

    return (
      <div className="ServicesContainer">
        <HeaderComponent/>
        <div className='services-big-text-container'>
          <p className='hundred-text'>100%</p>
          <p className='guarantee-text'>satification guaranteed</p>
        </div>
        <div className='ServicesBoxContainer'>
          {servicesNames.map((value: string, index : number) => {
            return <ServiceBox name={value} index={index} key={index} pic={servicesImages[index]} />
          })}
        </div>
        <p className='footer-text'>{`Contact us if a concrete service you need isn't listed`}</p>
      </div>
    );
}

export default Page;