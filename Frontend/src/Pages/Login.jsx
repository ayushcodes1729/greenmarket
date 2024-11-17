import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

function Login() {
    const [view, setView] = useState(false);
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePhoneNumber = (number) => {
        const re = /^\d{10}$/;
        return re.test(String(number));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Handle login logic here
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const number = e.target.number.value;
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!validatePhoneNumber(number)) {
            alert("Please enter a valid phone number.");
            return;
        }
        // Handle signup logic here
    };
    return (
        <div className="flex justify-center sm:items-center sm:min-h-screen pt-16 sm:pt-20 bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className={`${view ? 'hidden' : 'block'}`}>
                    <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Login</h2>
                    <form className="mb-4" onSubmit={handleLoginSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email ID:</label>
                            <input type="email" name="email" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password:</label>
                            <input type="password" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 mb-4 rounded hover:bg-blue-600">Login</button>
                        <div onClick={() => setView(!view)}>
                            <NavLink className="text-blue-500">
                                New User? Sign-Up
                            </NavLink>
                        </div>
                    </form>
                </div>
                <div className={`${view ? 'block' : 'hidden'}`} >
                    <h2 className="text-3xl font-bold mb-6 text-center text-green-500">Signup</h2>
                    <form onSubmit={handleSignupSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name:</label>
                            <input type="text" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Number:</label>
                            <input type="tel" name="number" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">City:</label>
                            <input type="text" name="city" required className="w-full px-3 py-2 border rounded" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email:</label>
                            <input type="email" name="email" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password:</label>
                            <input type="password" required className="w-full px-3 py-2 border rounded" />
                        </div>
                        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-4">Signup</button>
                        <div onClick={() => setView(!view)}>
                            <NavLink className="text-blue-500">
                                Already a user ? Log-in
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
