import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductCard() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get("https://greenmarket-magj.onrender.com/get");
                // const res = await axios.get("http://localhost:4001/get");
                console.log(res.data);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, []);

    return (
        <div className="py-8 flex flex-wrap justify-center gap-8">
            {product.map((product) => (
                <div
                    key={product.id}
                    className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-white flex flex-col gap-4 shadow-md hover:shadow-xl transition-all duration-500 rounded-lg group"
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
                    <div className="flex flex-col gap-2 p-4">
                        <div className="flex justify-between">
                            <h2 className="text-lg md:text-xl text-blue-500 group-hover:text-gray-400 font-semibold">
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
                    <button className="bg-green-400 text-white text-base md:text-lg py-3 rounded-b-lg">
                        Edit Product
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
