
'use server'
import {v2 as cloudinary} from 'cloudinary';
import { cache } from 'react';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    secure: true
})
/**
 * grab images from cloudinary
 */
export const getImages = cache(async () => {
    const res = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'tom/',
        max_results: 100
    });
    const version = res.resources.length;

    return res.resources.map((image : {
        public_id: string,
    }) => ({
        id: image.public_id,
        url: cloudinary.url(image.public_id, {
            width: 'auto',
            crop: 'scale',
            dpr: 'auto',
            fetch_format: 'auto',
            quality: 'auto',
            version: version
        })
    }));
})
/**
 * get videos from cloudinary with a default limit of 4 and a cursor that contains
 * the position of where it left off it querying
 */
export const getVideos = cache(async (limit : number=4 , nextCursor : string | null = null) => {
    const res = await cloudinary.api.resources({
        type: 'upload',
        max_results: limit,
        next_cursor: nextCursor,
        resource_type: 'video',
    });

    console.log(res);
    return{
        videos: res.resources.map((video: any) => ({
            id: video.public_id,
            url: video.secure_url,
            thumbnail: video.thumbnail_url,
        })),
        nextCursor: res.next_cursor
    }
});
/**
 * grabbing intro video
 */
export const getFirstVideo = cache(async () => {
    const res = await cloudinary.api.resources_by_asset_ids('59094a3523e0b2fa55b5d33f40134650');
    return res.resources[0];
})