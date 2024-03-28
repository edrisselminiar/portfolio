import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="   bg-white font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] ">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>
            <div
              className={` fixed z-50  nav-links duration-500 md:static  bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${toggle ? 'top-[6.5%]' : ''}`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <Link className="hover:text-gray-500" to="#">Products</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" to="#">Solution</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" to="#">Resource</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" to="#">Developers</Link>
                </li>
                <li>
                  <Link className="hover:text-gray-500" to="#">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
              <AiOutlineMenu className="text-3xl cursor-pointer md:hidden" onClick={handleToggle} />
            </div> 
      </nav>
    </header>
  );
};

export default Header;