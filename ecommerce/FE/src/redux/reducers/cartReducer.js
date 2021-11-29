import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: []}, action) => {
    const item = action.payload;
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
           
            //console.log("item.id",item.id)
            const existItem = state.cartItems.find(product => product.product.id === item.product.id);
            // console.log(existItem)
            // console.log(item);
            // console.log(state.cartItems)

            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                let a =  { ...state, cartItems: [...state.cartItems, item]}
                //console.log(a)
                return a;
            }
        case actionTypes.REMOVE_FROM_CART:
            console.log(state.cartItems)
            console.log(action.payload);
            let s =  {
                ...state, cartItems: state.cartItems.filter(product => product.product.id !== action.payload)
            }
            console.log(s);
            return s;

        default:
            return state;
    }
}
 