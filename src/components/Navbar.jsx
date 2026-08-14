import { NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar(){

    return(
        <div className="w-full bg-[#0F172A] text-white flex justify-center items-center p-3">
            <div className=" w-[64%] flex justify-between items-center border border-amber-50">
                <div>
                    <NavLink to="/">
                        <img src="src/assets/logo.png" alt="hero img" className="w-40"/>
                    </NavLink>
                </div>
                
                <div className="flex justify-center items-center gap-1 lg-gap-10">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/cart">
                         <FaShoppingCart className="text-2xl"/>

                    </NavLink>
                </div>
            </div>
        </div>
    )
}