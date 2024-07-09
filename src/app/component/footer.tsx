import Image from "next/image";
import logo from "/public/images/Logo.png";
import playstore from "/public/images/playstore.png";
import apple from "/public/images/apple.png";
export default function Footer() {
  return (
    <div className="md:p-[50px] p-4 border-t-2 text-sm">
      <div className="justify-between flex flex-col md:flex-row">
        <div className="">
          <div className="flex items-center pb-2 ">
            <h2 className="text-[purple] font-extrabold">Pick n buy</h2>
            <Image
              width={100}
              height={100}
              className="w-[24px] "
              src={logo}
              alt="Logo"
            />
          </div>
          <p className="text-xs text-justify tracking-wide">
            Pick n buy is the place to get all <br /> your clothing needs. Our mission
            is <br /> to make shopping easy for everyone.
          </p>
          <div className="flex gap-1 mb-2">
            <div className="p-1 border-2  flex justify-normal items-center gap-1 rounded-sm mt-3">
              <Image className="w-[25px] md-[30px]" width={30} height={30} src={playstore} alt="" />
              <div className="gap-0 font-bold">
                <p className="text-[10px]">Download on the </p>
                <p className="text-[12px]">Play Store</p>
              </div>
            </div>
            <div className="p-1 border-2  flex justify-normal items-center gap-1 rounded-sm mt-3">
              <Image  className="w-[25px] md-[30px]" width={30} height={30} src={apple} alt="" />
              <div className="gap-0 font-bold">
                <p className="text-[10px]">Download on the</p>
                <p className="text-[12px]">App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-2 md:gap-5 grid grid-cols-2 md:grid-cols-3 text-sm">
          <div className="flex flex-col  p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
            <a className="text-black" href="https://www.hng/internship.com">
              Information
            </a>
            <a href="https://www.hng/internship.com">Pick n buy</a>
            <a href="https://www.hng/internship.com">Help Center</a>
            <a href="https://www.hng/internship.com">Brand</a>
          </div>
          <div className="flex flex-col p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
            <a className="text-black" href="https://www.hng/internship.com">
              Social
            </a>
            <a href="https://www.hng/internship.com">X (Twitter)</a>
            <a href="https://www.hng/internship.com">Instagram</a>
          </div>
          <div className="flex flex-col p-1 md:p-3 text-sm text-gray-400 gap-1 md:gap-3">
            <a className="text-black" href="https://www.hng/internship.com">
              Legal
            </a>
            <a href="https://www.hng/internship.com">Terms of Services</a>
            <a href="https://www.hng/internship.com">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
