
// import axios from 'axios'
// import * as actionTypes from '../../constants/productconstant';
// const url = 'https://localhost:4000';

// const getProducts = () => async (dispatch) => {
//     try {
       
//         const { data } = await axios.get(`http://localhost:4000/products`);
//         dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

//     } catch (error) {
//         dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: error.response });
//     }
// };
// export default getProducts;

import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        
        const { data } = await axios.get(`/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: error.response });
    }
};
export default getProducts;