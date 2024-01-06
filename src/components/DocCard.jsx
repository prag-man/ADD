import Link from 'next/link';
import React from 'react'
import { HiDocumentText } from "react-icons/hi2";
import { CgGames } from "react-icons/cg";
import { FaBookmark } from "react-icons/fa";

const DocCard = ({ link, text, type }) => {
  let icon;
  if (type === "doc") {
    icon = <HiDocumentText className='text-2xl'/>;
  } else if (type === "games") {
    icon = <CgGames className='text-2xl'/>;
  } else if (type === "bm") {
    icon = <FaBookmark className='text-2xl'/>;
  }

  return (
    <a href={link}>
      <div className="p-5 hover:bg-[#fafafa] bg-white rounded-lg flex flex-col gap-4 max-w-[200px] min-w-[150px] h-[150px] text-center text-[#664228] justify-center items-center cursor-pointer">
        {icon}
        <h3>{text}</h3>
      </div>
    </a>
  );
};

export default DocCard