import React from 'react'

function Sales() {

    const Products = [
        {
            id : 1,
            name : 'Wheat',
            qnt : 60,
            ppKg : 10
        },
        {
            id : 2,
            name : 'Rice',
            qnt : 55,
            ppKg : 11
        },
        {
            id : 3,
            name : 'Bajra',
            qnt : 21,
            ppKg : 13
        },
        {
            id : 4,
            name : 'Corn',
            qnt : 30,
            ppKg : 8
        },
    ]
    return (
        <div className='px-4 py-8 sm:p-10'>
            <div className="flex">
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-500'>Total Sales:</h1>
            
            </div>
            <table className='flex flex-col mt-4 gap-1 w-[90vw] [&>*:nth-child(odd)]:bg-green-50 [&>*:nth-child(even)]:bg-sky-50'>
                <tr className='flex justify-between py-2 text-lg     sm:text-xl'>
                    <th className='w-[28vw] sm:w-[20vw]'>Product</th>
                    <th className='w-[28vw] sm:w-[20vw]'>Quantity(in Kg)</th>
                    <th className='w-[28vw] sm:w-[20vw]'>Sales</th>
                </tr>
                {
                    Products.map((e)=>(
                        <tr key={e.id} className='flex justify-between py-2 text-lg'>
                            <td className='w-[28vw] sm:w-[20vw] text-center'>{e.name}</td>
                            <td className='w-[28vw] sm:w-[20vw] text-center'>{e.qnt}</td>
                            <td className='w-[28vw] sm:w-[20vw] text-center'>{e.qnt * e.ppKg}Rs</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default Sales
