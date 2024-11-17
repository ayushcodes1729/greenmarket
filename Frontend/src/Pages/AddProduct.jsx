import React from 'react'

function AddProduct() {
    return (
        <div className=' py-8 sm:py-4 bg-gray-100'>
            <h1 className='text-3xl sm:text-4xl font-bold text-blue-500 px-4 sm:px-10'>Add Products</h1>
            <form action="" className='bg-gray-100 py-8 px-4 sm:px-10 flex flex-col gap-4'>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Name:</label>
                    <input type="text" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Description:</label>
                    <input type="text" name="name" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Category:</label>
                    <select name="subcategory" id="cat" className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="" disabled selected>Select Category</option>
                        <option value="Cosmatic">Cereals</option>
                        <option value="Aruvedic Medicine">Aruvedic Medicine</option>
                        <option value="Cosmatic">Cosmatic</option>
                        <option value="Aruvedic Medicine">Aruvedic Medicine</option>
                        <option value="Cosmatic">Cosmatic</option>
                        <option value="Aruvedic Medicine">Aruvedic Medicine</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Quantity Avaialable:</label>
                    <input type="number" name="quantity" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Price per unit:</label>
                    <input type="number" name="price" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Packet Weight:</label>
                    <input type="number" name="wieght" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Product Image Link:</label>
                    <input type="text" name="image" required className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="submit-button mt-4 p-2 w-full bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Add Product</button>
            </form>
        </div>
    )
}

export default AddProduct
