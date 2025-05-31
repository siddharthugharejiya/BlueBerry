import axios from "axios"
import { GET, Posted } from "./actionType"
import { jwtDecode } from "jwt-decode";
export const register_action = (state, nav) => async (dispatch) => {
    await axios.post("http://localhost:9595/signup", state)
    alert("Registration successful! You can now log in.")
    nav("/login")
}
export const login_action = (state, nav) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:9595/login", state);

        const token = res.data.token || res.data.Token;
        const decoded = jwtDecode(token);
        console.log(decoded);
        console.log(decoded.userRole);
        if (decoded.userRole == "admin") {
            nav("/admin")
        }
        else if (decoded.userRole == "user") {
            nav("/")
        }
        alert(res.data.message);
    } catch (error) {
        if (error.response && error.response.status === 401) {

            const msg = error.response.data.message || "Invalid credentials";
            alert(msg);
        }
    }
};

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



export const product_add_action = (state) => {
    const token = localStorage.getItem("token");

    axios.post("http://localhost:9595/add", state, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
        .then(res => {
            console.log("✅ Product added successfully:", res.data);
        })
        .catch(err => {
            console.error("❌ Error adding product:", err.response?.data || err.message);
        });
};
export const Product_del = (id) => async (dispatch) =>
    await fetch(`http://localhost:9595/del/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.error("Delete error:", err);
        });

export const Product_edite_get = (id) => async (dispatch) => {

    fetch(`http://localhost:9595/edite/${id}`, {
        method: "GET",
    })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type : "GETTING_PRODUCT",
                payload : res
            })

        })

}