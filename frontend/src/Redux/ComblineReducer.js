import { combineReducers } from "redux";
import { Product_reducer } from "./reducer";


export const RootReducer = combineReducers({

    Products: Product_reducer,

})