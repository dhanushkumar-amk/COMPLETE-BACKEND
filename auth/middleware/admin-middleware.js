const isAdmin = (req, res, next) => {
    if(req.userInfo.role !== 'admin'){
        return res.status(400).json({
            success : false,
            message : "Access denied.. admin only"
        })
    }

    next();
}

module.exports = isAdmin
