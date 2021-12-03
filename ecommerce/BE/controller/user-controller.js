import User from '../model/userSchema.js';

export const userLogIn = async (request,response) => { // this control function handling the login functionality of user
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user != null ) {
            request.session.username = user.username
            request.session.email = user.email
            request.session.loggedIn = true
            //console.log(request.session)
            //console.log(request.body)
            return response.status(200).json({message: `${request.body.username} logged successfull`});
        } else {
            return response.status(401).json({message: 'Invalid Login'});     
        }
    } catch (error) {
        response.send({error: error.message});
    }
}

export const userSignUp = async (request, response) => { // this control function handling the login functionality of user
    try {
        const exist = await User.findOne({ username: request.body.username }); //searching user is already exist in our database or not
        if (exist) {
            return response.status(401).json({ message: 'User already exist' });
        }
        const user = request.body;
        const newUser = new User(user);     //inserting the user details in  DB
        await newUser.save();
        response.status(200).json({message: 'user has been successfully registered'});
    } catch (error) {
        response.status(401).json({error:error.message});
    }
}



