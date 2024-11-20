import React, { useEffect, useState } from 'react'
import Rice from '../assets/rice.jpg'
import axios from 'axios';

function ProductCard() {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const getProduct = async () => {
            try {
                const res = await axios.get("https://greenmarket-magj.onrender.com/get");
                // const res = await axios.get("http://localhost:4001/get");
                console.log(res.data);
                setProduct(res.data);
            } catch(error){
                console.log(error);
            }
        };
        getProduct();
    },[]);


    return (
        <div className=' py-4 flex flex-wrap justify-center gap-8'>
            {
                product.map((product) => (
                    <div key={product.id} className='w-[25vw] bg-white flex flex-col gap-2 shadow-md hover:shadow-xl transition-all duration-500 rounded-lg group'>
                        <div className='h-[60%]'>
                            <img src={product.image} className='rounded-lg' alt="" />
                        </div>
                        <div className='flex flex-col gap-1 p-2'>
                            <div className="flex justify-between">
                                <h2 className='text-xl text-blue-500 group-hover:text-gray-400 font-semibold px-2 '>{product.name}</h2>
                                <span className='flex bg-green-300 text-white w-fit px-2 rounded-md'>
                                    {product.category}
                                </span>
                            </div>
                            <div className="flex justify-between text-gray-600 px-2">
                                <span className='font-bold'>Quantity Available</span>
                                <span>{product.quantity}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 px-2">
                                <span className="font-bold">Price per unit</span>
                                <span className="text-orange-600">Rs {product.price}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 px-2">
                                <span className="font-bold">Unit packet weight</span>
                                <span>{product.weight}kg</span>
                            </div>
                        </div>
                        <button className='bg-green-400 text-white text-xl py-2 rounded-b-lg'>
                            Edit Product
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductCard
