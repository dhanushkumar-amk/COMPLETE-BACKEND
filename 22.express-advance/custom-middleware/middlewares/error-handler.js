
// custom error class
class APIError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode;
        this.name = 'API error' // set error type to api errror
    }
}

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
}

const globalErrorHandler = (err, req, res, next)=> {
    console.error(err.stack);

    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            status : 'Error',
            message : err.message
        })
    }
}

module.exports = {globalErrorHandler, asyncHandler, APIError}
