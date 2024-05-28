'use client'
import '../css/backgroundVideo.css';

function BackgroundVideo() {

    return (
        <div className="backgroundVideoContainer">
            <video className="background-video" autoPlay playsInline loop muted poster='/first-frame.png' preload='none'>
                <source src='/video-actual.mp4' type='video/mp4'></source>
            </video>
        </div>
    )
}

export default BackgroundVideo;