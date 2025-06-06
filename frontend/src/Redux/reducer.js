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
export const Product_Editing_Posted = (state = p_e_g, { type, payload }) => {
    switch (type) {
        case "Posted_Product":
            return {
                ...state,
                data: payload

            }
        default: return state
    }
}

const e_g = {
    data: []
}
export const Product_posted = (state = e_g, { type, payload }) => {
    switch (type) {
        case "Edite_Pro":
            return {
                ...state,
                data: payload

            }
        default: return state
    }
}


// const e_e_g = {
//     data: []
// }
// export const Product_Editing_Edited = (state = e_e_g, { type, payload }) => {
//     switch (type) {
//         case "Edite_Pro":
//             return {
//                 ...state,
//                 data: payload

//             }
//         default: return state
//     }
// }

const e_g_g = {
    data: []
}
const Product_Edite_Product_reducer = (state = e_g_g, { type, payload }) => {
    switch (type) {
        case "GETTING_PRODUCT":
            return {
                data: payload
            }
        default: return state
    }

}
export default Product_Edite_Product_reducer

const product_filter = {
    data: []
}

export const Product_filter_reducer = (state = product_filter, { type, payload }) => {
    switch (type) {
        case "FILTER_PRODUCTS_BY_CATEGORY":
            return {
                ...state,
                data: payload
            }
        default: return state
    }
}