const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_kEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

module.exports = cloudinary;
