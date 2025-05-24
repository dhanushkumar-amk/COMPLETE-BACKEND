const express = require('express')
const { asyncHandler, APIError   } = require('../middlewares/error-handler')

const router = express.Router()


const item = [
    {
        id : 1,
        name : "item 1"
    },
    {
        id : 2,
        name : "item 2"
    },
    {
        id : 3,
        name : "item 3"
    },
    {
        id : 4,
        name : "item 4"
    },
    {
        id : 5,
        name : "item 5"
    },
]

router.get('/items',asyncHandler(async (req, res) => {
    res.json(item);
}))

// router.post('/items', asyncHandler(async (req, res) => {
//     if(!req.body.name){
//         throw new APIError("item name is required...")
//     }

//     const newItem = {
//         id : item.length + 1,
//         name :req.body.name,
//     }
//     item.push(newItem)

//     res.json({
//         status : 200,
//         data : newItem
//     })
// }))

module.exports = router;
