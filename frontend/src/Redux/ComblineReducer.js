import { combineReducers } from "redux";
import { Product_filter_reducer, Product_posted, Product_reducer } from "./reducer";
import Product_Edite_Product_reducer from "./reducer";


export const RootReducer = combineReducers({

    Products: Product_reducer,
    Product_upload: Product_posted,
    Product_Edite_getting: Product_Edite_Product_reducer,
    Product_Filtered : Product_filter_reducer


})