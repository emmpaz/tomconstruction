'use client'
import { useEffect, useState } from 'react';
import '../css/backgroundVideo.css';
import { getFirstVideo } from '@/util/cloudinary';

function BackgroundVideo() {

    const [video, setVideo] = useState();

    useEffect(() => {
        grabVideo();
    }, []); 

    const grabVideo = async () => {
        const res = await getFirstVideo();
        setVideo(res);
    }

    return(
        <div className="backgroundVideoContainer">
            <video className="background-video" src={video && video.url} autoPlay playsInline loop muted poster='/first-frame.png' preload='none'>
            </video>
        </div>
    )
}

export default BackgroundVideo;