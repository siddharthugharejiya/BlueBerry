import axios from "axios"
import { GET } from "./actionType"
export const Product = () => {
    return (dispatch) => {

        axios.get("http://localhost:9595/product")
            // console.log(res)
            .then(res =>
                dispatch({

                    type: GET,
                    payload: res.data
                })
            )
            .catch(err => {
                console.error("Error fetching product:", err);
            });
    }
}