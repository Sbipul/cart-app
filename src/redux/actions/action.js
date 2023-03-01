export const ADD_TO_CART='cart/add';
export const ADD_PRODUCT='products/add';
export const UPDATE_QUANTITY='quantity/update'
export const ACTIVE_HOME='active/home'
export const DISABLE_HOME='disable/home'
export const INCREASE_CART_QTY='increase/cart-qty'
export const DECREASE_CART_QTY='decrease/cart-qty'
export const REMOVE_FROM_CART='remove/cart'
export const generateAction = (type,payload)=>{
    return {type,payload}
}