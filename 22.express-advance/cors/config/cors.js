const cors = require('cors');

/*
const configureCors = () => {
    return cors({
        origin: (origin, callback) => {
            const allowedOrigins = [
                'http://localhost:3000', // Example: Local domain
                'https://your-custom-domain.com', // Example: Production domain
            ];

            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Version'], // Allowed headers
        exposedHeaders: ["X-Total-Count", "Content-Range"], // Headers exposed to the client
        credentials: true, // Allow cookies and other credentials to be sent
        preflightContinue: false, // Disable preflight requests continuation
        maxAge: 600, // Cache preflight requests for 10 minutes
        optionsSuccessStatus: 204 // Response status for successful OPTIONS requests
    });
};

*/


const configureCors = () => {
    return cors({
        origin: ['http://localhost:3000','https://your-custom-domain.com'],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ['Content-Type','Authorization','Accept','Accept-Version','X-Requested-With','X-CSRF-Token','X-Auth-Token'],
        exposedHeaders: ["X-Total-Count", "Content-Range"],
        credentials: true,
        preflightContinue: false,
        maxAge:  86400 ,// 24 hours
        optionsSuccessStatus: 204
    });
};
module.exports = { configureCors };



// reference
// https://expressjs.com/en/resources/middleware/cors.html#configuring-cors
