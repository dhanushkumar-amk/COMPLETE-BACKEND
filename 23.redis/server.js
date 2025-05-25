const redis = require('redis')


// create the client
const client = redis.createClient({
    host : 'localhost',
    port : 6379
})

// event listerner
client.on('error', (error) => console.log("Redis client error", error));

async function testRedisConnection(){
    try {
        await client.connect();
        console.log("Conencted to reddis");


        // Basic operations
        // set the value
        await client.set("name", "dhanushkumar")

        //  get the value
        const extractValue = await client.get("name")
        console.log(extractValue); // dhanushkumar

        // delete the value
        const deleteCount= await client.del("name")
        console.log(deleteCount); // 1

        const extractedValue = await client.get("name")
        console.log(extractedValue); // null because deleted

        // increment the value
        await client.set("count", "100");
        const increment = await client.incr("count")
        console.log(increment);

        // decement the value
        const decrement = await client.decr("count")
        console.log(decrement); // 100



    } catch (error) {
        console.error(error);
    }
    finally{
       await client.quit()
    }
}

testRedisConnection();
