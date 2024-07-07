export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200 py-2 z-10">
      <div className="flex gap-[1rem] animate-marquee px-2 mb-3">
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />{" "}
        <img src="/imageClothes/sample.png" alt="" />
      </div>
      <div className="flex gap-[1rem] animate-marqueeReverse px-2">
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />{" "}
        <img src="/imageClothes/sample.png" alt="" />
      </div>
      <div className="flex gap-[1rem] animate-marquee px-2">
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />
        <img src="/imageClothes/sample.png" alt="" />{" "}
        <img src="/imageClothes/sample.png" alt="" />
      </div>
    </div>
  );
}
