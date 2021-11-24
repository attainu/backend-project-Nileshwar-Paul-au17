import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

import Connection from './database/db.js'; 
import DefaultData from './default.js'
import Routes from './routes/routes.js';
import session from 'express-session';
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
// app.use(cors()); //to handle cors key error

const myRegister = new session.MemoryStore();
const timelimit = 10000;

app.set('trust proxy', 1)
app.use(session({
    secret: "HELLO",
    saveUninitialized: true,
    resave: false,
    store: myRegister,
    cookie: { 
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
        maxAge: timelimit
    }
}))

app.listen(PORT , () => {
    console.log(`Server Started at PORT number ${PORT}`)
})   

Connection(username, password);

//DefaultData();

app.use('/api',Routes)
