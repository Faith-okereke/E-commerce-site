import React from "react";
import Link from "next/link";
import Image from "next/image"
import success from "/public/images/Success.png"
 const ThankYouPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-3">
      <Image width={100} height={100} className="w-20" src={success} alt="" />
      <h1 className="font-bold text-[21px]">Success!</h1>
      <p className="text-center">
        You have successfully made your payment. Thank you for shopping with us!
      </p>
      <div className="flex items-center gap-1 justify-center mb-4 w-full p-2">
        <div className="">
        <button className="border-2 border-purple-600 text-purple text-xs rounded-lg p-2  md:w-[300px]">Download receipt</button>
        </div>
       <div className="">
       <button className="bg-purple p-2 rounded-lg text-white mb-3 mt-3 text-xs md:w-[300px]">
          {" "}
          <Link href="/">Return Home</Link>{" "}
        </button>
       </div>
        
      </div>
    </div>
  );
}
export default ThankYouPage;
