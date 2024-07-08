import React from "react";
import NavbarCheckout from "../checkoutNavbar";
import Alsolike from "../alsolike";
import Link from "next/link";
import Image from "next/image";
import Nike from "/public/images/nike.png";
import deletei from "/public/images/delete.png"
export default function ContinueCheckout() {
  return (
    <div className="p-3 text-xs">
      <NavbarCheckout />

      <div className="flex md:flex-row flex-col justify-between md:gap-96 items-center mt-8 md:border-2 md:rounded-2xl md:border-gray-300 md:m-7 ">
        <div className="">
          <div className="p-4 flex items-center justify-normal gap-1">
            <Image width={20} height={20} src={Nike} alt="" />
            <p>Nike</p>
          </div>
          <div className="md:order-2">
            <h1 className="pb-5 pt-5 font-bold text-lg">Order Summary</h1>
            <div className="flex align-top justify-between md:gap-8 gap-2">
              <Image width={20} height={20} className="w-[100px]" src={Nike} alt="" />
              <div className="flex flex-col gap-4 md:gap-7 ">
                <div>
                  <p className="font-bold">Nike Sneakers</p>
                  <p className="text-gray-300 pt-2">Randy Orange / 42</p>
                </div>
                <div className="flex justify-evenly items-center gap-2 mt-4 md:m-0 bg-gray p-1 rounded-md md:w-[150px]">
                  <Image width={20} height={20} src={deletei} alt="" />
                  <p>1</p>
                  <p className="font-bold text-[18px]">+</p>
                </div>
              </div>
              <p className="text-purple font-bold pl-8 md:text-black">$100</p>
            </div>

          </div>
          <div className="flex justify-between md:border-l-2 md:p-10 p-2 w-[100%]">
          <div className="flex flex-col justify-between w-full ">
            <div className="flex justify-between pt-2 gap-8">
              <p>Sub Total</p>
              <p className="font-bold">$100</p>
            </div>
            <Link href="/pay">
              <button className="bg-purple p-3 rounded-lg text-white mb-3 mt-3 text-sm w-[100%]">
                Continue to Checkout
              </button>
            </Link>
            <p>Taxing and Shipping calculated at checkout</p>
          </div>
        </div>
        </div>

       
      </div>

      <div>
        <p className="text-[20px] text-purple pb-5 pt-5">Recently Viewed</p>
        <Alsolike />
      </div>
    </div>
  );
}
