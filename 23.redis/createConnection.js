const redis = require('redis')

// create the cient in two ways
const client = redis.createClient({
    host : "localhost",
    port : 6379
})

// const client = redis.createClient()

// custom error handler event
client.on('error', (error) => console.log("Redis client error", error));

async function createRedisConnection() {

    try {
        // connect redis
        await client.connect();

        console.log("redis connected successfully...");


    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()
