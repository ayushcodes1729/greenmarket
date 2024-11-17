import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { CiLogin, CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { FaPeopleCarry } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className='h-[10vh] bg-green-400 flex items-center justify-between'>
            <div className='bg-white inline-block'>
                <NavLink to='/'>
                    <img src={Logo} alt="logo" className='w-24' srcset="" />
                </NavLink>
            </div>
            <div className="search w-[40vw] px-2 flex items-center rounded-lg bg-white">
                <div className="icon text-gray-400 text-4xl">
                    <CiSearch />
                </div>
                <input type="text" className='outline-none rounded-lg h-[7vh] text-lg px-2 w-full' placeholder='Search for Products' />
            </div>
            <div className='mx-4 w-[30vw] flex justify-between'>
                <NavLink to='/' className=' flex w-[7vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <CiLogin />
                    </div>
                    LogIn
                </NavLink>
                <NavLink to='/' className='flex w-[7vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <IoCartOutline />
                    </div>
                    Cart
                </NavLink>
                <NavLink to='/' className='flex w-[15vw] py-2 items-center text-white rounded-md'>
                    <div className="icon mx-2">
                        <FaPeopleCarry />
                    </div>
                    Are you a consumer ?
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
