import { ADD_PRODUCT, UPDATE_QUANTITY } from "../actions/action";

const initialState = {
    products:[]
}

const productsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case UPDATE_QUANTITY:
            console.log(1)
            // const selectedProduct = state.products.find(product=>product.id===action.payload)
            // const filteredProduct = state.products.filter(product=>product.id!==action.payload)
            // selectedProduct.quantity=selectedProduct?.quantity-1;
            // const updateProducts = [...filteredProduct,selectedProduct]
            // const newProducts = updateProducts.sort((a,b)=>b.id-a.id)
            return {
                products:state.products.map((product=> {
                    if (product.id!==action.payload) {
                        return product
                    }
                    console.log(product.quantity)
                    return {
                        ...product,
                        quantity:product.quantity-1
                    }
                }))
                // products:newProducts
            }
        case ADD_PRODUCT:
            console.log(0)
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