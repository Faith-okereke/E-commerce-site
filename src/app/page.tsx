"use client";
import { CiSearch } from "react-icons/ci";
import Marquee from "./marquee";
import "./globals.css";
import Navbar from "./navbar";
import Alsolike from "./alsolike";
import Image from "next/image";
import logo from "/public/images/logo.png"
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="relative">
      <section className="md:absolute z-10 md:top-[132px] md:left-[33%] p-10 static mt-8 md:m-0 flex flex-col justify-center items-center">
       <div className="bg-radial-gradient md:h-[600px] md:w-[800px] absolute top-[-300px] left-[-160px] z-0">
       </div>
        <div className="flex justify-center items-baseline bg-none bg-contain z-10">
            <h2 className="text-[purple] font-extrabold text-[40px] font-dm-serif ">
              Pick n buy
            </h2>
            <Image width={50} height={50} src={logo} alt="Logo" />
          </div>
    
         
          <div className="flex items-center justify-center m-6 bg-[white] rounded-[10px] z-10 ">
            <div className=" flex cursor-pointer md:border-[5px] border-2 border-[brown]flex justify-normal items-center gap-[6rem] w-auto bg-white rounded-[10px] p-2 md:p-2">
              <div className="cursor-pointer">
                <CiSearch />
              </div>
              <input
                className="border-0 outline-none cursor-pointer w"
                type="text"
                placeholder="Sneakers"
              />
            </div>
          </div>
        </section>
        <Marquee />
       
      </div>
      <div className="p-3 md:p-[90px]">
        <h1 className="text-[purple] text-lg pb-3">Products</h1>
        <div className="flex mb-[40px]">
          <select
            className="rounded-[7px] p-2 border-2 mr-2 "
            name="sort"
            id="sort"
          >
            <option value="sortBy">Sort By</option>
            <option value="sortBy">Sort By</option>
            <option value="sortBy">Sort By</option>
          </select>
          <select
            className="rounded-[7px] p-2 border-2 mr-2"
            name="sort"
            id="sort"
          >
            <option value="sortBy">Price</option>
            <option value="sortBy"> $10</option>
            <option value="sortBy">$20</option>
          </select>
          <select
            className="rounded-[7px] p-2 border-2 mr-2"
            name="sort"
            id="sort"
          >
            <option value="sortBy">Gender</option>
            <option value="sortBy">Male</option>
            <option value="sortBy">Female</option>
          </select>
        </div>
       <Alsolike/>
      </div>
    </div>
  );
}
