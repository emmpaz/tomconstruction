'use client'
import React, { useEffect, useState } from 'react';
import '../css/HeaderComponent.css';
import '../css/Header.css';
import tom from './content/tomWithWords.svg';
import Link from 'next/link';

function HeaderComponent() {

    const [menuBar, setMenuBar] = useState(false);

    const menuBarToggle = () => {
        setMenuBar(!menuBar);
    }

    const handleResize = () => {
        if (window.innerWidth > 925) {
            setMenuBar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    }, []);

    return (
        <div className='HeaderComponentContainer'>
            <a href="/" className="logoWithWordsContainer">
                <img className='tomWithWords' alt="tom" src={tom.src}></img>
            </a>
            <div className='HeaderComponentTabsContainer'>

                <Link className='link' href="/services">SERVICES</Link>


                <Link className='link' href="/videos">VIDEOS</Link>


                <Link className='link' href="/gallery">GALLERY</Link>


                <Link className='link' href={'/#about'}>ABOUT US</Link>


                <Link className='link' href={'/#contact'}>CONTACT</Link>


            </div>
            <div className={menuBar ? "menuContainerOn" : "menuContainerOff"}>
                <div className={menuBar ? "menuContentContainerOn" : "menuContentContainerOff"}>

                    <Link className='link' href="/services">SERVICES</Link>


                    <Link className='link' href="/videos">VIDEOS</Link>


                    <Link className='link' href="/gallery">GALLERY</Link>


                    <Link className='link' href="/#about">ABOUT US</Link>


                    <Link className='link' href={'/#contact'}>CONTACT</Link>

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