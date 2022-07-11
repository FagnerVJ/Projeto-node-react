import Users from "../models/User.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

class UsersControllerRegister {
    
    static registraUser = async (req, res) => {
        const { name, username, password } = req.body;

        //Criação senha rash
        const saltRound = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, saltRound) 
        
        

            var user = new Users({
            name,
            username,
            password: passwordHash,
        })
        try {
            //Criação do token
            const PASSWORDSECRECTJWT = process.env.REACT_APP_SECRET_RASH;
            const token = jwt.sign({id: user._id}, PASSWORDSECRECTJWT, {expiresIn: 86400});
            
            await user.save();
            user.password = undefined;
            res.status(201).json({ msg: "Usuário criado com sucesso!", user, auth: true, token});
        }catch (error) {
            res.status(500).send({ msg: error });
        }
    }
}
export default UsersControllerRegister;
