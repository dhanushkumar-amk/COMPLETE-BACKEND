const authMiddleware = require('../middleware/auth-middleware')
const isAdminMiddleware = require('../middleware/admin-middleware')

const express = require('express');
const router = express.Router();

router.get('/welcome',authMiddleware, isAdminMiddleware, (req, res) => {
    res.json({
        message : "welcome to a admin page"
    })
})


module.exports = router;
