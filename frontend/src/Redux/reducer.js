import { GET } from "./actionType"


const Product = {
    data : []
}

export const Product_reducer = (state = Product , {type,payload}) =>{
    switch(type)
    {
        case GET:
        return {
            ...state,
            data : payload
        }
        default : return state
    }

}