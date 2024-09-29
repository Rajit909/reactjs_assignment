import express from "express";
import {login, logout, register} from '../controllers/user.controller.js'
import upload from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/register").post(upload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);


export default router