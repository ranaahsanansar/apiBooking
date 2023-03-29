import express from "express";
import PropertyController from "../controllers/propertyController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";
const router = express.Router();

// Midware to Authentic user 
router.use('/list-new-property' , checkUserAuth )
router.post('/list-new-property' , PropertyController.listNewProperty )


export default router