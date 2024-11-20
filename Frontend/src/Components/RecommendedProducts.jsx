import React from 'react'
import CatCards from './CatCards'
import categories from "./Categories.json"

function RecommendedProducts() {
    // console.log(categories);

    return (
        <div className='px-4 py-8 sm:p-10 mt-[5vh]'>
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-500'>Recommended Products</h1>
            <p className='mt-4'>According to your location the following products categories are most searched:</p>
            <div className='flex flex-wrap gap-4 sm:gap-2 justify-evenly mt-5'>
                {
                    categories.map((category) => (
                        <CatCards key={category.id} category={category} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendedProducts
