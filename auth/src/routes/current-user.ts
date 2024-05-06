import express from 'express';
 import jwt from 'jsonwebtoken';
const router = express.Router();
router.get('/api/users/currentusers', (req, res) => { 
    if(!req.session?.jwt){
        return res.send({currentUser: null})
    }
     try {
        const payload = jwt.verify(req.session.jwt,'NepaliGuyz');
        return res.send({currentUser: payload})
     }
     catch(err){
         return res.send({currentUser: null})
     }
     
})
export {router as currentusersRouter}