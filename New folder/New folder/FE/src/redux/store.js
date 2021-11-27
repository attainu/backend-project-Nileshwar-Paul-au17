import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {getProductDetailsReducer, getProductsReducer } from './reducers/productreducers';


const reducer = combineReducers({
    getProducts:getProductsReducer,
    getProductDetailsReducer: getProductDetailsReducer
})

const middleware = [thunk]
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store;