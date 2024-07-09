import Image from"next/image"
import cart from "/public/images/cart.png"
import Link from "next/link"
export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-[0.5rem] p-2 fixed z-20 right-0 top-0 bg-[white] w-[100%]">
   <Link href="/cart"><Image width={32} height={32} className="w-[32px] h-[32px]" src={cart} alt="Cart" /></Link>
    <div className="bg-[purple] rounded-full w-[35px] h-[35px] md:w-[40px] md:h-[40px] ml-2 flex justify-center items-center">
      <p className="text-white text-center">F</p>
    </div>
  </div>
  )
}
