import { ACTIVE_HOME, DISABLE_HOME } from "../actions/action";

const initialState = {
    home:true,
}

const pageReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ACTIVE_HOME:
            return{
                ...state,
                home:action.payload,
            }
        case DISABLE_HOME:
            return{
                ...state,
                home:action.payload,
            }
        
        default:
            return state;
    }
}

export default pageReducer