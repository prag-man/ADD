import Image from "next/image";

const { default: Link } = require("next/link");

const Nav = () => {
  return (
    <div className="h-[70px] md:mx-32 md:px-10 px-5 bg-white flex justify-between items-center border-b-[1px] border-slate-300">
      <Link href={'/'}>
        <div className="flex md:gap-5 gap-2 items-center">
              <div className="relative md:h-12 md:w-12 h-8 w-8">
                <Image src={'/images/Anuvrat_Logo-removebg-preview.png'} alt="logo" fill />
              </div>
              <h4 className="md:text-xl font-semibold md:block hidden">Anuvrat Vishva Bharati Society</h4>
              <h4 className="md:text-xl font-semibold md:hidden block">Anuvrat</h4>
        </div>
      </Link>
        <div className="flex md:gap-5 gap-2 items-center">
            <Link href={'/resources'} className="md:text-xl font-semibold">Resources</Link>
            <Link href={'/about'} className="md:text-xl font-semibold">About</Link>
        </div>
    </div>
  );
}

export default Nav