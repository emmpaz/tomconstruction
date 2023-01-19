import React, { Component } from 'react';

import './css/Video.css';
import HeaderComponent from './HeaderComponent';
import video1 from './video/videogallery/1.mp4';
import video2 from './video/videogallery/2.mp4';
import video3 from './video/videogallery/3.mp4';
import video4 from './video/videogallery/4.mp4';
import video5 from './video/videogallery/5.mp4';
import video6 from './video/videogallery/6.mp4';
import video7 from './video/videogallery/7.mp4';
import video8 from './video/videogallery/8.mp4';
import video9 from './video/videogallery/9.mp4';
import video10 from './video/videogallery/10.mp4';
import video11 from './video/videogallery/11.mp4';

const importedVideos = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
    video11
]
class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <div className='main-video-component-container'>
                <HeaderComponent highlight="videos" />
                <div className='video-component'>
                    {
                        importedVideos.map((value, index) => {
                            return(
                                <div className='video-container'>
                                    <video className='video' controls="controls">
                                        <source src={value} type='video/mp4'></source>
                                    </video>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Video;