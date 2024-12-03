import React from 'react'

function CatCards({category}) {
    // console.log(category.name);
    return (
        <div className='px-2 sm:px-4 py-2 sm:py-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all bg-green-50'>
            <div className=''>
                <img src={category.image} className='w-[33vw] sm:w-[14vw]' alt={category.name} srcset="" />
            </div>
            <span>{category.name}</span>
        </div>
    )
}

export default CatCards
