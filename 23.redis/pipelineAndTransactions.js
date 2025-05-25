// Redis pipelining is a technique for improving performance by issuing multiple commands at once without waiting for the response to each individual command.


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

        const multipleCommand = client.multi();
        multipleCommand.set("key-transaction1", "value 1")
        multipleCommand.set("key-transaction2", "value 2")
        multipleCommand.get("key-transaction1")
        multipleCommand.get("key-transaction2")

        const results = await multipleCommand.exec()
        console.log(results);

        // MULTI and EXEC commands are used to create and execute transactions, ensuring that multiple commands are executed atomically, meaning they either all succeed or all fail together. MULTI initiates a transaction, EXEC executes the queued commands,

        // pipeline
        const pipeline = client.multi();
        pipeline.set("key-pipeline1", "value 1")
        pipeline.set("key-pipeline2", "value 2")
        pipeline.get("key-pipeline1")
        pipeline.get("key-pipeline2")

         const pipelineResults = await pipeline.exec()
        console.log(pipelineResults);

        // batch data operations
        const pipeline1 = client.multi();
        for (let i = 0; i < 1000; i++) {
            pipeline.set(`user:${i}:action`, `Action ${i}`)
        }
        await pipeline1.exec();

        // transactions means both side will be executed means it will return true , if one side will ot exectued then return fasle, it ensure consistency
        const dummyExample = client.multi()
        dummyExample.decrBy("account:1234:balance", 100); // take amount from this to put another acccount
        dummyExample.incrBy("account:0000:balance", 100);


    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }
}
createRedisConnection()
