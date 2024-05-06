import { Request,Response,NextFunction } from "express";
import  jwt from "jsonwebtoken";
export const CurrentUser=(req,res,next) => {
    if(!req.session?.jwt)  return next();
    try {
        const payload = jwt.verify(req.session.jwt,'NepaliGuyz');
        return res.send({currentUser: payload})
     }
     catch(err){
         return res.send({currentUser: null})
     }
};