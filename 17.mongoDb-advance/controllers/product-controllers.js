const Product = require('../models/product-model')

const insertSampleProducts = async(req, res) => {
    try {
        const sampleProducts = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 1200,
        inStock: true,
        tags: ["technology", "gadgets", "portable"]
    },
    {
        name: "T-shirt",
        category: "Fashion",
        price: 25,
        inStock: false,
        tags: ["clothing", "casual", "summer"]
    },
    {
        name: "Headphones",
        category: "Electronics",
        price: 150,
        inStock: true,
        tags: ["audio", "music", "wireless"]
    },
    {
        name: "Coffee Mug",
        category: "Kitchenware",
        price: 12,
        inStock: true,
        tags: ["ceramic", "beverage", "drinkware"]
    },
    {
        name: "Notebook",
        category: "Stationery",
        price: 5,
        inStock: false,
        tags: ["office", "paper", "school"]
    }
];

        const result = await Product.insertMany(sampleProducts)
        res.status(201).json({
            success : true,
            data : `inserted ${result.length} sample products`
        })

    } catch (error) {
        console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}

const getProductsStats = async(req, res) => {
    try {
        // https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php
        const result = await Product.aggregate([
            //stage 1
            {
                $match : {
                    inStock : true,
                    price : {
                        $gte : 100
                    }
                }
            },
            // stage 2
            {
                $group : {
                    _id : "$category",
                    avgPrice : {
                        $avg : "$price"
                    },
                    count : {
                        $sum : 1
                    }
                }
            }
        ])

         res.status(201).json({
            success : true,
            data : result
        })
    } catch (error) {
         console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}

const getProductsAnalysis = async(req, res) => {
    try {
        // https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php
        const result = await Product.aggregate([
            {
                $match : {
                    category : 'Electronics'
                }
            },
            {
                $group : {
                    _id : null,
                    totalRevenue : {
                        $sum : "$Price"
                    },
                    avgPrice : {
                        $avg : "$price"
                    },
                    maxProductPrice : {
                        $max : "$price"
                    },
                    minProductPrice : {
                        $min : "$price"
                    }
                }
            },
            {
                $project : { // excluded and included operations 0 =>not , 1 => means take
                    _id : 0,
                    totalRevenue : 1,
                    avgPrice : 1,
                    maxProductPrice : 1,
                    minProductPrice : 1,
                    priceRange : {
                        $subtract : ["$maxProductPrice", "$minProductPrice"]
                    }
                }
            }
        ])

         res.status(201).json({
            success : true,
            data : result
        })
    } catch (error) {
         console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}


module.exports = {insertSampleProducts, getProductsStats, getProductsAnalysis}

