import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './Nav';
import Footer from './Footer';
import { Cart_action, single_action } from '../Redux/action';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);


    const product = useSelector(state => state.singelpage_combine.data || {});
    console.log(product);

    useEffect(() => {
        dispatch(single_action(id))
    }, [dispatch, id])

    const handleCart = (product) => {
        dispatch(Cart_action(product));
    };
    return (
        <div>
            <Nav />
            <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 my-3 gap-4 px-4">
                {/* Left Sidebar - Category Section (narrower width) */}
                <div className='xl:col-span-1 lg:col-span-1 md:col-span-1'>
                    <div className='w-full bg-[#F8F8FB] rounded-2xl'>
                        <div className='w-auto p-4 border-b-2'>
                            <h1 className='font-semibold text-xl p-1 text-text'>Category</h1>
                            {["Clothes", "Bags", "Shoes", "Cosmetics", "Electrics", "Phone", "Watch"].map((el, index) => (
                                <div key={index} className='flex justify-start gap-3 ms-3'>
                                    <input type="checkbox" />
                                    <h3 className='text-text'>{el}</h3>
                                </div>
                            ))}
                        </div>

                        <div className='w-auto p-4 border-b-2'>
                            <h1 className='font-semibold text-xl p-1 text-text'>Weight</h1>
                            {["200gm pack", "500gm pack", "1kg pack", "2kg pack", "5kg pack", "10kg pack"].map((el, index) => (
                                <div key={index} className='flex justify-start gap-3 ms-3'>
                                    <input type="checkbox" />
                                    <h3 className='text-text'>{el}</h3>
                                </div>
                            ))}
                        </div>

                        <div className='w-auto p-4 border-b-2'>
                            <h1 className='font-semibold text-xl p-1 text-text'>Color</h1>
                            <div className='flex gap-4 ms-2 flex-wrap'>
                                {[
                                    "#FF5733", "#33FF57", "#3357FF",
                                    "#FF33A6", "#33FFF3", "#A633FF",
                                    "#FFD433", "#FF8C33", "#4CAF50"
                                ].map((el, index) => (
                                    <span
                                        key={index}
                                        className="w-[22px] h-[22px] block rounded-[20px]"
                                        style={{ backgroundColor: el }}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        <div className='w-auto p-4 border-b-2'>
                            <h1 className='font-semibold text-xl p-1 text-text'>Price</h1>
                            <div>
                                <p className='p-3 bg-white flex justify-center rounded-lg'>$130 - $315</p>
                            </div>
                        </div>

                        <div className='w-auto p-4'>
                            <h1 className='font-semibold text-xl p-1 text-text'>Tag</h1>
                            {["Clothes", "Bags", "Shoes", "Cosmetics", "Electrics", "Phone", "Watch"].map((el, index) => (
                                <button
                                    key={index}
                                    className='border bg-transparent p-2 rounded-lg m-1 text-text hover:bg-them hover:text-white transition-all'
                                >
                                    {el}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Content Section (wider width) */}
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-1 h-auto py-6">
                    <div className="w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                            {/* Left Image Section */}
                            <div className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
                                <div className='group relative h-[70vh] w-full overflow-hidden bg-gray-100'>
                                    {product?.image?.length > 0 && (
                                        <img
                                            src={product.image[0]}
                                            alt={product.name || "Product"}
                                            className="object-cover inset-0 absolute top-0 w-full h-full rounded-lg transition-transform duration-500 ease-in-out group-hover:-translate-x-full"
                                        />
                                    )}

                                    {product?.image?.length > 0 && (
                                        <img
                                            src={product.image[0]}
                                            alt={product.name || "Product"}
                                            className="object-cover inset-0 absolute top-0 w-full h-full rounded-lg transition-transform duration-500  ease-in-out group-hover:translate-x-0 translate-x-full"
                                        />
                                    )}

                                </div>
                            </div>

                            {/* Right Details Section */}
                            <div className="flex flex-col justify-between gap-5">
                                {/* Title & Description */}
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                        {product.des}
                                    </h2>
                                    <p className="text-gray-500 mb-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?
                                    </p>

                                    {/* Ratings */}
                                    <div className="text-yellow-500 text-lg mb-3">
                                        {"★".repeat(5)}{" "}
                                        <span className="text-sm text-gray-400">(75 Reviews)</span>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-2 text-gray-700 text-base">
                                        <p>Brand: <span className="text-gray-500">{product.name}</span></p>
                                        <p>Description: <span className="text-gray-500">{product.des}</span></p>
                                        <p>Diet Type: <span className="text-gray-500">Vegetarian</span></p>
                                        <p>Weight: <span className="text-gray-500">{product.weight}</span></p>
                                        <p>Speciality: <span className="text-gray-500">Gluten Free, Sugar Free</span></p>
                                        <p>Info: <span className="text-gray-500">Egg Free, Allergen-Free</span></p>
                                        <p>Items: <span className="text-gray-500">1</span></p>
                                    </div>
                                </div>

                                {/* Price, Sizes, and Cart Button */}
                                <div className="mt-1">
                                    {/* Price */}
                                    <h2 className="text-3xl font-extrabold text-text mb-4">
                                        ${product.price}
                                    </h2>

                                    {/* Size Selection */}
                                    <p className="text-gray-700 font-medium mb-2">Size / Weight:</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["50kg", "80kg", "120kg", "200kg"].map((size, idx) => (
                                            <div
                                                key={idx}
                                                className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium hover:bg-them hover:text-white cursor-pointer transition"
                                            >
                                                {size}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={() => handleCart(product)}
                                        className="w-full bg-text hover:bg-them text-white font-semibold py-3 rounded-md shadow transition"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default SinglePage