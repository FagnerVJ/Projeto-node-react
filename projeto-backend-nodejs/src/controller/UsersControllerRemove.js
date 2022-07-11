import Users from '../models/User.js';

class UsersControllerRemove {

    static removeUser = (req, res) => {
        const id = req.params.id
        Users.findOneAndDelete(id, (error) => {
            if(!error){
                res.status(200).send({message:'Usuário removido com sucesso'});
            }else{
                res.status(500).send({message: error.message});
            }
        })
    }
}

export default UsersControllerRemove;
