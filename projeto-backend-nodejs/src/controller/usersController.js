import Users from '../models/User.js';
import bcrypt from 'bcrypt';

class UserController {

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

    static removerUser = (req, res) => {
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

export default UserController;
