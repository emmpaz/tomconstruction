import './css/Services.css';
import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import ServiceBox from './ServiceBox';
import temp from './video/first-frame.png';

class Home extends Component {

  constructor(props){
    super(props);
  }
  
  array = [1,2,3,4,5,6,7,8,9,10];


  render(){
      return (
      <div className="ServicesContainer">
        <HeaderComponent highlight="services"/>
          <div className='ServicesBoxContainer'>
            {this.array.map((index) =>{
             return <ServiceBox name={index} key={index} pic={temp}/>
            } )}
          </div>
      </div>
    );
  }
}

export default Home;