import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});

const uploadImg = multer({storage});

export default uploadImg

