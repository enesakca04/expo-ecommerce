import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    filename: (req, file, cb) =>{
        cb(null,'${Date.now()}-${file.originalname}')
    }
})

//file filter: jpeg jpg, png , webp

const fileFilter = (req,res,cb) =>{
    const allowedTypes = /jpeg|jpg|png|webp/
    const extname = allowedTypes.test(path.extname(file.originalnam).toLowerCase())
    const mimeType = allowedTypes.test(file.mimeType)

    if(extname && mimeType){
        cb(null,true)

    }else{
        cb(new Error("only image file are allowed (jpeg,jpg,png,webp)"))
    }
}

export const upload = multer({
    storage,fileFilter,limits:{fileSize: 5*1024*1024} //5 megabyte  limite
})