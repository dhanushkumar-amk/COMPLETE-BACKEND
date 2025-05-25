const redis = require('redis')

// create the cient in two ways
const client = redis.createClient({
    host : "localhost",
    port : 6379
})


// custom error handler event
client.on('error', (error) => console.log("Redis client error", error));

async function createRedisConnection() {

    try {
        // connect redis
        await client.connect();

        // sorted sets
        //  ZADD, ZRANGE, ZRANK, ZREM

        // zadd add the element in n sorted set [{}] stores based on score in ascending order
        await client.zAdd("cart", [
            {
                score : 100, value : "cart 1"
             },
            {
                score : 150, value : "cart 2"
             },
            {
                score : 10, value : "cart 3"
             },
        ])

        const getTopCartItems = await client.zRange("cart", 0, -1) // zRange it gives the elementin sorted set ascending order
        console.log(getTopCartItems);

        const extractAllElementsWithScore = await client.zRangeWithScores('cart', 0, -1) // zRangeWithScores it give score with values
        console.log(extractAllElementsWithScore);

        const cartTwoRank = await client.zRank("cart", "cart 2"); // returns the rank of the particular valaues
        console.log(cartTwoRank);


    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()
