import cloudinaryConfig from "./cloudinary"
import { Cloudinary } from "@cloudinary/url-gen/index"
import { AdvancedImage, responsive } from "@cloudinary/react"
import { useEffect, useState } from "react"


const cld = new Cloudinary({
    cloud: {
        cloudName: 'dquu16adt',
        apiKey: '338331578257743',
        apiSecret: 'R-2WD7aHdStyIB7kYnJ3ZBfvIT0'
    }
})


const CloudGallery = () => {

    const [imageIDs, setImageIDs] = useState([]);

    useEffect(() => {
        fetchIDs();
    }, []);

    const fetchIDs = async () => {
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${cld.cloudinaryConfig.cloud.cloudName}/resources/image`,
            {
                headers: {'Access-Control-Allow-Origin' : '*'}
            }
        );
        if(!res.ok){
            return []
        }
        const data = await res.json();
        const ids = data.resources.map((resource) => resource.public_id);
        setImageIDs(ids);   
    }

    return(
        <div>
            <h1>Gallery</h1>
            <div style={{width: '50%'}}>
                <AdvancedImage style={{width: '100%'}}cldImg={cld.image('cld-sample-5')} plugins={[responsive()]}></AdvancedImage>
            </div>
        </div>
    )
}

export default CloudGallery;