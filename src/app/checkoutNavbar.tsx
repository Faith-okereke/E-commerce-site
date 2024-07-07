import { FaSearch } from "react-icons/fa";
import Image from "next/image";
export default function NavbarCheckout() {
  return (
    <div className=" bg-[white] w-screen flex items-center justify-between p-2">
      <img src="images/Logo.png" alt="" />
      <div className="flex items-center justify-center bg-[white] rounded-[10px]">
        <div className=" flex cursor-pointer border-[7px] border-[brown]flex justify-normal items-center gap-[6rem] w-[550px] bg-white rounded-[10px] p-2">
          <div className="cursor-pointer">
            <FaSearch />
          </div>
          <input
            className="border-0 outline-none cursor-pointer w"
            type="text"
            placeholder="Sneakers"
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-[1rem] p-2 ">
        <img className="w-[32px] h-[32px]" src="/images/heart.png" alt="Logo" />
        <img className="w-[32px] h-[32px]" src="/images/cart.png" alt="Cart" />
        <div className="bg-[purple] rounded-full w-[45px] h-[45px] ml-2 flex justify-center items-center">
          <p className="text-white text-center">F</p>
        </div>
      </div>
    </div>
  );
}
