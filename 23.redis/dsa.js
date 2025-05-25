const redis = require('redis')

const client = redis.createClient({
    host : "localhost",
    port : 6379
})


client.on('error', (error) => console.log("Redis client error", error));

async function createRedisConnection() {

    try {
        await client.connect()
        console.log("redis connect successfully...");

        // Strings -> SET, GET, MSET, MGET (MSET and MGET =>formultiple values)
        await client.set("name", "dhanushkumar");
        const name = await client.get("name")
        console.log(name);

        // MGET and MSET
        await client.mSet(["user:email", "dhanushkumaramk@gmail.com", "user:age", "21", "user:country", "India"])
        const [email, age, country] = await client.mGet(["user:email", "user:age", "user:country"])
        console.log(email,age, country);

        // List => LPUSH, RPUSH, LRANGE, LPOP, RPOP
       await client.lPush("notes", ["note 1", "note 2", "note 3"]) // Lpush push the elements on begining
        const extractAllNodes = await client.lRange("notes", 0, -1); //Lrange get the elements on certain range (0, -1) start from 0 and all elements
        console.log(extractAllNodes);

        const firstNote = await client.lPop("notes") // lpop remove the first element in a list
        console.log(firstNote);

        const lastNote = await client.rPop("notes") // rpop remove the last element in a list
        console.log(lastNote);

        await client.rPush("notes", ["hello", "world"]); // push the element in last
        const extractAllNodes1 = await client.lRange("notes", 0, -1); 
        console.log(extractAllNodes1);

    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()
