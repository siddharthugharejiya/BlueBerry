import { ProductModel } from "../modules/ProductModel.js"


export const AddProduct = async (req, res) => {
    try {
        console.log(req.body);

        const data = await ProductModel.create({ ...req.body, user: req.user.userId })

        return res.send({ message: "Product Add successfully", data: data })
    }
    catch (error) {
        return res.send(error)
    }

}
export const All_product = async (req, res) => {
    try {


        // const userId = req.user.userId;
        // console.log("Logged in user:", userId);

        const data = await ProductModel.find()

        return res.send({ message: "Products fetched", data: data });
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong", error: err });
    }
}


export const cart = async (req, res) => {
    const userId = req.user.userId
    console.log("Logged in user:", userId)

    const data = await ProductModel.find({ user: userId }).populate("user")
    res.send(data)
}