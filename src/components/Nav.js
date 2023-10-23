const { default: Link } = require("next/link");

const Nav = () => {
  return (
    <div className="h-[70px] px-10 w-full bg-background flex justify-between items-center border-b-[1px] border-slate-300">
        <div className="flex gap-5 items-center">
            <h1>Logo</h1>
        </div>
        <div className="flex gap-5 items-center">
            <Link href={'/resources'}>Resources</Link>
            <Link href={'/about'}>About</Link>
        </div>
    </div>
  );
}

export default Nav