'use server'

import HeaderComponent from "@/lib/HeaderComponent"
import { getVideos } from "@/util/cloudinary"
import styles from '../../css/new-css/Videos.module.css';
import VideoList from "@/lib/components/VideoList";


export default async function Page(){
    const {videos, nextCursor} = await getVideos();

    return(
        <div className={styles.videos}>
            <HeaderComponent/>
            <VideoList videos={videos} nextCursor={nextCursor}/>
        </div>
    )
}