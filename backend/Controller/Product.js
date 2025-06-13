import { CartModel } from "../modules/CartModel.js";
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
        const { category } = req.query
        // console.log(category)
        if (category) {
            const data = await ProductModel.find({ category: category });
            console.log(data);
            return res.send({ message: "Products Filtered", data: data });
        }
        else {
            const data = await ProductModel.find().limit(8)
            return res.send({ message: "Products fetched", data: data });
        }
    } catch (err) {
        return res.status(500).send({ message: "Something went wrong", error: err });
    }
}

export const Del = async (req, res) => {
    try {
        const { id } = req.params

        const data = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({ message: data })
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", error: err });
    }

}
export const edite_get = async (req, res) => {
    try {
        const { id } = req.params

        const data = await ProductModel.findById(id)
        console.log(data);

        res.status(200).json({ message: data })
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong", error: err });
    }

}

export const edite_post = async (req, res) => {
    const { id } = req.params
    const message = await ProductModel.findByIdAndUpdate(id, req.body)
    res.status(200).json({ message: message })

}
// export const Prouduct_Filter = async (req, res) => {
//     const { category } = req.query
//     console.log(category);
//     const data = await ProductModel.find({ category: category })


// }

export const cart = async (req, res) => {
    const userId = req.user.userId;
    const { Product, quantity } = req.body;

    try {

        const exist = await CartModel.findOne({
            "Product._id": Product._id,
            user: userId
        });

        if (exist) {

            const updated = await CartModel.findByIdAndUpdate(
                exist._id,
                { $inc: { quantity: quantity || 1 } },
                { new: true }
            );

            return res.status(200).send({
                message: "Product quantity updated in cart",
                data: updated
            });

        } else {

            const newCart = await CartModel.create({
                Product,
                quantity: quantity || 1,
                user: userId
            });

            return res.status(201).send({
                message: "Product added to cart",
                data: newCart
            });
        }

    } catch (error) {
        console.error("Error in cart controller:", error);
        return res.status(500).send({ message: "Internal Server Error", error });
    }
};




export const cart_particular = async (req, res) => {
    const userId = req.user.userId;

    try {
        const cartData = await CartModel.find({ user: userId })

        res.status(200).send({
            message: "User specific cart fetched",
            data: cartData
        });
    } catch (err) {
        console.error("Error fetching cart:", err);
        res.status(500).send({ message: "Internal Server Error", error: err });
    }
};
