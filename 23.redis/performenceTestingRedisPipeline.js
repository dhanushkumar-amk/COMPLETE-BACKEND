const redis = require('redis')

const client = redis.createClient()

// custom error handler event
client.on('error', (error) => console.log("Redis client error", error));

async function createRedisConnection() {

    try {
        // connect redis
        await client.connect();

        console.log("Performance test");
        console.time("Without pipelining");
        for (let i = 0; i < 1000; i++) {
            await client.set("user-${i}", `user-value-${i}`)
        }
        console.timeEnd("Without pipelining")

        // with pipeline
        console.time("With pipelining");
        const pipeline = client.multi();
        for (let i = 0; i < 1000; i++) {
             pipeline.set("user-pipeline-${i}", `user-pipeline-value-${i}`)
        }
        await pipeline.exec()
        console.timeEnd("With pipelining")

    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()

/*
Performance test
Without pipelining: 103.553ms
With pipelining: 11.89ms
*/
