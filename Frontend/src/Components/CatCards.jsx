import React from 'react'
import rice from '../assets/rice.jpg'

function CatCards({category}) {
    // console.log(category.name);
    return (
        <div className='px-2 sm:px-4 py-2 sm:py-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all bg-green-50'>
            <div className=''>
                <img src={rice} className='w-[33vw] sm:w-[14vw]' alt="" srcset="" />
            </div>
            <span>{category.name}</span>
        </div>
    )
}

export default CatCards
