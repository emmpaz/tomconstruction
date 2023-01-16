import './css/Services.css';
import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import ServiceBox from './ServiceBox';


import driveway from './images/serviceImages/driveway.jpg';
import patio from './images/serviceImages/patio.jpg';
import sidewalk from './images/serviceImages/sidewalk.svg';
import porch from './images/serviceImages/porch.svg';
import foundation from './images/serviceImages/foundation.jpg';
import stamped from './images/serviceImages/stamped.jpg';
import garage from './images/serviceImages/garage.jpg';
import commercialbuilding from './images/serviceImages/commercialBuilding.jpg';
import commercial from './images/serviceImages/commerical.jpg';

class Home extends Component {

  constructor(props){
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
    commercialbuilding,
    commercial
  ]
  
  servicesNames = [
    "Driveways",
    "Patios",
    "Sidewalks",
    "Porches",
    "Foundations",
    "Stamped Concrete",
    "Garage Floors",
    "Commericial Buildings",
    "Commericial Concrete"
  ]


  render(){
      return (
      <div className="ServicesContainer">
        <HeaderComponent highlight="services"/>
          <div className='ServicesBoxContainer'>
            {this.servicesNames.map((value, index) =>{
             return <ServiceBox name={value} key={index} pic={this.servicesImages[index]}/>
            } )}
          </div>
      </div>
    );
  }
}

export default Home;