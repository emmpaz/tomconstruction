'use client'
import { Component } from "react";
import pic from './content/tom-bigtext.svg';
import '../css/BigText.css';

function BigText() {

    return (
        <div className="BigTextContainer">
            <img className="BigTextImage" src={pic.src}></img>
        </div>
    )

}

export default BigText;