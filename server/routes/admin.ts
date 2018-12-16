import { Request, Router } from "express";

export var admin = Router();

admin.use('/', (req, res)=>{
    res.redirect('./ui');
})