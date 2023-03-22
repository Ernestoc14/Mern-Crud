import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "djsqgd1lq",
    api_key: "343315642978435",
    api_secret: "JrtJ7Sp3tekHwZfnKh0jPQvhWEM"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, { 
        folder: 'mern'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}