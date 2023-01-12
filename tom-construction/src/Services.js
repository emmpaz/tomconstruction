import './css/Services.css';
import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';

class Home extends Component {

  constructor(props){
    super(props);
  }


  render(){
      return (
      <div className="ServicesContainer">
        <HeaderComponent/>
        <h2>SERVICES</h2>

      </div>
    );
  }
}

export default Home;