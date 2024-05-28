'use client'
import { Component } from "react";
import insured from './content/licensed.png';
import '../css/ResCom.css';

class ResidentialCommerical extends Component{


    render(){
        return(
            <div className="ResComContainer">
                <div className="ResComTitleContainer">
                    <p className="ResComTitle">
                        RESIDENTIAL | COMMERCIAL
                    </p>
                </div>
                <div className="insuredContainer">
                    <img className="ResComImage" src={insured.src}></img>
                </div>
                <div className="ResComTextContainer">
                    <p className="ResComText">
                        We are licensed, bonded and 
                        insured for residential and
                        commercial work. 
                    </p>
                </div>
            </div>
        )
    }
}

export default ResidentialCommerical;