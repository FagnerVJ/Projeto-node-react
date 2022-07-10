import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserControllerRegister {
    static registraUser = async (req, res) => {
        const { name, username, password } = req.body;

            var user = new Users({
            name,
            username,
            password: passwordHash,
        })
        try {

            await user.save();
            user.password = undefined;
            res.status(201).json({ msg: "Usuário criado com sucesso!", user});
        }catch (error) {
            res.status(500).send({ msg: error });
        }
    }
}
export default UserControllerRegister;
