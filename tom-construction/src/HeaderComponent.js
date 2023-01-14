import React, { Component } from 'react';
import './css/HeaderComponent.css';
import tom from './images/tomWithWords.svg';
class HeaderComponent extends Component {

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
        if (window.innerWidth > 925) {
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
            <div className='HeaderComponentContainer'>
                <a href="/" className="logoWithWordsContainer">
                    <img className='tomWithWords' src={tom}></img>
                </a>
                <div className='HeaderComponentTabsContainer'>
                    <p style={(this.props.highlight === "services" ? { color: 'white' } : {})}>
                        <a href="/services">SERVICES</a>
                    </p>
                    <p style={(this.props.highlight === "videos" ? { color: 'white' } : {})}>
                        <a href="/videos">VIDEOS</a>
                    </p>
                    <p style={(this.props.highlight === "gallery" ? { color: 'white' } : {})}>
                        <a href="/gallery">GALLERY</a>
                    </p>
                    <p>
                        <a href="/">ABOUT US</a>
                    </p>
                    <p>
                        <a href="/">CONTACT</a>
                    </p>

                </div>
                <div className={this.state.menuBar ? "menuContainerOn" : "menuContainerOff"}>
                    <div className={this.state.menuBar ? "menuContentContainerOn" : "menuContentContainerOff"}>
                        <p style={(this.props.highlight === "services" ? { color: 'white' } : {})}>
                            <a href="/services">SERVICES</a>
                        </p>
                        <p style={(this.props.highlight === "videos" ? { color: 'white' } : {})}>
                            <a href="/videos">VIDEOS</a>
                        </p>
                        <p style={(this.props.highlight === "gallery" ? { color: 'white' } : {})}>
                            <a href="/gallery">GALLERY</a>
                        </p>
                        <p>
                            <a href="/">ABOUT US</a>
                        </p>
                        <p>
                            <a href="/">CONTACT</a>
                        </p>
                    </div>
                </div>
                <div className={this.state.menuBar ? "ComponentcontainerOn" : "ComponentcontainerOff"} onClick={this.menuBarToggle}>
                    <div className={this.state.menuBar ? "change bar1" : "bar1"}></div>
                    <div className={this.state.menuBar ? "change bar2" : "bar2"}></div>
                    <div className={this.state.menuBar ? "change bar3" : "bar3"}></div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;