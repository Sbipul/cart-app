import { ADD_TO_CART } from "../actions/action";

const initialState = {
    cart:[]
}

const cartReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const cardProduct = action.payload;
            delete cardProduct.id;
            cardProduct.id=state.cart.length+1
            return {
                ...state,
                cart:[...state.cart,cardProduct]
            }
    
        default:
            return state;
    }
}

export default cartReducer