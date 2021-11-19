import dotenv from 'dotenv';
import express from 'express';

import Connection from './database/db.js'; 
import DefaultData from './default.js'

const app = express();

dotenv.config()
const PORT = process.env.PORT;
const dburl = process.env.DB_URL;
const username = process.env.username;
const password = process.env.password ;
console.log(username)
console.log(password)


app.listen(PORT , () => {
    console.log(`Server Started at PORT number ${PORT}`)
})   
Connection(username, password);

DefaultData();