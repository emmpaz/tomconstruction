'use server'

import { getImages } from "@/util/cloudinary"
import styles from '../../css/new-css/Gallery.module.css';
import HeaderComponent from "@/lib/HeaderComponent";


export default async function Page(){

    const images = await getImages();

    return (
        <div className={styles.gallery}>
            <HeaderComponent/>
            <div className={styles.grid_container}>
                <div className={styles.grid}>
                    {images.map((image : any) => (
                        <div key={image.id} className={styles.grid_item}>
                            <img style={{width: '100%'}} src={image.url} alt="Gallery Image"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}