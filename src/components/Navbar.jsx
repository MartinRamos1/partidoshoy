import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-2 sm:gap-4 p-3 sm:p-4 text-lg sm:text-xl md:text-2xl border-b border-gray-700 bg-[#1A1A1A] text-slate-100">
            <ul className="flex gap-2 sm:gap-4">
                <li>
                    <NavLink to="/" className="hover:text-gray-500 text-lg sm:text-xl md:text-2xl font-semibold">partidoshoy</NavLink>
                </li>
             
            </ul>
        </nav>
    )
}

export default Navbar
