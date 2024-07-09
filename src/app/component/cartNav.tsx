import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import cart from "/public/images/cart.png"
import logo from "/public/images/Logo.png"
import Link from "next/link";
export default function NavbarCheckout() {
  return (
    <div className=" bg-[white] flex items-center justify-between pl-4 pr-4 pt-3">
      <div className="flex items-center">
      <h2 className="text-[purple] font-extrabold text-[15px]">
              Pick n buy
            </h2>
      <Image width={200} height={200} className="w-[20px] md:w-auto" src={logo} alt="" />
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
      <div className="flex justify-end items-center gap-[1rem]">
       <Link href="/cart"><Image width={32} height={32} className="md:w-[32px] md:h-[32px] w-[20px]" src={cart} alt="Cart" /></Link> 
        <div className="bg-[purple] rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] flex justify-center items-center">
          <p className="text-white text-center text-sm md:text-md">F</p>
        </div>
      </div>
    </div>
  );
}
