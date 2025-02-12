"use client";
import React, { useState } from "react";
import NavbarCheckout from "../component/cartNav";
import Alsolike from "../component/alsolike";
import Link from "next/link";
import Image from "next/image";
import mainImage from "/public/imageClothes/Rectangle-8.png";
import star from "/public/images/star.png";
import link from "/public/images/link.png";
import Nike from "/public/images/nike.png";
export default function Checkout() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(false);
  const addNumber = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subNumber = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const addItemToCart = () => {
    setItem(true);
    alert("Added");
  };

  return (
    <div className="p-5  md:p-0">
      <NavbarCheckout />
      <div className=" md:flex md:flex-row flex-col md:justify-evenly mt-8 justify-center items-center md:items-start">
        <div className="p-4 flex justify-center items-center md:block">
          <Image
            width={100}
            height={100}
            className="w-[300px]"
            src={mainImage}
            alt=""
          />
        </div>
        <div className="checkout text-sm flex flex-col justify-normal">
          <div className="flex items-center justify-normal gap-2 pt-2">
            <Image width={20} height={20} src={Nike} alt="" />
            <p>Nike</p>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-sm">Nike sneakers - Anorak</p>
            <Image
              width={100}
              height={100}
              className=" p-1 w-[30px]"
              src={mainImage}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center pt-2">
            <p>Color</p>
            <select name="color" id="color">
              <option value="Ready-Orange">Ready Orange</option>
            </select>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p>Size</p>
            <p>42</p>
          </div>
          <div className="flex justify-between items-center gap-32 pt-2">
            <p>Quantity</p>
            <div className="payout">
              <div className="flex justify-center items-center gap-3 p-2 bg-gray">
                {count > 0 ? (
                  <p
                    className="cursor-pointer text-black font-bold"
                    onClick={subNumber}
                  >
                    -
                  </p>
                ) : (
                  <p className="cursor-pointer text-gray">-</p>
                )}
                {count}
                <p
                  className="cursor-pointer text-black font-bold"
                  onClick={addNumber}
                >
                  +
                </p>
              </div>
            </div>
          </div>
          <button
            className="border-2 border-gray text-purple p-3 rounded-lg mb-3 mt-3 "
            onClick={addItemToCart}
          >
            {" "}
            {!item ? "Add to cart" : "Added"}
          </button>
          <Link href="/pay">
            <button className="bg-purple p-3 rounded-sm text-white w-[100%] ">
              Buy now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly md:flex-row flex-col md:gap-5">
        <div className=" pt-8 md:p-0 ">
          <div className=" justify-center  md:items-start items-center gap-2 mb-5 hidden md:flex">
            <Image
              className="w-[50px] h-[50px] rounded-sm"
              src={mainImage}
              alt=""
            />
            <Image
              className="w-[50px] h-[50px] rounded-sm"
              src={mainImage}
              alt=""
            />
            <Image
              className="w-[50px] h-[50px] rounded-sm"
              src={mainImage}
              alt=""
            />
            <Image
              className="w-[50px] h-[50px] rounded-sm"
              src={mainImage}
              alt=""
            />
          </div>
          <div className="flex gap-1 flex-row pb-4">
            <p>Reviews</p>
            <div className="flex items-center">
              <Image width={20} height={20} src={star} alt="" />
              <Image width={20} height={20} src={star} alt="" />
              <Image width={20} height={20} src={star} alt="" />
              <Image width={20} height={20} src={star} alt="" />
            </div>

            <p>8.4</p>
          </div>
          <div className="flex flex-row overflow-x-hidden md:overflow-visible gap-2">
            <div className="text-sm border-2 md:border-none p-2 rounded-md md:rounded-none">
              <div className="flex items-center mt-6 ">
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
              </div>
              <div className="flex text-gray-300">
                <p>OluwaKemi Ayo .</p>
                <p>June 2</p>
              </div>

              <p className="w-[230px] pt-2">
                Extremely comfortable and durable. After four years of spring to
                fall wear with my first pair I had to replace due to tread
                wearing. 
              </p>
            </div>
            <div className="text-sm border-2 md:border-none p-2 rounded-md md:rounded-none">
              <div className=" flex items-center mt-6  ">
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
                <Image width={20} height={20} src={star} alt="" />
              </div>
              <div className="flex text-gray-300">
                <p>OluwaKemi Ayo .</p>
                <p>June 2</p>
              </div>

              <p className="w-[230px] pt-2">
                Extremely comfortable and durable. After four years of spring to
                fall wear with my first pair I had to replace due to tread
                wearing. 
              </p>
            </div>
          </div>
        </div>
        <div className="text-sm flex flex-col pt-4">
          <p>Description</p>
          <p className="font-bold pt-2 pb-2">
            **Anoraks are made to order. Please allow 3-5 days <br /> for your
            order to ship. No returns.**
          </p>
          <p className="tracking-wide pb-2">
            Welcome Washington Area Bicyclist Association <br /> supporters! 15%
            of sales go to WABA, supporting <br />
            their mission. Empowering people to ride bikes <br /> build
            confidence.
          </p>
          <p className="tracking-wide pb-2">
            The Nike WABA is also a running shoe designed <br /> for athletes who
            demand peak performance. It <br /> features a revolutionary new cushioning
            system <br /> that delivers an incredibly energetic ride. The <br /> breathable
            knit upper and sleek design make <br/> this shoe both functional and
            stylish.
          </p>
        </div>
      </div>
      <h2 className="text-[purple] font-extrabold text-[24px] font-dm-serif p-3">
        You may also like
      </h2>
      <Alsolike />
    </div>
  );
}
