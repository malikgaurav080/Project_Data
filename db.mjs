
import mongoose from 'mongoose';
import './model.mjs'

mongoose.connect('mongodb://127.0.0.1:27017/MYTESTDATA')
.then(()=>console.log("connected"))
.catch((err)=>console.log("this is catch block",err))