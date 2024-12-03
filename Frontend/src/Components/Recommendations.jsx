import React from 'react'
import CatCards from './CatCards'
import categories from "./Categories.json"


function Recommendations() {
    return (
        <div>
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

export default Recommendations
