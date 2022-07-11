import Users from "../models/User.js";

class UserControllertListarPorId {
    
    static listarUserId = (req, res) => {
        const id = req.params.id

        Users.findById(id, (error, users) => {
            if(error) {
                res.status(400).send({message: `${error.message} - Id do usuario não localizado`})
            }else{
                res.status(200).send(users)
            }
        })
    }
}

export default UserControllertListarPorId;