export const ADD_TO_CART='cart/add';
export const ADD_PRODUCT='products/add';
export const UPDATE_QUANTITY='quantity/update'
export const generateAction = (type,payload)=>{
    return {type,payload}
}