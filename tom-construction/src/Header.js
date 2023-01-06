import { Component } from "react";
import './css/Header.css';
import logo from './images/tom.svg';

class Header extends Component{

    render(){
        return(
            <div className="HeaderContainer">
                <div className="logoContainer">
                    <img className="logoImage" src={logo}></img>
                </div>
                <div className="headerTabs">
                    <p>
                        SERVICES
                    </p>
                    <p>
                        VIDEOS
                    </p>
                    <p>
                        GALLERY
                    </p>
                    <p>
                        ABOUT US
                    </p>
                    <p>
                        CONTACT
                    </p>
                </div>
            </div>
        )
    }
}

export default Header;