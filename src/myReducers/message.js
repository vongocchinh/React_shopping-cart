import * as message from './../Message/message';

var initialState=message.WELL_COME;

var myReducer = (state=initialState,action)=>{
 
    switch(action.type){
        case message.WELL_COME:
           
            return state;
        case message.ADD_CART:
           
            state=action.message;
            return state;
        case message.DELETE_CART:
        
            state=action.message;
            return state;
        case message.UPDATE_CART:
    
            state=action.message;
            return state;
        default: return state;
    }
}
export default myReducer;
