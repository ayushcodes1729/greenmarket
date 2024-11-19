import React from 'react'
import Rice from '../assets/rice.jpg'

function ProductCard() {
    const Products = [
        {
            id: 1,
            name: 'Rice',
            category: 'Cereals',
            quantity: '120',
            price: '28',
            weight: '5'
        },
        {
            id: 2,
            name: 'Wheat',
            category: 'Cereals',
            quantity: '200',
            price: '32',
            weight: '8'
        },
        {
            id: 3,
            name: 'Oats',
            category: 'Cereals',
            quantity: '90',
            price: '45',
            weight: '3'
        },
        {
            id: 4,
            name: 'Corn',
            category: 'Cereals',
            quantity: '150',
            price: '25',
            weight: '7'
        },
        {
            id: 5,
            name: 'Lentils',
            category: 'Pulses',
            quantity: '100',
            price: '60',
            weight: '4'
        },
        {
            id: 6,
            name: 'Chickpeas',
            category: 'Pulses',
            quantity: '80',
            price: '55',
            weight: '6'
        },
        {
            id: 7,
            name: 'Kidney Beans',
            category: 'Pulses',
            quantity: '70',
            price: '70',
            weight: '5'
        },
        {
            id: 8,
            name: 'Apples',
            category: 'Fruits',
            quantity: '50',
            price: '120',
            weight: '10'
        },
        {
            id: 9,
            name: 'Bananas',
            category: 'Fruits',
            quantity: '60',
            price: '40',
            weight: '15'
        },
        {
            id: 10,
            name: 'Potatoes',
            category: 'Vegetables',
            quantity: '250',
            price: '20',
            weight: '12'
        }
    ];


    return (
        <div className=' py-4 flex flex-wrap justify-center gap-8'>
            {
                Products.map((product) => (
                    <div key={product.id} className='w-[25vw] bg-white flex flex-col gap-2 shadow-md hover:shadow-xl transition-all duration-500 rounded-lg group'>
                        <div className=''>
                            <img src={Rice} className='rounded-lg' alt="" />
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
