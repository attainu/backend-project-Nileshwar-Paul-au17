// import express from 'express';
// import User from '../model/userSchema.js';

// export const userSignup = async (request , response) => {

//     try{
//         const exist = User.findOne(User , request.body.username);
//         if(exist){
//             response.status(401).json("Username already exist");
//         }
//         const user = request.body
//         const newUser = new User(user); // validating the users data in User schema of DB
//         await newUser.save()
//         response.status(200).json("User Register successfully")

//     }
//     catch(error){
//         console.log("Error:",error.message)
//     }
// }



import User from '../model/userSchema.js';
export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user) {
            return response.status(200).json(message, `${request.body.username} login successfull`);
        } else {
            return response.status(401).json(message, 'Invalid Login');
        }
    } catch (error) {
        response.json(Error, error.message);
    }
}
export const userSignUp = async (request, response) => {
    try {
        console.log(request.body)
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json({ message: 'User already exist' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({message: 'user has been successfully registered'});
    } catch (error) {
        response.json({Error:error.message});
    }
}



