import express from "express";
import UserControllerListar from "../controller/userControllerListar.js";
import UserControllerRegister from "../controller/userControllerRegister.js";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
    .get("/users", UserControllerListar.listarUsers) 
    .get("/user/:id", UserController.listarUserId)
    .post("/user", UserControllerRegister.registraUser)
    .put("/user/:id", UserController.atualizarUser)
    .delete("/user/:id", UserController.removerUser)
export default router;