'use client'
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const { default: Link } = require("next/link");

const Nav = () => {

  const [navToggle, setNavToggle] = useState(false);

  return (
    <>
    <div className="h-[70px] md:mx-20 md:px-10 px-5 bg-white flex justify-between items-center border-b-[1px] border-slate-300">
      <Link href={'/'}>
        <div className="flex md:gap-5 gap-2 items-center">
             <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/anuvibha.png'} alt="logo" fill />
              </div>
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/Anuvrat_Logo-removebg-preview.png'} alt="logo" fill />
              </div>
              <h4 className="md:text-xl text-[#2A166F] font-semibold md:block hidden">Anuvrat Vishva Bharati Society</h4>
              <h4 className="md:text-xl text-[#2A166F] font-semibold md:hidden block">Anuvrat</h4>
        </div>
      </Link>
        <div className="hidden md:flex md:gap-8 gap-2 items-center">
            <Link href={'/#vision'} className="md:text-xl font-semibold">Our Vision</Link>
            <Link href={'/#vision'} className="md:text-xl font-semibold">Mission</Link>
            <Link href={'/resources'} className="md:text-xl font-semibold">About Us</Link>
            <Link href={'/#gallery'} className="md:text-xl font-semibold">Gallery</Link>
            <Link href={'/resources'} className="md:text-xl font-semibold">Resources</Link>
        </div>
        <div>
            <a href='tel:+919653852087' className="md:text-xl font-semibold text-[#664228CC] flex gap-3 items-center">
              <div className="relative h-5 w-5">
                <Image src={'/images/call.png'} alt="phone" fill />
              </div>
              <p>9653852087</p>
            </a>
        </div>
        <div className="md:hidden">
          <FaBars className="md:text-xl font-semibold cursor-pointer" onClick={() => {setNavToggle(!navToggle)}} />
        </div>
    </div>
    <div className={`top-0 right-0 bg-white w-[60%] h-screen z-10 p-5 fixed ${navToggle? 'block' : 'hidden'}`}>
      <div className="flex justify-end">
        <FaTimes className="md:text-xl font-semibold cursor-pointer" onClick={() => {setNavToggle(!navToggle)}} />
      </div>
        <div className="flex flex-col mt-10 gap-2">
            <Link href={'/#vision'} className="md:text-xl font-bold">Our Vision</Link>
            <Link href={'/#vision'} className="md:text-xl font-bold">Mission</Link>
            <Link href={'/about'} className="md:text-xl font-bold">About Us</Link>
            <Link href={'/#gallery'} className="md:text-xl font-bold">Gallery</Link>
            <Link href={'/resources'} className="md:text-xl font-bold">Resources</Link>
        </div>
    </div>
    </>
  );
}

export default Nav