'use client'

import { useState } from "react";
import styles from '../../css/new-css/Videos.module.css';
import { getVideos } from "@/util/cloudinary";

type Props = {
    videos: {
        id: string,
        url: string,
        thumbnail: string,
    }[],
    nextCursor: string | null
}



export default function VideoList({
    videos : initialVideos, nextCursor : initialCursor
} : Props){
    const [videos, setVideos] = useState(initialVideos);
    const [nextCursor, setNextCursor] = useState(initialCursor);

    const loadMoreVideos = async () => {
        const {videos : newVideos, nextCursor : updatedNext} = await getVideos(undefined,nextCursor);
        setVideos(prev => [...prev, ...newVideos]);
        setNextCursor(updatedNext);
    }

    return(
        <div className={styles.grid_container}>
                <div className={styles.grid}>
                {videos.map((video : any) => (
                    <div key={video.id} className={styles.video_item}>
                        <video src={video.url} poster={video.thumbnail} style={{width: '100%'}}controls/>
                    </div>
                ))}
                </div>
                <div className={styles.button}>
                    {nextCursor && 
                    <button onClick={loadMoreVideos}>Load More</button>
                    }
                </div>
            </div>
    )
}