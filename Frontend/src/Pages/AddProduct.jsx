import React, { useState } from 'react';
import axios from 'axios'
import {toast} from "react-toastify"

function AddProduct() {
    const [data, setData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '', // Updated key
        price: '',
        weight: '', // Updated key
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formdata = new FormData();
        for (let key in data) {
            formdata.append(key, data[key]);
        }
    
        // To log FormData content for debugging:
        const details = Object.fromEntries(formdata);
        console.log(details);
    
        try {
            const response = await axios.post("https://greenmarket-magj.onrender.com/create", details);
    
            // If the request succeeds, handle the success case:
            toast.success("Product added successfully!", {
                position: "bottom-center"
            });
            console.log('Product added successfully:', response.data);
        } catch (error) {
            // Handle the error if the request fails:
            console.error('Error adding product:', error);
            toast.error("Failed to add product!", {
                position: "bottom-center"
            });
        } finally {
            // Add loader logic here if necessary
        }
    };
    

    return (
        <div className="py-8 sm:py-4 bg-gray-100">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 px-4 sm:px-10">Add Products</h1>
            <form onSubmit={handleSubmit} className="bg-gray-100 py-8 px-4 sm:px-10 flex flex-col gap-4">
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        maxLength="20"
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Description:</label>
                    <input
                        type="text"
                        name="description"
                        maxLength="400"
                        value={data.description}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Category:</label>
                    <select
                        name="category"
                        id="cat"
                        value={data.category}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>
                            Select Category
                        </option>
                        <option value="Cereals">Cereals</option>
                        <option value="Pulses">Pulses</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Dry Fruits">Dry Fruits</option>
                        <option value="Fruits">Fruits</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Quantity Available:</label>
                    <input
                        type="number"
                        name="quantity" // Updated name
                        value={data.quantity}
                        max="9999999999999999999999999999999999"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Price per unit:</label>
                    <input
                        type="number"
                        name="price"
                        value={data.price}
                        max="9999999999999999999999999999999999"
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Packet Weight:</label>
                    <input
                        type="number"
                        name="weight" // Updated name
                        value={data.weight}
                        max="9999999999999999999999999999999999"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-gray-700 font-semibold">Product Image Link:</label>
                    <input
                        type="text"
                        name="image"
                        value={data.image}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="submit-button mt-4 p-2 w-full bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default AddProduct;
