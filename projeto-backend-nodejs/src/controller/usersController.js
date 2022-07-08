import Users from '../models/User.js';

class UserController {

    static listarUsers = (req, res) => {
        Users.find()
            .then(users => {
                res.status(200).json(users);
            })
            .catch(error => {
                res.json('Usuários não encontrados', error);
            })
    }

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

    static cadastrarUser = (req, res) => {
        var user = new Users({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        user.save()
            .then(users => {
                res.status(201).send(users.toJSON());
            })
            .catch(error => {
                res.status(500).json('Usuário não encontrado ', error);
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
