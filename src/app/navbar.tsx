
export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-[1rem] p-2 fixed z-20 right-0 top-0 bg-[white] w-screen">
    <img className="w-[32px] h-[32px]" src="/images/heart.png" alt="Logo" />
    <img className="w-[32px] h-[32px]" src="/images/cart.png" alt="Cart" />
    <div className="bg-[purple] rounded-full w-[45px] h-[45px] ml-2 flex justify-center items-center">
      <p className="text-white text-center">F</p>
    </div>
  </div>
  )
}
