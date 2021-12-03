import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import Connection from './database/db.js'; 
import Routes from './routes/routes.js';

const app = express();

dotenv.config()
const PORT = process.env.PORT;
const username = process.env.username;
const password = process.env.password ;

app.use(bodyParser.json({ extended: true })); //parsing signup/login data
app.use(bodyParser.urlencoded({ extended: true }));


const myRegister = new session.MemoryStore();
const timelimit = 10000*6*60*24*7;

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

Connection(username,password); //invoking connection function of db.js file to connect to mongodb
app.use('/api',Routes)

import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

 console.log(`🚀 ~ import.meta.url`, import.meta.url)

const __fileName = fileURLToPath(import.meta.url)  //we used this for (/) are correctly adjusted 
const __dirname = dirname(__fileName)

//console.log(`🚀 ~ __dirname`, __dirname)
//console.log(`🚀 ~ __fileName`, __fileName)


const buildFolderPath = resolve(__dirname, '../FE/build') 
//console.log(`🚀 ~ buildFolderPath`, buildFolderPath)
app.use(express.static(buildFolderPath))
app.get("*", (req, res) => {
    res.sendFile(`${buildFolderPath}/index.html`)
})

