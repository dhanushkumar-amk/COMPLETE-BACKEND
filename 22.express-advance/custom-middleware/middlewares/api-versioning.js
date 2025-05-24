
const urlVersioning = (version) => (req, res, next) => {
    if(req.path.startsWith(`/api/${version}`)){
        next();
    }else{
        res.status(400)
        .json({
            success : false,
            error : "Apiversion is not suppoted"
        })
    }
};


const headerVersioning = (version) => (req, res, next) => {
    if(req.get('Accept-Version') === version)
        next();
    else{
        res.status(400)
        .json({
            success : false,
            error : "Apiversion is not suppoted"
        })
    }
}


const contentTypeVersioning = (version) => (req, res, next) => {
    const contentType = req.get('Content-Type');
    if(contentType && contentType.include(`application/vnd.api.${versioning}+json`))
        next()
    else
        res.status(400)
        .json({
            success : false,
            error : "Apiversion is not suppoted"
        })
}


module.exports = {urlVersioning, headerVersioning, contentTypeVersioning};
