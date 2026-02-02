import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center gap-4 p-4 text-2xl border-b border-gray-500 bg-[#1A1A1A] text-slate-100">
            <ul className="flex gap-4">
                <li>
                    <NavLink to="/" className="hover:text-gray-500 text-2xl font-semibold">Inicio</NavLink>
                </li>
             
            </ul>
        </nav>
    )
}

export default Navbar