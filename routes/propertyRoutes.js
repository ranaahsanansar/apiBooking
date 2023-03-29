import express from "express";
import PropertyController from "../controllers/propertyController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";
const router = express.Router();

// Midware to Authentic user 
router.use('/list-new-property' , checkUserAuth )
// router.use('/getProperty/:id' , checkUserAuth )
router.use('/delete/:id' , checkUserAuth )



// Public Routes 
router.post('/list-new-property' , PropertyController.listNewProperty )
router.get('/getProperty/:id' , PropertyController.getPropertyDetails )
router.get('/delete/:id' , PropertyController.deleteProperty )


export default router