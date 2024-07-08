import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import cart from "/public/images/cart.png"
import heart from "/public/images/heart.png"
import logo from "/public/images/logo.png"
export default function NavbarCheckout() {
  return (
    <div className=" bg-[white] flex items-center justify-between pl-8 pr-8 pt-4">
      <div className="flex items-center">
      <h2 className="text-[purple] font-extrabold text-[15px] font-dm-serif sm:hidden ">
              Pick n buy
            </h2>
      <Image width={32} height={32} className="w-[20px] md:w-auto" src={logo} alt="" />
      </div>
      
      <div className=" items-center justify-center bg-[white] rounded-[10px]  hidden md:flex">
        <div className=" flex cursor-pointer border-[2px] border-[brown]flex justify-normal items-center gap-[6rem] w-[550px] bg-gray rounded-[10px] p-2">
          <div className="cursor-pointer">
          <CiSearch />
          </div>
          <input
            className="border-0 outline-none cursor-pointer bg-gray"
            type="text"
            placeholder="Sneakers"
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-[1rem] ">
        <Image width={32} height={32} className="md:w-[32px] md:h-[32px] w-[20px]" src={heart} alt="Logo" />
        <Image width={32} height={32} className="md:w-[32px] md:h-[32px] w-[20px]" src={cart} alt="Cart" />
        <div className="bg-[purple] rounded-full md:w-[45px] md:h-[45px] w-[20px] h-[20px] flex justify-center items-center">
          <p className="text-white text-center text-sm md:text-md">F</p>
        </div>
      </div>
    </div>
  );
}
