import express from "express"
import { adminValidation } from "../config/Auth.js"
import { AddProduct, All_product, cart, Del, edite_get, edite_post } from "../Controller/Product.js"

export const ProductRouter = express.Router()
ProductRouter.post("/add", adminValidation, AddProduct)
ProductRouter.post("/del/:id", Del)
ProductRouter.post("/edite/:id", edite_post)
ProductRouter.get("/edite/:id", edite_get)
ProductRouter.get("/product", All_product)
ProductRouter.get("/cart", cart)