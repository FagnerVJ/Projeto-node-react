import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:       {type: String},
    name:     {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
    
});

const Users = mongoose.model('users', userSchema);

export default Users;