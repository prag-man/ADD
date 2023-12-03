import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[70px] md:mx-20 md:px-10 px-5 bg-white flex justify-between items-center ">
      <Link href={'/'}>
        <div className="flex md:gap-5 gap-2 items-center">
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/Anuvrat_Logo-removebg-preview.png'} alt="logo" fill />
              </div>
              <h4 className="md:text-xl text-[#2A166F] font-semibold md:block hidden">Anuvrat Vishva Bharati Society</h4>
              <h4 className="md:text-xl text-[#2A166F] font-semibold md:hidden block">Anuvrat</h4>
        </div>
      </Link>
        <div className="flex md:gap-5 gap-2 items-center opacity-50">
              <Link href={'/'}><FaInstagram size={40} color="#664228" /></Link>
              <Link href={'/'}><FaFacebook size={38} color="#664228" /></Link>
        </div>
    </div>
  )
}

export default Footer