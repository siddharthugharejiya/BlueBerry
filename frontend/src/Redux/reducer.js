import { GET, Posted } from "./actionType"

const Product = {
    data: []
}

export const Product_reducer = (state = Product, { type, payload }) => {
    switch (type) {
        case GET:
            return {
                ...state,
                data: payload
            }
        default: return state
    }

}
const p_e_g = {
    data: []
}
export const Product_Editing_Getted = (state = p_e_g, { type, payload }) => {
    switch (type) {
        case "GETTING_PRODUCT":
            return {
                ...state,
                data: payload

            }
        default: return state
    }
}