export const FORMAT_CURRENT=(price)=>{
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
export const TotalCartItem=(price,quantity)=>{
    return price*quantity;
}