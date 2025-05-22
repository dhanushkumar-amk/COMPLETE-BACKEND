const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

// file filter function
const checkFileFilter =(req, file, cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image' ||  file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
}


// multer middlware
module.exports = multer({
    storage : storage,
    fileFilter : checkFileFilter,
    limits :  { fileSize: 5 * 1024 * 1024 }, // 5mb
})

