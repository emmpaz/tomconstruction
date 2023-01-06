import { Component } from "react";
import './css/backgroundVideo.css';
import poster from './video/first-frame.png';
import video from './video/video.mp4';

class BackgroundVideo extends Component{
    

    render(){
        return(
            <div className="backgroundVideoContainer">
             <video className="background-video" autoPlay loop muted poster={poster}>
                <source src={video} type='video/mp4'></source>
             </video>
            </div>
        )
    }
}

export default BackgroundVideo;