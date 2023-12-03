import Image from "next/image"


const BenifitCard = ({img, text}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 px-10 hover:text-[#664228] py-5 hover:bg-gradient-to-t from-[#F0E3D599] to-white">
        <div className="relative h-14 w-14">
            <Image src={img} fill alt='cardImage' />
        </div>
        <p className="text-lg font-semibold ">{text}</p>
    </div>
  )
}

export default BenifitCard