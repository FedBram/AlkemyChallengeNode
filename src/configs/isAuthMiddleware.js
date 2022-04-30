const isAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }else{
        const error = {
            url: req.originalUrl,
            method: req.method,
            status: 401,
            message: "Unauthorized"
        };
        return res.status(error.status).json(error)
    }
}

export default isAuth