import { ADD_TO_CART, DECREASE_CART_QTY, INCREASE_CART_QTY, REMOVE_FROM_CART } from "../actions/action";

let initialState = {
    cart:[]
}
const createId = (arr,obj)=>{
    return {
        ...obj,
        id:(arr.length)+1,
        quantity:1
    }
}

const cartReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const cardProduct = createId(state.cart,action.payload);
            return {
                ...state,
                cart:[...state.cart,cardProduct]
            }
        case INCREASE_CART_QTY:
            return {
                ...state,
                cart:state.cart.map(cart=>{
                    if (cart.id!==action.payload) {
                        return cart
                    }
                    return {
                        ...cart,
                        quantity:cart.quantity+1
                    }
                })
            }
        case DECREASE_CART_QTY:
            return {
                ...state,
                cart:state.cart.map(cart=>{
                    if (cart.id!==action.payload) {
                        return cart
                    }
                    return {
                        ...cart,
                        quantity:cart.quantity>=2 ? cart.quantity-1 : 1
                    }
                })
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter(cart=>cart.id!==action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer