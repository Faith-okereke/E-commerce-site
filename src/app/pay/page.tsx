import React from "react";
import NavbarCheckout from "../checkoutNavbar";
import Link from "next/link";
import mastercard from "/public/images/mastercard.png"
import verve from "/public/images/verve-card.png"
import Image from "next/image"
import mainImage from "/public/imageClothes/Rectangle-8.png"
export default function page() {
  return (
    <div className="p-4 text-xs">
      <NavbarCheckout />
      <div className="flex flex-col justify-normal items-center md:flex-row md:justify-between md:align-top md:items-start border-t-2 m-2 ">
        <div className="md:order-2">
        <h1 className="pb-5 pt-5 font-bold text-lg">Order Summary</h1>
        <div className="flex align-top justify-between md:gap-8 gap-2">
          <Image width={100} height={100}className="w-[100px]" src={mainImage} alt="" />
          <div className="flex flex-col gap-4 md:gap-7 ">
            <div>
              <p className="font-bold">Nike Sneakers</p>
              <p className="text-gray-300 pt-2">Randy Orange / 42</p>
            </div>
          </div>
          <p className="text-purple font-bold pl-8 md:text-black">$100</p>
        </div>
        <div className="flex justify-between pt-2">
          <p>Sub Total</p>
          <p className="font-bold">$100</p>
        </div>
        <div className="flex justify-between pt-2 border-gray border-b-2 pb-3">
          <p>Total</p>
          <p className="font-bold">$100</p>
        </div>
        </div>
        
        <div className="p-3 md:border-r-2 md:pr-[220px]">
          <h1 className="pb-5 pt-5 font-bold text-lg">Payment details</h1>
          <div className="flex justify-normal gap-2 pb-2">
            <h2>Credit or Debit Card</h2>
            <Image width={20} height={20} src={mastercard} alt="" />
            <Image width={20} height={20} src={verve} alt="" />
          </div>
          <form  action="">
            <div className="md:flex md:gap-2 ">
            <div className="flex flex-col gap-1 mt-2 w-[100%]">
              <label className="font-bold" htmlFor="firstName">
                FirstName
              </label>
              <input
                className="p-2 rounded-md border-2 border-gray-300"
                type="text"
                name=""
                id=""
                placeholder="e.g John"
                required
              />
            </div>
            <div className="flex flex-col gap-1 mt-2 w-[100%]">
              <label className="font-bold" htmlFor="lastName">
                LastName
              </label>
              <input
                className="p-2 rounded-md border-2 border-gray-300"
                type="text"
                name=""
                id=""
                placeholder="e.g Joe"
                required
              />
            </div>
            </div>
           
            <div className="flex flex-col gap-1 mt-2">
              <label className="font-bold" htmlFor="address">
                Delivery address
              </label>
              <input
                className="p-2 rounded-md border-2 border-gray-300"
                type="text"
                name=""
                id=""
                placeholder="e.g James Oni road, GRA"
                required
              />
            </div>
            <div className="md:flex md:gap-2">
            <div className="flex flex-col gap-1 mt-2 w-[100%]">
              <label className="font-bold" htmlFor="country">
                Country
              </label>
              <select
                className="p-2 rounded-md border-2 border-gray-300 "
                name="country"
                id="country"
                required
              >
                <option value="Country">Country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 mt-2 w-[100%]">
              <label className="font-bold" htmlFor="state">
                State
              </label>
              <select
                className="p-2 rounded-md border-2 border-gray-300"
                name="state"
                id="state"
                required
              >
                <option value="Country">--select state</option>
                <option value="Nigeria">Lagos</option>
                <option value="Canada">Owerri</option>
              </select>
            </div>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <label className="font-bold" htmlFor="cardDetails">
                Card details
              </label>
              <div className="">
                <input
                  className="border-2 p-2 rounded-md rounded-br-none rounded-bl-none border-b-0 outline-none w-[100%]"
                  type="text"
                  placeholder="Card number"
                  required
                />
                <div className="md:flex md:gap-0">
                <input
                  className="border-2 p-2 border-b-0 outline-none w-[100%] md:border-r-0"
                  type="text"
                  placeholder="Expiry date"
                  required
                />
                <input
                  className="border-2 p-2  border-b-0 outline-none w-[100%]"
                  type="text"
                  placeholder="CVV code"
                  required
                />
                </div>
               
                <input
                  className="border-2 p-2 rounded-md rounded-tr-none rounded-tl-none outline-none w-[100%]"
                  type="text"
                  placeholder="Card pin"
                  required
                />
              </div>
            </div>
            <p className="pt-2 pb-2">
              By clicking pay, you agree to Pick n buy{" "}
              <span className="text-purple font-bold">Terms of Use </span>
              and <span className="text-purple font-bold">
                Privacy Policy
              </span>{" "}
            </p>
            <Link href="/thank-you">
              <button className="bg-purple p-3 rounded-lg text-white  mt-3 text-sm w-[100%]">
                Pay
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
