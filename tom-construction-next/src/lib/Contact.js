'use client'
import { Component } from "react";
import '../css/Contact.css';
import facebook from './content/icons/facebook.svg';
import mail from './content/icons//mail.svg';
import phone from './content/icons/phone-call.svg';

class Contact extends Component {

    render() { 
        return (
            <div className="ContactContainer" id="contact">
                <div className="ContactTitleContainer">
                    <p className="ContactTitle">
                        CONTACT
                    </p>
                </div>
                <div className="ContactTextContainer">
                    <p className="ContactText">
                        We give free estimates!
                        <br></br>
                        Give us a call, send us an email, 
                        or send us a text through Facebook!
                    </p>
                </div>
                <div className="ContactIconContainer">
                    <a  href="tel:3167946825" className="phoneContainer">
                            <img src={phone.src} className="phoneIcon"></img>
                    </a>
                    <a href="mailto: tomconcrete21@gmail.com" rel="noopener noreferrer" className="mailContainer">
                        <img src={mail.src} className="mailIcon"></img>
                    </a>
                    <a ref={this.props.title} href="https://www.facebook.com/profile.php?id=100083055346011" target="_blank" rel="noopener noreferrer" className="facebookContainer">
                        <img src={facebook.src} className="facebookIcon"></img>
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Contact;