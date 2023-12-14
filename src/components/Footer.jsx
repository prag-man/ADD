import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[70px] md:px-10 px-5 bg-white flex justify-between items-center ">
      <Link href={'/'}>
        <div className="flex md:gap-5 gap-2 items-center">
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/anuvibha.png'} alt="logo" fill />
              </div>
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/Anuvrat_Logo-removebg-preview.png'} alt="logo" fill />
              </div>
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/amrit.png'} alt="logo" fill />
              </div>
              <h4 className="md:text-xl text-[#2A166F] font-semibold md:block hidden">Anuvrat Vishva Bharati Society</h4>
        </div>
      </Link>
      <div>
            <a href='tel:+917045291313' className="md:text-xl font-semibold text-[#664228CC] flex gap-3 items-center">
              <div className="relative h-5 w-5">
                <Image src={'/images/call.png'} alt="phone" fill />
              </div>
              <p>7045291313</p>
            </a>
        </div>
        {/* <div className="flex md:gap-5 gap-2 items-center opacity-50">
              <Link href={'https://instagram.com/anuvrat_digitaldetox'}><FaInstagram size={40} color="#664228" /></Link>
              <Link href={'https://www.facebook.com/anuvibha.page?mibextid=ZbWKwL'}><FaFacebook size={38} color="#664228" /></Link>
              <Link href={'https://youtube.com/@ANUVIBHA?si=qQYoxKXgqOdXtIAG'}><FaYoutube size={48} color="#664228" /></Link>
        </div> */}
    </div>
  )
}

export default Footer