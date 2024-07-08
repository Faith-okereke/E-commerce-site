import Image from"next/image"
import cart from "/public/images/cart.png"
import heart from "/public/images/heart.png"
export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-[1rem] pt-2 fixed z-20 right-0 top-0 bg-[white] w-[100%]">
    <Image width={32} height={32} className="w-[32px] h-[32px]" src={heart} alt="Logo" />
    <Image width={32} height={32} className="w-[32px] h-[32px]" src={cart} alt="Cart" />
    <div className="bg-[purple] rounded-full w-[35px] h-[35px] md:w-[45px] md:h-[45px] ml-2 flex justify-center items-center">
      <p className="text-white text-center">F</p>
    </div>
  </div>
  )
}
