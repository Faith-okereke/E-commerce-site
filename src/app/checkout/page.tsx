"use client";
import React, { useState } from "react";
import NavbarCheckout from "../checkoutNavbar";
export default function checkout() {
  const [count, setCount] = useState(0);
  const addNumber = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subNumber = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const addItemToCart = () => {
    alert("Added");
  };
  return (
    <main>
      <NavbarCheckout />
      <div className="flex justify-evenly mt-8">
        <div className="p-4 ">
          <img className="w-[300px]" src="imageClothes/sample.png" alt="" />
          <div className="flex justify-center items-center gap-2 mt-6">
            <img
              className="w-[50px] h-[50px] rounded-sm"
              src="imageClothes/sample.png"
              alt=""
            />
            <img
              className="w-[50px] h-[50px] rounded-sm"
              src="imageClothes/sample.png"
              alt=""
            />
            <img
              className="w-[50px] h-[50px] rounded-sm"
              src="imageClothes/sample.png"
              alt=""
            />
            <img
              className="w-[50px] h-[50px] rounded-sm"
              src="imageClothes/sample.png"
              alt=""
            />
          </div>
        </div>
        <div className="checkout text-sm flex flex-col justify-normal">
          <div className="flex items-center justify-normal gap-2 pt-2">
            <img src="images/nike.png" alt="" />
            <p>Nike</p>
          </div>
          <div className="flex justify-between items-center pt-2">
            <p className="text-sm">Nike sneakers - Anorak</p>
            <img className=" p-1 w-[30px]" src="images/favorite.png" alt="" />
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
                  <p className="cursor-pointer text-black font-bold" onClick={subNumber}>-</p>
                ) : (
                  <p className="cursor-pointer text-gray">-</p>
                )}
                {count}
                <p className="cursor-pointer text-black font-bold" onClick={addNumber}>+</p>
              </div>
            </div>
          </div>
          <button
            className="border-2 border-gray text-purple p-3 rounded-lg mb-3 mt-3 "
            onClick={addItemToCart}
          >
            {" "}
            Add to cart
          </button>
          <button className="bg-purple p-3 rounded-sm text-white ">
            Buy now
          </button>
        </div>
      </div>
      <div className="flex gap-1 pl-16 pt-8  m-auto">
        <p>Reviews</p>
        <img src="images/star.png" alt="" />
        <p>8.4</p>
      </div>
    </main>
  );
}
