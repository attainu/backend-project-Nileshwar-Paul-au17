import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: data });

       
    } catch (error) {
        console.log('Error while calling cart API',error.message);
    }
};

export const removeFromCart = (id) => (dispatch) => {
    console.log(id);
    dispatch({type: actionTypes.REMOVE_FROM_CART,payload: id })

   
};

export const removefromcart= (cartItems) => (dispatch) => {
    
    console.log("hi from here")
    dispatch({type: actionTypes.REMOVE_FROM_CART_2,payload: cartItems.id })

}