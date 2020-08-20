import { combineReducers } from 'redux';
import Product_Data from './productData';
import CART from './cart';
import Message from './message';
const myReducer=combineReducers({
    Product_Data:Product_Data,  
    CART,
    Message

});

export default myReducer;