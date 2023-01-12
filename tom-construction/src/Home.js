import './css/App.css';
import BackgroundVideo from './backgroundVideo';
import Header from './Header';
import BigText from './BigText';
import ResidentialCommerical from './ResidentialCommerical';
import AboutUs from './AboutUs';
import Contact from './Contact';
import React,{ Component } from 'react';

class Home extends Component {

  constructor(props){
    super(props);

    this.AboutUsRef = React.createRef();
    this.ContactRef = React.createRef();
  }

  AboutUsScroll = () => {
    this.AboutUsRef.current.scrollIntoView({behavior:'smooth'});
  };

  ContactScroll = () => {
    this.ContactRef.current.scrollIntoView({behavior : 'smooth'})
  }

  render(){
      return (
      <div className="App">
        <div className="HeaderGaurd">
          <BackgroundVideo/>
          <Header aboutUsClick={this.AboutUsScroll.bind(this)} contactClick={this.ContactScroll.bind(this)} />
          <BigText/>
        </div>
        <ResidentialCommerical/>
        <AboutUs title={this.AboutUsRef}/>
        <Contact title={this.ContactRef}/>
      </div>
    );
  }
}

export default Home;