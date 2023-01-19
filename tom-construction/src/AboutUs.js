import { Component } from "react";
import './css/AboutUs.css';
import filling from './images/icons/filling.svg';
import money from './images/icons/money.svg';
import clock from './images/icons/wall-clock.svg';

class AboutUs extends Component{

    render(){
        return(
            <div className="AboutUsContainer">
                <div className="AboutUsTitleContainer">
                    <p ref={this.props.title} className="AboutUsTitle">
                        About Us
                    </p>
                </div>
                <div className="AboutUsIconContainer">
                    <div className="fillingContainer">
                        <img className="fillingIcon" alt="filling" src={filling}>
                        </img>
                    </div>
                    <div className="moneyContainer">
                        <img className="moneyIcon" alt="money" src={money}>
                        </img>
                    </div>
                    <div className="clockContainer">
                        <img className="clockIcon" alt="clock" src={clock}>
                        </img>
                    </div>
                </div>
                <div className="AboutUsTextContainer">
                    <p className="AboutUsText">
                    We are a small local concrete company that has 
                    been in business since 2015. Our goal is to build the highest quality structure for a low cost and in the shortest amount of time.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutUs;