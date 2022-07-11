import Users from '../models/User.js';

class UserControllerUpdate {
    
    static atualizarUser = (req, res) => {
        const id = req.params.id

        Users.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (!error) {
                res.status(200).send({ message: 'Usuário atualizado com sucesso' })
            } else {
                res.status(500).send({ message: error.message })
            }
        })
    }
}

export default UserControllerUpdate;