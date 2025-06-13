import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { product_add_action, product_edite_action } from '../Redux/action';

const Product_add = () => {
    const dispatch = useDispatch();
    const product_edite = useSelector(state => state.Product_Edite_getting?.data || {});
    console.log(product_edite);

    const [update, setupdate] = useState(false);
    const [state, setstate] = useState({
        id: "",
        name: "",
        image: [],
        rating: "",
        des: "",
        category: "",
        price: "",
        strike: "",
        quantity: "",
        weight: "",
        tag: "",
    });

    useEffect(() => {
        return () => {
            state.image.forEach(img => {
                if (img.startsWith('blob:')) {
                    URL.revokeObjectURL(img);
                }
            });
        };
    }, [state.image]);

    useEffect(() => {
        if (product_edite?.message) {
            setstate({
                id: product_edite.message._id || "",
                name: product_edite.message.name || "",
                image: product_edite.message.image || [],
                rating: product_edite.message.rating || "",
                des: product_edite.message.des || "",
                category: product_edite.message.category || "",
                price: product_edite.message.price || "",
                strike: product_edite.message.strike || "",
                weight: product_edite.message.weight || "",
                tag: product_edite.message.tag || "",
            });
            setupdate(true);
        }
    }, [product_edite]);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setstate(prev => ({ ...prev, [name]: value }));
    };

    const handleImageLink = (e) => {
        const link = e.target.value.trim();
        if (link !== "") {
            setstate((prev) => ({
                ...prev,
                image: [...prev.image, link],
            }));
            e.target.value = "";
        }
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const urls = files.map(file => URL.createObjectURL(file));
        setstate((prev) => ({
            ...prev,
            image: [...prev.image, ...urls],
        }));
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!state.name || state.image.length === 0) {
            alert("Please provide at least a name and one image");
            return;
        }
        const id = state.id
        console.log(id);

        if (update === false) {
            dispatch(product_add_action(state))
        } else {
            dispatch(product_edite_action(id, state))
        }
    }


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-10">
            <form onSubmit={handlesubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {update ? "Update Product" : "Add New Product"}
                </h2>

                <input type="text" placeholder="Name" name="name" value={state.name} onChange={handlechange} className="w-full p-2 border rounded" required />

                <input type="file" multiple onChange={handleImageUpload} className="w-full p-2 border rounded" accept="image/*" />

                <input type="text" placeholder="Paste image URL and press tab" onBlur={handleImageLink} className="w-full p-2 border rounded" />

                <div className="flex flex-wrap gap-4">
                    {state.image.map((img, i) => (
                        <img key={i} src={img} alt={`preview-${i}`} className="w-24 h-24 object-cover rounded" />
                    ))}
                </div>

                <input type="number" placeholder="Rating" name="rating" value={state.rating} onChange={handlechange} min="1" max="5" step="0.1" className="w-full p-2 border rounded" />

                <label htmlFor="category">Category</label>
                <select onChange={handlechange} value={state.category} name="category" className="w-full p-2 border rounded">
                    <option value="all">All</option>
                    <option value="snack">Snack & Spices</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                </select>

                <input type="text" placeholder="Description" name="des" value={state.des} onChange={handlechange} className="w-full p-2 border rounded" />
                <input type="number" placeholder="Price" name="price" value={state.price} onChange={handlechange} className="w-full p-2 border rounded" min="0" step="0.01" />
                <input type="number" placeholder="Strike" name="strike" value={state.strike} onChange={handlechange} className="w-full p-2 border rounded" min="0" step="0.01" />
                <input type="text" placeholder="Weight" name="weight" value={state.weight} onChange={handlechange} className="w-full p-2 border rounded" />
                <input type="text" placeholder="Tag" name="tag" value={state.tag} onChange={handlechange} className="w-full p-2 border rounded" />

                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    {update ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default Product_add;
