import * as actionType from '../../constants/productconstant';

export const getProductsReducer = (state= {products:[]} ,action) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return ({products :action.payload})
        case actionType.GET_PRODUCTS_FAILURE:
            return ({products :action.payload})
        default:
            return state
    }
};