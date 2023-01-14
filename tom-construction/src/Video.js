import React, { Component } from 'react';
import './css/Video.css';
import HeaderComponent from './HeaderComponent';

class Video extends Component {
    state = {  } 
    render() { 
        return (
            <div className='VideoContainer'>
                <HeaderComponent highlight="videos"/>
                <h2>VIDEOS</h2>
            </div>
        );
    }
}
 
export default Video;