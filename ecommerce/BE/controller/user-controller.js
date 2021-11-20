import express from 'express';
import User from '../model/userSchema.js';

export const userSignup = async (request , response) => {

    try{
        const exist = User.findOne(User , request.body.username);
        if(exist){
            response.status(401).json("Username already exist");
        }
        const user = request.body
        const newUser = new User(user); // validating the users data in User schema of DB
        await newUser.save()
        response.status(200).json("User Register successfully")

    }
    catch(error){
        console.log("Error:",error.message)
    }
}


