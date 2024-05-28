'use client'
import { Component, useEffect, useState } from "react";
import '../css/Header.css';
import logo from './content/tom.svg';
import Link from "next/link";

function Header() {

    const [menuBar, setMenuBar] = useState(false);

    const menuBarToggle = () => {
        setMenuBar(prev => !prev);
    }

    const handleResize = () => {
        if (window.innerWidth > 620) setMenuBar(false);
    }



    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, [])

    return (
        <div className="HeaderContainer">
            <div className="logoContainer">
                <img className="logoImage" alt="logo" src={logo.src}></img>
            </div>
            <div className="headerTabs">
                
                    <Link className="link" href="/services">SERVICES</Link>
                
                
                    <Link className="link" href="/videos">VIDEOS</Link>
                
                
                    <Link className="link" href="/gallery">GALLERY</Link>
                
                
                    <Link className="link" href='/#about'>ABOUT</Link>
                
                
                    <Link className="link" href='/#contact'>CONTACT</Link>
                
            </div>
            <div className={menuBar ? "menuContainerOn" : "menuContainerOff"}>
                <div className={menuBar ? "menuContentContainerOn" : "menuContentContainerOff"}>
                        <Link className="link" href="/services">SERVICES</Link>
                    
                    
                        <Link className="link" href="/videos">VIDEOS</Link>
                    
                    
                        <Link className="link" href="/gallery">GALLERY</Link>
                    
                        <Link className="link" href='/#about' onClick={() => setMenuBar(false)}>ABOUT</Link>
                    
                        <Link className="link" href='/#contact' onClick={() => setMenuBar(false)}>CONTACT</Link>
                </div>
            </div>
            <div className={menuBar ? "containerOn" : "containerOff"} onClick={menuBarToggle}>
                <div className={menuBar ? "change bar1" : "bar1"}></div>
                <div className={menuBar ? "change bar2" : "bar2"}></div>
                <div className={menuBar ? "change bar3" : "bar3"}></div>
            </div>
        </div>
    )
}

export default Header;