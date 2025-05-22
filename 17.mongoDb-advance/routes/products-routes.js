
const express = require('express');
const {insertSampleProducts, getProductsStats, getProductsAnalysis} = require('../controllers/product-controllers')

const router = express.Router();


router.post('/add', insertSampleProducts)
router.get('/stats', getProductsStats)
router.get('/analysis', getProductsAnalysis)




module.exports = router;
