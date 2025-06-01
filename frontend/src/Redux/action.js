import axios from "axios"
import { GET, Posted } from "./actionType"
import { jwtDecode } from "jwt-decode";

export const register_action = (state, nav) => async (dispatch) => {
    try {
        await axios.post("http://localhost:9595/signup", state);
        alert("Registration successful! You can now log in.");
        nav("/login");
    } catch (error) {
        console.error("Registration error:", error);
    }
};

export const login_action = (state, nav) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:9595/login", state);
        const token = res.data.token || res.data.Token; 
        const decoded = jwtDecode(token);
        console.log(decoded);
        console.log(decoded.userRole);
        if (decoded.userRole == "admin") {
            nav("/admin");
        } else if (decoded.userRole == "user") {
            nav("/");
        }
        alert(res.data.message);
    } catch (error) {
        if (error.response && error.response.status === 401) {
            const msg = error.response.data.message || "Invalid credentials";
            alert(msg);
        } else {
            console.error("Login error:", error);
        }
    }
};

export const Product = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get("http://localhost:9595/product");
            dispatch({
                type: GET,
                payload: res.data
            });
        } catch (err) {
            console.error("Error fetching product:", err);
        }
    }
};

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

export const Product_del = (id) => async (dispatch) => {
    try {
        const res = await axios.post(`http://localhost:9595/del/${id}`, {}, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res.data);
    } catch (err) {
        console.error("Delete error:", err);
    }
};

export const Product_edite_get = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:9595/edite/${id}`);
        console.log(res.data);
        dispatch({
            type: "GETTING_PRODUCT",
            payload: res.data
        });
    } catch (err) {
        console.error("Error getting product for edit:", err);
    }
};

export const product_edite_action = (id, state) => async (dispatch) => {
    try {
        console.log(id);
        console.log(state);
        const response = await axios.post(`http://localhost:9595/edite/${id}`, state, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response.data);
        dispatch({
            type: "Edite_Pro",
            payload: response.data.message
        });
    } catch (err) {
        console.error("Error while editing product:", err);
    }
};
