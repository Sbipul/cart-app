import { ADD_PRODUCT, UPDATE_QUANTITY } from "../actions/action";

const initialState = {
    products:[]
}

const productsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_QUANTITY:
            return {
                products:state.products.map((product=> {
                    if (product.id!==action.payload) {
                        return product
                    }
                    return {
                        ...product,
                        quantity:product.quantity-1
                    }
                }))
            }
        case ADD_PRODUCT:
            const newProduct = action.payload;
            newProduct.id = state.products.length+1
            return {
                ...state,
                products:[...state.products,newProduct]
            }
        default:
            return state;
    }
}

export default productsReducer