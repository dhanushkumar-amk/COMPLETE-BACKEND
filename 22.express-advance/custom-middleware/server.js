const express = require('express');
const { requestLogger, addTimeStamp } = require('./middlewares/custom-middleware');
const { globalErrorHandler } = require('./middlewares/error-handler')
const {urlVersioning} = require('./middlewares/api-versioning')
const { createRateLimiter } = require('./middlewares/ratelimiting')
const itemRoutes = require('./routes/item-route')

const app = express();
// rate limiting
app.use(createRateLimiter(30, 15 * 60 * 1000)) // 20 request for 15 minutes

app.use(express.json())

// custom middleware
app.use(requestLogger)
app.use(addTimeStamp)

// global error handler
app.use(globalErrorHandler)

// custom api versioning
app.use(urlVersioning('v1'));
app.use('/api/v1', itemRoutes)



const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on port : ", PORT);
})
