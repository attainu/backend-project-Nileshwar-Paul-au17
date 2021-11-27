import axios from 'axios';
axios.defaults.withCredentials=true;



export const authenticateLogin = async (user) => {
    try {
       
        return await axios.post(`/api/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}
export const authenticateSignup = async (user) => {
    try { 
      
        return await axios.post(`api/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`api/products/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}
















