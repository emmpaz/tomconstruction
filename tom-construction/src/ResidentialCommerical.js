import { Component } from "react";
import insured from './images/licensed.png';
import './css/ResCom.css';

class ResidentialCommerical extends Component{


    render(){
        return(
            <div className="ResComContainer">
                <div className="ResComTitleContainer">
                    <p>
                        RESIDENTIAL | COMMERCIAL
                    </p>
                </div>
                <div className="insuredContainer">
                    <img className="ResComImage" src={insured}></img>
                </div>
                <div className="ResComTextContainer">
                    <p>
                        We are licensed, bonded and insured for residential and 
                        commercial work. 
                    </p>
                </div>
            </div>
        )
    }
}

export default ResidentialCommerical;