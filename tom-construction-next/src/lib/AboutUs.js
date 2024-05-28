'use client'
import { Component } from "react";
import '../css/AboutUs.css';
import filling from './content/icons/filling.svg';
import money from './content/icons/money.svg';
import clock from './content/icons/wall-clock.svg';

function AboutUs(){

 
        return(
            <div className="AboutUsContainer" id="about">
                <div className="AboutUsTitleContainer">
                    <p className="AboutUsTitle">
                        About Us
                    </p>
                </div>
                <div className="AboutUsIconContainer">
                    <div className="fillingContainer">
                        <img className="fillingIcon" alt="filling" src={filling.src}>
                        </img>
                    </div>
                    <div className="moneyContainer">
                        <img className="moneyIcon" alt="money" src={money.src}>
                        </img>
                    </div>
                    <div className="clockContainer">
                        <img className="clockIcon" alt="clock" src={clock.src}>
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

export default AboutUs;