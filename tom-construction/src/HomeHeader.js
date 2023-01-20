import { Component } from "react";
import './css/Header.css';
import logo from './images/tom.svg';

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            menuBar: false
        }
    }

    menuBarToggle = () => {
        this.setState(prevState => ({
            menuBar: !prevState.menuBar
        }))
    }

    handleResize = () => {
        if (window.innerWidth > 620) {
            this.setState(() => ({
                menuBar: false
            }))
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }

    render() {
        return (
            <div className="HeaderContainer">
                <div className="logoContainer">
                    <img className="logoImage" alt="logo" src={logo}></img>
                </div>
                <div className="headerTabs">
                    <p>
                        <a href="/services">SERVICES</a>
                    </p>
                    <p>
                        <a href="/videos">VIDEOS</a>
                    </p>
                    <p>
                        <a href="/gallery">GALLERY</a>
                    </p>
                    <p onClick={this.props.aboutUsClick}>
                        ABOUT US
                    </p>
                    <p onClick={this.props.contactClick}>
                        CONTACT
                    </p>
                </div>
                <div className={this.state.menuBar ? "menuContainerOn" : "menuContainerOff"}>
                    <div className={this.state.menuBar ? "menuContentContainerOn" : "menuContentContainerOff"}>
                        <p onClick={() => { this.props.contactClick(); }}>
                            <a href="/services">SERVICES</a>
                        </p>
                        <p>
                            <a href="/videos">VIDEOS</a>
                        </p>
                        <p>
                            <a href="/gallery">GALLERY</a>
                        </p>
                        <p onClick={() => { this.props.aboutUsClick(); this.menuBarToggle() }}>
                            ABOUT US
                        </p>
                        <p onClick={() => { this.props.contactClick(); this.menuBarToggle() }}>
                            CONTACT
                        </p>
                    </div>
                </div>
                <div className={this.state.menuBar ? "containerOn" : "containerOff"} onClick={this.menuBarToggle}>
                    <div className={this.state.menuBar ? "change bar1" : "bar1"}></div>
                    <div className={this.state.menuBar ? "change bar2" : "bar2"}></div>
                    <div className={this.state.menuBar ? "change bar3" : "bar3"}></div>
                </div>
            </div>
        )
    }
}

export default Header;