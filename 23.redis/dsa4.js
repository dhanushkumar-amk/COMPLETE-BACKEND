const redis = require('redis')


const client = redis.createClient()

// custom error handler event
client.on('error', (error) => console.log("Redis client error", error));

async function createRedisConnection() {

    try {
        // connect redis
        await client.connect();

        // hashings
        // HASET, HGET, HGETALL, HDEL

        await client.hSet("product1", { // hset i used too set
            name : "product 1",
            description : "product one description",
            rating : "5"
        })

        const getProductRating = await client.hGet("product1", "rating"); // it returns the particular value
        console.log(getProductRating);

        const getAllProductValues = await client.hGetAll("product1"); // return all element
        console.log(getAllProductValues);

        await client.hDel("product1", "rating") //delete the values
        const afterDeleted = await client.hGetAll("product1");
        console.log(afterDeleted);


    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()
