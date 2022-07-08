import mongoose from "mongoose";
import 'dotenv/config';

//Arquivo de conexão com o banco em nuvem
const senhadb = process.env.REACT_APP_PASSWORD_DB;
const usuariodb = process.env.REACT_APP_USER_DB;

mongoose.connect(`mongodb+srv://${usuariodb}:${senhadb}@projeto-backend-nodejs.l0j8vl8.mongodb.net/db_projeto-backend-nodejs`);

const db_nuvem = mongoose.connection;

export default db_nuvem;


//Arquivo de conexão com o banco local
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db_local = mongoose.connection;
