import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="bg-green-700 text-white">
            {/* Footer Content */}
            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Logo Section */}
                <div className=' inline-block'>
                    <NavLink to='/'>
                        <img src={Logo} alt="logo" className='w-16 sm:w-24 h-[7vh] sm:h-[10vh]' srcset="" />
                    </NavLink>
                    <p className='mt-4'>Empowering Farmers, Growing Together.</p>
                </div>

                {/* Useful Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="/add-product" className="hover:underline">
                                Add Product
                            </a>
                        </li>
                        <li>
                            <a href="/my-products" className="hover:underline">
                                View My Products
                            </a>
                        </li>
                        <li>
                            <a href="/orders" className="hover:underline">
                                View Orders
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Map Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                    <iframe
                        title="Farm Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509456!2d144.9556515158446!3d-37.81731374201547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b0f7af3e3e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1687893312865!5m2!1sen!2sau"
                        className="w-full h-40 border-0 rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-green-900 text-center py-4">
                <p className="text-sm">&copy; 2024 FarmerPortal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
