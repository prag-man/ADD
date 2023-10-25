import Image from "next/image";

const { default: Link } = require("next/link");

const Nav = () => {
  return (
    <div className="h-[70px] mx-32 px-10 bg-white flex justify-between items-center border-b-[1px] border-slate-300">
        <div className="flex gap-5 items-center">
            <div className="relative h-12 w-12">
              <Image src={'/images/Anuvrat_Logo-removebg-preview.png'} alt="logo" fill />
            </div>
            <h4 className="text-xl font-semibold">Anuvrat</h4>
        </div>
        <div className="flex gap-5 items-center">
            <Link href={'/resources'} className="text-xl font-semibold">Resources</Link>
            <Link href={'/about'} className="text-xl font-semibold">About</Link>
        </div>
    </div>
  );
}

export default Nav