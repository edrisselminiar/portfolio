import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import LogoIng from "../assets/logo.png";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="     bg-black fixed top-0 left-0 right-0 z-50 text-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div className=" m-3 font-bold text-lg xl:text-3xl ">
              <pre>
                 <span className="text-[#6d28d9]">
                      &lt;
                 </span>
                  DRISS
                  <span className="text-[#6d28d9] ">/
                  </span>
                  ELMINIAR
                  <span className="text-[#6d28d9] ">
                    &gt;
                 </span>
              </pre>
            </div>


            <div className=" flex">

            <div
              className={` fixed mr-4 nav-links duration-500 md:static md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex  px-5   ${toggle ? ' flex justify-center items-center w-[92%] mx-auto  mt-auto text-center top-[5.6%] bg-white text-black' : ''}`}>
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <a className="hover:text-[#7e22ce]" href="#About">About</a>
                </li>
                <li>
                  <a className="hover:text-[#7e22ce]" href="#Skills">Skills</a>
                </li>
                <li>
                  <a className="hover:text-[#7e22ce]" href="#Projects">Projects</a>
                </li>
                <li>
                  <a className="hover:text-[#7e22ce]" href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">        
              <button class="bg-transparent hover:bg-[#7e22ce] text-[#7e22ce] font-semibold hover:text-white py-2 px-4 border border-[#7e22ce] hover:border-transparent rounded-xl">
                  Github Profile
              </button>
              <AiOutlineMenu className="text-3xl cursor-pointer md:hidden" onClick={handleToggle} />
            </div> 


            </div>
           
      </nav>
    </header>
  );
};

export default Header;