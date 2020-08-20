import * as types from  './../constans/index';
var Data_Cart=JSON.parse(localStorage.getItem('CART'));
var initialState=Data_Cart ? Data_Cart : [];

var myReducer = (state=initialState,action)=>{
 
    switch(action.type){
        case types.CART_PRODUCT:
            return [...state];
        
            case types.ADD_CART:

                var index=findIndexCart(state,action.product);
              
                if(index !== -1){
                    state[index].quantity +=action.quantity;
                }else{
                    var dataCart={
                        product:action.product,
                        quantity:action.quantity
                    }
                    state.push(dataCart);
                }
                localStorage.setItem('CART',JSON.stringify(state));
                
                return [...state];
            case types.DELETE_CART:
           
                var indexDe=findIndexCart(state,action.cart.product);
                if(indexDe !== -1){
                    state.splice(indexDe,1);
                }
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];

            case types.UPDATE_CART_TANG:
                var indexInCreation=findIndexCart(state,action.cart.product);
               
                if(indexInCreation !== -1){
                    state[indexInCreation].quantity +=1;
                }
                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];


            case types.UPDATE_CART_GIAM:
               
                var indexReduction=findIndexCart(state,action.cart.product);
              
                if(indexReduction !== -1){
                    state[indexReduction].quantity -=1;
                }
                if(state[indexReduction].quantity < 1){
                    state.splice(indexReduction,1);
                }

                localStorage.setItem('CART',JSON.stringify(state));
                return [...state];
        default: return state;
    }
}

var findIndexCart=(cart,product)=>{
    var index=-1;

    if(cart.length>0){
        for(let i=0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index=i;
                break;
            }
        }
        
    }
    return index;
}
export default myReducer;
