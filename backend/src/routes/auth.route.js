import express from "express";
import {onboard,logout,login,signup} from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.post("/onboarding",protectRoute,onboard);

// if user is loged in we checking it 
router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({success: true,user: req.user});
});

export default router;
