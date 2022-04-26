const { Router }=require("express");
const router = Router();
const { createUser, loginUser }= require("../controllers/userController");


router
.post("/register", createUser)
.post("/logIn", loginUser);

module.exports = router;

