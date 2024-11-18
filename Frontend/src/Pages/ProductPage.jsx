import React from 'react'
import ProductCard from '../Components/ProductCard'

function ProductPage() {
    return (
        <div className=' py-8 sm:py-4 px-4 sm:px-10 bg-gray-100'>
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-500'>Listed Products for sales:</h1>
            <ProductCard/>
        </div>
    )
}

export default ProductPage
