import React from "react";
import Link from "next/link";
export default function () {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-3">
      <img className="w-20" src="images/Success.png" alt="" />
      <h1 className="font-bold text-[21px]">Success!</h1>
      <p className="text-center">
        You have successfully made your payment. Thank you for shopping with us!
      </p>
      <div className="flex items-center gap-1 justify-center mb-4">
        <div className="w-full">
        <button className="border-2 border-purple-600 text-purple text-xs rounded-lg p-2 object-contain md:w-[300px]">
          Download receipt
        </button>
        </div>
       <div className="w-full">
       <button className="bg-purple p-2 rounded-lg text-white mb-3 mt-3 text-xs object-contain md:w-[300px]">
          {" "}
          <Link href="/">Return Home</Link>{" "}
        </button>
       </div>
        
      </div>
    </div>
  );
}
