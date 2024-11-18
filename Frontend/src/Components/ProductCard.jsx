import React from 'react'
import Rice from '../assets/rice.jpg'

function ProductCard() {
    return (
        <div className='px-4 py-4 bg-white rounded- w-[20vw] flex flex-col items-center'>
            <div className=''>
                <img src={Rice} className='w-[33vw] sm:w-[18vw]' alt="" />
            </div>
            <h2 className='text-xl'>Rice</h2>
        </div>
    )
}

export default ProductCard
