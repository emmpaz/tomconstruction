import { Component } from "react";
import pic from './images/tom-bigtext.svg';
import './css/BigText.css';

class BigText extends Component{

    render(){
        return(
            <div className="BigTextContainer">
                <img className="BigTextImage" src={pic}></img>
            </div>
        )
    }
}

export default BigText;