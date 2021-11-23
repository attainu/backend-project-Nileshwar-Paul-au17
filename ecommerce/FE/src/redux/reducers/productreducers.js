import * as actionType from '../../constants/productconstant';

export const getProductsReducer = (state= {products:[]} ,action) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return ({product :action.payload})
        case actionType.GET_PRODUCTS_FAILURE:
            return ({product :action.payload})
        default:
            return state
    }
};