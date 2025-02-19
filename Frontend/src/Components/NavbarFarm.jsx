import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.jpg"
import Logo2 from "../assets/fav.jpg"
import { CiLogin } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
import { FaBox, FaPeopleCarry } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'
import { AiOutlineProduct } from 'react-icons/ai'
import { RiMenu3Fill } from 'react-icons/ri'


function NavbarFarm() {
    const [open, setOpen] = useState(false);
    return (
        <nav className='h-[7vh] sm:h-[10vh] w-[100vw] sm:w-auto sticky top-0 bg-green-400 flex items-center justify-between z-10'>
            <div className='bg-white inline-block'>
                <NavLink to='/'>
                    <img src={Logo} alt="logo" className='hidden sm:block w-36 h-[7vh] sm:h-[10vh]' srcset="" />
                    <img src={Logo2} alt="logo2" className='block sm:hidden w-10 h-[7vh]' />
                </NavLink>
            </div>
            <div className={`mx-4 px-10 w-[90vw] z-auto absolute h-[105vh] sm:h-full md:w-[85vw] lg:w-[60vw] bg-green-400 text-white  flex gap-4 sm:gap-0 flex-col transition-all sm:flex-row  top-0 sm:static sm:justify-between items-center ${open ? 'left-[-10%]' : 'left-[-110%]'} `}>
                <div className='flex sm:hidden mt-6 cursor-pointer text-2xl' onClick={() => setOpen(!open)}>
                    <IoClose/>
                </div>
                <NavLink to='/addProduct' className='flex sm:w-[12vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <IoMdAdd />
                    </div>
                    Add Products
                </NavLink>
                <NavLink to='/products' className='flex sm:w-[12vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <AiOutlineProduct />
                    </div>
                    My Products
                </NavLink>
                <NavLink to='/order' className='flex sm:w-[8vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <FaBox />
                    </div>
                    Orders
                </NavLink>
                <NavLink to='/login' className=' flex sm:w-[8vw] py-2 items-center text-blue-500 rounded-md'>
                    <div className="icon mx-2">
                        <CiLogin />
                    </div>
                    LogIn
                </NavLink>
                <NavLink to='/consumer' className='flex sm:w-[16vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <FaPeopleCarry />
                    </div>
                    Are you a consumer ?
                </NavLink>
            </div>
            <div className={`block sm:hidden cursor-pointer px-4 text-white font-bold ${open ? 'hidden' : 'block'}`} onClick={() => setOpen(!open)}>
                <RiMenu3Fill />
            </div>
        </nav>
    )
}

export default NavbarFarm
