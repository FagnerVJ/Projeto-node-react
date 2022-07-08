import express from "express";
import UserController from "../controller/usersController.js";

const router = express.Router();

router
    .get("/users", UserController.listarUsers)
    .get("/user/:id", UserController.listarUserId)
    .post("/user", UserController.cadastrarUser)
    .put("/user/:id", UserController.atualizarUser)
    .delete("/user/:id", UserController.removerUser)
export default router;