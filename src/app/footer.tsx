import Image from "next/image"
import logo from "/public/images/logo.png"
export default function Footer() {
  return (
    <div className="md:p-[50px] p-4 border-t-2 text-sm">
      <div className="justify-between flex flex-col md:flex-row">
      <div className="">
        <div className="flex items-center pb-2 ">
          <h2 className="text-[purple] font-extrabold">Pick n buy</h2>
          <Image width={100} height={100} className="w-[24px] " src={logo} alt="Logo" />
        </div>
        <p className="w-[200px] text-xs text-justify">
          Pick n buy is the place to get all your clothing needs. Our mission is
          to make shopping easy for everyone
        </p>
      </div>
      <div className="gap-2 md:gap-5 grid grid-cols-2 md:grid-cols-3 text-sm">
        <div className="flex flex-col  p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Information</a>
          <a href="https://www.hng/internship.com">Shop Pay</a>
          <a href="https://www.hng/internship.com">Help Center</a>
          <a href="https://www.hng/internship.com">Brand</a>
        </div>
        <div className="flex flex-col p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Social</a>
          <a href="https://www.hng/internship.com">X (Twitter)</a>
          <a href="https://www.hng/internship.com">Instagram</a>
        </div>
        <div className="flex flex-col p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Legal</a>
          <a href="https://www.hng/internship.com">Terms of Services</a>
          <a href="https://www.hng/internship.com">Privacy Policy</a>
        </div>
      </div>
      </div>
     
    </div>
  );
}
