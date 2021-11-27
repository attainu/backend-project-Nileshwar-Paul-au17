import * as actionType from '../constants/productConstant';

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

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case actionType.GET_PRODUCT_DETAILS_RESET: 
            return {
                ...state,
                product: {}
            }
        default:
            return state
    }
}