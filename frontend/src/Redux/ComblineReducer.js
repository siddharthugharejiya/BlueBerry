import { combineReducers } from "redux";
import { Product_Editing_Getted, Product_reducer } from "./reducer";


export const RootReducer = combineReducers({

    Products: Product_reducer,
    Product_Edite_getting: Product_Editing_Getted,
 

})