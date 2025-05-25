const redis = require('redis')

// connect the redis server
const client = redis.createClient()

// error event emiiter
client.on("error", (error) => console.log(error))

// functin to implememt
async function createRedisConnection(){
    try {
        await client.connect()

        //only unique elements
        // set => SADD, SMEMBERS, SISMEMBER, SREM
        await client.sAdd("hobby", ["coding", "chess", "movies"]);  // SADD => is used to add the values in set
        const extractedValues = await client.sMembers("hobby") //sMembers =>  return all elements in set
        console.log(extractedValues);

        const isPresent = await client.sIsMember("hobby", "movies") // sIsMember("key", "checking value") return is value present or not (0 => no, 1 => yes)
        console.log(isPresent);

        await client.sRem("hobby", "chess"); // srem used to remove the element in a list, you can also remove multiple elements
        const updatedSet = await client.sMembers("hobby")
        console.log(updatedSet);



    } catch (error) {
        console.error(error);
    }
    finally{
        await client.quit();
    }
}
createRedisConnection();
