import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './css/HeaderComponent.css';
import tom from './images/tomWithWords.svg';
function HeaderComponent(props) {

    const [menuBar, setMenuBar] = useState(false);
    const navigate = useNavigate();

    const menuBarToggle = () => {
        setMenuBar(!menuBar);
    }

    const handleResize = () => {
        if (window.innerWidth > 925) {
            setMenuBar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);
        

    const handleSendAbout = () => {
        navigate("/", {
            state : {
                sent : "about"
            }
        });
    }

    const handleSendContact = () => {
        navigate("/", {
            state : {
                sent : "contact"
            }
        });
    }


        return (
            <div className='HeaderComponentContainer'>
                <a href="/" className="logoWithWordsContainer">
                    <img className='tomWithWords' src={tom}></img>
                </a>
                <div className='HeaderComponentTabsContainer'>
                    <p style={(props.highlight === "services" ? { color: 'white' } : {})}>
                        <a href="/services">SERVICES</a>
                    </p>
                    <p style={(props.highlight === "videos" ? { color: 'white' } : {})}>
                        <a href="/videos">VIDEOS</a>
                    </p>
                    <p style={(props.highlight === "gallery" ? { color: 'white' } : {})}>
                        <a href="/gallery">GALLERY</a>
                    </p>
                    <p>
                        <a onClick={handleSendAbout}>ABOUT US</a>
                    </p>
                    <p>
                        <a onClick={handleSendContact}>CONTACT</a>
                    </p>

                </div>
                <div className={menuBar ? "menuContainerOn" : "menuContainerOff"}>
                    <div className={menuBar ? "menuContentContainerOn" : "menuContentContainerOff"}>
                        <p style={(props.highlight === "services" ? { color: 'white' } : {})}>
                            <a href="/services">SERVICES</a>
                        </p>
                        <p style={(props.highlight === "videos" ? { color: 'white' } : {})}>
                            <a href="/videos">VIDEOS</a>
                        </p>
                        <p style={(props.highlight === "gallery" ? { color: 'white' } : {})}>
                            <a href="/gallery">GALLERY</a>
                        </p>
                        <p>
                            <a onClick={handleSendAbout}>ABOUT US</a>
                        </p>
                        <p>
                            <a onClick={handleSendContact}>CONTACT</a>
                        </p>
                    </div>
                </div>
                <div className={menuBar ? "ComponentcontainerOn" : "ComponentcontainerOff"} onClick={menuBarToggle}>
                    <div className={menuBar ? "change bar1" : "bar1"}></div>
                    <div className={menuBar ? "change bar2" : "bar2"}></div>
                    <div className={menuBar ? "change bar3" : "bar3"}></div>
                </div>
            </div>
        );

}

export default HeaderComponent;