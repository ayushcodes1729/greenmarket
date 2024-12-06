import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.jpg"
import Logo2 from "../assets/fav.jpg"
import { CiLogin, CiSearch } from 'react-icons/ci'
import { IoCartOutline, IoClose } from 'react-icons/io5'
import { FaPeopleCarry } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className='h-[7vh] sm:h-[10vh] w-[100vw] sm:w-auto sticky top-0 bg-green-400 flex items-center justify-between z-10'>
            <div className='bg-white inline-block'>
                <NavLink to='/consumer'>
                    <img src={Logo} alt="logo" className='hidden sm:block w-36' srcset="" />
                    <img src={Logo2} alt="logo2" className='block sm:hidden w-10 h-[7vh]' />
                </NavLink>
            </div>
            <div className="search w-[70vw] sm:w-[40vw] px-2 flex items-center rounded-lg bg-white">
                    <div className="icon text-gray-400 text-2xl sm:text-4xl">
                        <CiSearch />
                    </div>
                    <input type="text" className='outline-none rounded-lg h-[5vh] sm:h-[7vh] text-lg px-2 w-full' placeholder='Search for Products' />
                </div>
            <div className={`mx-4 sm:px-10 w-[90vw] z-auto absolute h-[105vh] sm:h-full md:w-[80vw] lg:w-[35vw] bg-green-400 text-white  flex gap-4 sm:gap-0 flex-col transition-all sm:flex-row  top-0 sm:static sm:justify-between items-center ${open ? 'left-[-10%]' : 'left-[-110%]'} `}>
                <div className='flex sm:hidden mt-6 cursor-pointer text-2xl' onClick={() => setOpen(!open)}>
                    <IoClose />
                </div>
                <div className='mx-4 w-[60vw] sm:w-[30vw] flex flex-col gap-5 sm:flex-row justify-between'>
                    <NavLink to='/consumer/login' className=' flex w-full sm:w-[7vw] py-2 items-center text-white rounded-md'>
                        <div className="icon mx-2">
                            <CiLogin />
                        </div>
                        LogIn
                    </NavLink>
                    <NavLink to='/consumer/cart' className='flex w-full sm:w-[7vw] py-2 items-center text-white rounded-md'>
                        <div className="icon mx-2">
                            <IoCartOutline />
                        </div>
                        Cart
                    </NavLink>
                    <NavLink to='/' className='flex w-full sm:w-[15vw] py-2 items-center text-white rounded-md'>
                        <div className="icon mx-2">
                            <FaPeopleCarry />
                        </div>
                        Are you a Farmer ?
                    </NavLink>
                </div>
            </div>
            <div className={`block sm:hidden cursor-pointer px-4 text-white font-bold ${open ? 'hidden' : 'block'}`} onClick={() => setOpen(!open)}>
                <RiMenu3Fill />
            </div>
        </nav>
    )
}

export default Navbar
