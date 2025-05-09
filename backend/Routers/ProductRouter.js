import express from "express"
import { adminValidation } from "../config/Auth.js"
import { AddProduct, All_product, cart } from "../Controller/Product.js"

export const ProductRouter = express.Router()
ProductRouter.post("/add", adminValidation, AddProduct)
ProductRouter.get("/get", All_product)
ProductRouter.get("/get", cart)