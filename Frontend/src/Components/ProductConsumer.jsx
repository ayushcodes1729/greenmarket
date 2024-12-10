import React, { useState, useEffect } from 'react'
import axios from "axios";
import Spinner from "./Spinner";
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch } from "react-redux"
import { AddCart } from '../Redux/CartSystem';

function ProductConsumer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("https://greenmarket-magj.onrender.com/get");
                const normalizedProducts = res.data.map(product => ({
                    ...product,
                    id: product._id, // Use `id` consistently
                }));
                setProduct(normalizedProducts);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, []);
    

    return (
        <>
            {loading ? (<Spinner loading={loading} />) :
                (
                    <div className="py-8 flex flex-wrap justify-center gap-8">

                        {product.map((product) => (
                            <div
                                key={product.id}
                                className="w-[90%] md:w-[45%] lg:w-[30%] bg-white flex flex-col gap-4 shadow-md hover:shadow-xl transition-all duration-500 rounded-lg group"
                            >
                                {/* Image Section */}
                                <div className="h-48 md:h-60 lg:h-64">
                                    <img
                                        src={product.image}
                                        className="h-full w-full object-cover rounded-t-lg"
                                        alt={product.name}
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col flex-grow gap-2 p-4">
                                    <div className="flex justify-between">
                                        <h2 className="text-lg md:text-xl overflow-hidden text-blue-500 group-hover:text-gray-400 font-semibold">
                                            {product.name}
                                        </h2>
                                        <span className="bg-green-300 text-white text-sm md:text-base px-2 py-1 rounded-md">
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span className="font-bold text-sm md:text-base">
                                            Quantity Available
                                        </span>
                                        <span className="text-sm md:text-base">{product.quantity}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span className="font-bold text-sm md:text-base">
                                            Price per unit
                                        </span>
                                        <span className="text-orange-600 text-sm md:text-base">
                                            Rs {product.price}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span className="font-bold text-sm md:text-base">
                                            Unit Packet Weight
                                        </span>
                                        <span className="text-sm md:text-base">{product.weight}kg</span>
                                    </div>
                                </div>

                                {/* Edit Button */}
                                <button className="flex items-center justify-center gap-3 bg-green-400 text-white text-base md:text-lg py-3 rounded-b-lg" onClick={() => {
                                    console.log("Adding product:", product);
                                    dispatch(AddCart(product));
                                }}
                                >
                                    <div className='text-3xl'>
                                        <IoCartOutline />
                                    </div>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                )
            }
        </>
    )
}

export default ProductConsumer
