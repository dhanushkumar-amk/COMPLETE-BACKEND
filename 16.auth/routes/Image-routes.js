const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const isAdminMiddleware = require('../middleware/admin-middleware')
const uploadMiddlware = require('../middleware/uploadMiddlware')
const {uploadImageController} = require('../controllers/image-controller')

const router = express.Router();

// upload a image
router.post("/upload", authMiddleware, isAdminMiddleware, uploadMiddlware.single('image'), uploadImageController)

module.exports = router;
