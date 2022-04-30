const postLogin = (req, res) => {
    try{
        res.send("Login successful");
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        }
        res.send(err);
    };
};

const postRegister = (req, res) => {
    try{
        res.send("Register successful")
    }catch(error){
        const err = {
            name: error.name,
            message: error.message
        }
        res.send(err);
    };
};

const getLogout = (req, res) => {
    req.logOut();
    req.session.destroy ((err) => {
        if(err){
            console.log(err);
        };
        res.clearCookie('connect.sid');
        res.json({message: 'User logged out'})
    });
};

export {
    postLogin,
    postRegister,
    getLogout
};