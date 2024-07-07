export default function Footer() {
  return (
    <main className="p-[50px] border-t-2">
      <div className="flex justify-between">
      <div className="">
        <div className="flex items-center pb-2 ">
          <h2 className="text-[purple] font-extrabold">Pick n buy</h2>
          <img className="w-[24px] " src="/images/logo.png" alt="Logo" />
        </div>
        <p className="w-[200px] text-xs text-justify">
          Pick n buy is the place to get all your clothing needs. Our mission is
          to make shopping easy for everyone
        </p>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col p-3 text-sm text-gray-400 gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Information</a>
          <a href="https://www.hng/internship.com">Shop Pay</a>
          <a href="https://www.hng/internship.com">Help Center</a>
          <a href="https://www.hng/internship.com">Brand</a>
        </div>
        <div className="flex flex-col p-3 text-sm text-gray-400 gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Social</a>
          <a href="https://www.hng/internship.com">X (Twitter)</a>
          <a href="https://www.hng/internship.com">Instagram</a>
        </div>
        <div className="flex flex-col p-3 text-sm text-gray-400 gap-3">
          <a className="text-black" href="https://www.hng/internship.com">Legal</a>
          <a href="https://www.hng/internship.com">Terms of Services</a>
          <a href="https://www.hng/internship.com">Privacy Policy</a>
        </div>
      </div>
      </div>
     
    </main>
  );
}
