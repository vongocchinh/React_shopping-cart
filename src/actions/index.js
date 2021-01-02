import * as types from '../constans/index';
import * as Message from '../Message/message';


export const Product_Data_List=(productData)=>{
    return{
        type:types.PRODUCT_DATA,
        productData:productData
    }
}
export const Product_List_Data_Success=(data)=>{
    return{
     
    }
}
export const Product_List_Data_Error=(data)=>{
    return {

    }
}
export const Data_Get_Saga=(data)=>{
    // console.log(data);
    return{

    }
}
export const CART_PRODUCT=(cartProduct)=>{
    return {
        type:types.CART_PRODUCT,
        cartProduct
    } 
}
export const ADD_CART=(product,quantity)=>{
    return{
        type:types.ADD_CART,
        product,
        quantity
    }
}
export const DELETE_CART =(cart)=>{
    return{
        type:types.DELETE_CART,
        cart
    }
}

export const UPDATE_CART_GIAMS=(cart)=>{
    return {
        type:types.UPDATE_CART_GIAM,
        cart
    }
}
export const UPDATE_CART_TANGS=(cart)=>{
    return {
        type:types.UPDATE_CART_TANG,
        cart
    }
}
export const WELL_COME=(message)=>{
    return{
        type:Message.WELL_COME,
        message
    }
}
export const AddMessage=(message)=>{
    return{
        type:Message.ADD_CART,
        message
    }
}
export const DeMessage=(message)=>{
    return{
        type:Message.DELETE_CART,
        message
    }
}
export const UpMessage=(message)=>{
    return{
        type:Message.UPDATE_CART,
        message
    }
}