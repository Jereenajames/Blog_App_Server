import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const SECRET =  process.env.SECRET;
const auth =(req,res,next) =>{
jwt.verify(token,SECRET,(err,decode) =>{
    if (err)
        return res.status(401).send({success:false,message:"unauthorized User"});
    next();
})
};
export default auth;