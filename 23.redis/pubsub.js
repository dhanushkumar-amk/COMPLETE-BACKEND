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

        // create a subscriber
        const subscriber = client.duplicate() // create a new client and shares a same connection
        await subscriber.connect();

        // subscriber need to subscribe certain channel
        await subscriber.subscribe("dummy-channel",  (message, channel) => {
            console.log(`Received msg from ${channel} : ${message}`);
        })

        // publish msg to a dummy client [ the client act as publisher]
        await client.publish('dummy-channel', "some dummy data from publisher")
        await client.publish('dummy-channel', "some new msg from publisher")

        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 sseconds it does not recive any data unnsubscibe it

        // finally unsubscriber the channel then quite the channel
        await subscriber.unsubscribe("dummy-channel");
        await subscriber.quit()


    } catch (error) {
        console.error(error);
    }finally{
       await client.quit()
    }

}
createRedisConnection()
