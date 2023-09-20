import mongoose from 'mongoose';


const user = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const model = new mongoose.model('user',user)