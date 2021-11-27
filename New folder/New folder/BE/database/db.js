import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const dburl = process.env.DB_URL

const Connection = async (username, password) => {
    
    try {
        await mongoose.connect(dburl);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
  
export default Connection;