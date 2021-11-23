import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js'; 
import DefaultData from './default.js'
import Routes from './routes/routes.js';

const app = express();

dotenv.config()
const PORT = process.env.PORT;
const dburl = process.env.DB_URL;
const username = process.env.username;
const password = process.env.password ;
console.log(username)
console.log(password)

app.use(bodyParser.json({ extended: true })); //parsing signup/login data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); //to handle cors key error


app.listen(PORT , () => {
    console.log(`Server Started at PORT number ${PORT}`)
})   

Connection(username, password);

DefaultData();

app.use('/',Routes)

