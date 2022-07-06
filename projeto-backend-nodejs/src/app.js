import express from "express";

const app = express();

app.use(express.json());

const users = [
    {
        id: 1, 
        nome: 'Fagner Viana',
        email:'fagner@gmail.com',
        senha: '123456'
    },
    {
        id: 2, 
        nome: 'Gabriel Viana',
        email:'gabriel@gmail.com',
        senha: '123456'
    }
]
//mostra a uma mensagem pelo verbo get
app.get('/', (req, res) => {
    res.status(200).send('API de usuário em node');
})
//busca toda a lista de usuários que tenho no sistema monstrando um json dos usuarios
app.get('/users', (req, res) => {
    res.status(200).json(users);
})

//buscar o usuário por id
app.get('/user/:id', (req, res) => {
    const {id} = req.params;
    const index = buscaUsuario(id);
    res.json(users[index]);
});

//cadastra um usuário no verbo post e mostra os usuários 
app.post('/users', (req, res) =>{
    users.push(req.body);
    res.status(201).send('Usuario cadastrado com sucesso!');    
})

//altera o usuário por id
app.put('/user/:id', (req, res) => {
    const {id} = req.params;
    const index = buscaUsuario(id);
    users[index]  = req.body;
    res.json(users);
});

//Remover usuario
app.delete('/user/:id' , (req, res) =>{
    const {id} = req.params;
    const index = buscaUsuario(id);
    users.splice(index, 1);
    res.send(`Usuário ${id} removido com sucesso`);
});

const buscaUsuario = (id) => {
    return users.findIndex(user => user.id == id);
}

export default app;