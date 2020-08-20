import * as types from  './../constans/index';
import DATA_PRODUCT from './../database/productData.json';

var initialState=DATA_PRODUCT ? DATA_PRODUCT : [];

var myReducer = (state=initialState,action)=>{
 
    switch(action.type){
        case types.PRODUCT_DATA:
           
            return state;
        default: return state;
    }
}
export default myReducer;
