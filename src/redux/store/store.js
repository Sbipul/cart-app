import { combineReducers, createStore } from "redux";
import cartReducer from "../reducers/cartReducer";
import pageReducer from "../reducers/pageReducer";
import productsReducer from "../reducers/productsReducer";

const rootReducer = combineReducers({cart:cartReducer,products:productsReducer,page:pageReducer})
const store = createStore(rootReducer)
export default store