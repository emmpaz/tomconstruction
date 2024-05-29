import { NextRequest, NextResponse } from "next/server";
import formidable from 'formidable';
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { resolve } from "path";

export async function POST(request: NextRequest){
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
        api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
        secure: true
    })
    //
    const data = await request.formData();
    const files = data.getAll('files') as File[];

    const uploadedFiles = await Promise.all(
        files.map(async (file) => {
            
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploaded_file : UploadApiResponse | undefined = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({
                    folder: 'tom'
                },(error, uploadResult) => {
                    if(error) reject(error);
                    return resolve(uploadResult);
                }).end(buffer);
            });
            if(!uploaded_file){
                return NextResponse.json({
                    message: `Failed to upload : ${file.name}`
                }, {status: 500});
            }
            return uploaded_file.secure_url;
        })
    )
    return NextResponse.json({
        urls: uploadedFiles
    }, {status: 200})
}