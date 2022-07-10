import express, { response } from "express";
import db from './config/dbConnect.js'
import routes from './routes/index.js'

//importando banco para o app 
db.on("error", console.log.bind(console, 'Erro de conexão'))//Verifica o erro
db.once("open", () => {
    console.log("Conexão com banco feita com sucesso");//Verifica o sucesso       
});

const app = express();

app.use(express.json());

routes(app);

export default app;

// const buscaUsuario = (id) => {
//     return users.findIndex(user => user.id == id);
// }