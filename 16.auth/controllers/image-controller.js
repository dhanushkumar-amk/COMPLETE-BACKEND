const ImageMdel = require('../model/imageModel')
const { uploadToCloudinary } = require('../helpers/cloudinary-helper')
const fs = require('fs')

const uploadImageController = async(req, res) => {
    try {
        // check if image file is exists in req object
        if(!req.file){
                return   res.status(500).json({
                success : false,
                message : "File is required..."
            })
        }

        // upload to cloudinary
        const { url, publicId } = await uploadToCloudinary(req.file.path);

        // upload the image url and public id and uploading user in dB
        const newImage = new ImageMdel({
            url,
            publicId,
            uploadedBy : req.userInfo.userId // userInfo comming from middlewaes
        })

        await newImage.save();

        // once you uploaded from the filesystem then delete it from local torage or disk
        fs.unlinkSync(req.file.path);

        res.status(201).json({
            success : true,
            message : "Image uploaded successfully",
            image : newImage,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success : false,
            message : "Something went wrong !"
        })
    }
}


module.exports = {uploadImageController}
