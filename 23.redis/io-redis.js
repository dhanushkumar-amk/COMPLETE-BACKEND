const Redis = require('ioredis') // redis client libraray for node js

const redis = new Redis();

async function ioredisDemo() {
    try {
        await redis.set("name", "dhanushkumar");
        const getValue = await redis.get("name");
        console.log(getValue);
    } catch (error) {
        console.log(error);
    }finally{
        await redis.quit();
    }
}
ioredisDemo()
