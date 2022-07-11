import Users from "../models/User.js";

class UserControllerListar {

    static listarUsers = (req, res) => {
        Users.find()
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.json('Usuários não encontrados', error);
            })
    }
}

export default UserControllerListar;