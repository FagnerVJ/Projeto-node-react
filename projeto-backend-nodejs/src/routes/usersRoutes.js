import express from "express";
import UsersControllerListar from "../controller/UsersControllerListar.js";
import UsersControllerRegister from "../controller/UsersControllerRegister.js";
import UsersControllerUpdate from "../controller/UsersControllerUpdate.js";
import UsersControllertListarPorId from "../controller/UsersControllerListarPorId.js";
import UsersControllerRemove from "../controller/UsersControllerRemove.js";

const router = express.Router();

router
    .get("/users", UsersControllerListar.listarUsers) 
    .get("/user/:id", UsersControllertListarPorId.listarUserId)
    .post("/user", UsersControllerRegister.registraUser)
    .put("/user/:id", UsersControllerUpdate.atualizarUser)
    .delete("/user/:id", UsersControllerRemove.removeUser)
export default router;