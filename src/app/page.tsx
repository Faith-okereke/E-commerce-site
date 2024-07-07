import { FaSearch } from "react-icons/fa";
import {useRouter} from "next/router"
import Marquee from "./marquee";
import './globals.css';
import Navbar from "./navbar";
export default function Home() {
  const router = useRouter()
  return (
    <main className="">
      <Navbar/>
      <div className="relative">
        <Marquee />
        <section className="absolute z-10 top-[132px] left-[25%] p-10">
          <div className="flex justify-center items-baseline  bg-radial-gradient bg-contain h-[500px]">
            <h2 className="text-[purple] font-extrabold text-[40px] font-dm-serif ">Pick n buy</h2>
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="flex items-center justify-center m-6 bg-[white] rounded-[10px]">
            <div className=" flex cursor-pointer border-[7px] border-[brown]flex justify-normal items-center gap-[6rem] w-[550px] bg-white rounded-[10px] p-3">
              <div className="cursor-pointer">
                <FaSearch />
              </div>
              <input
                className="border-0 outline-none cursor-pointer w"
                type="text"
                placeholder="Sneakers"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="p-[90px]">
        <h1 className="text-[purple] text-lg pb-3">Products</h1>
      <div className="flex mb-[40px]">
        <select  className="rounded-[7px] p-2 border-2 mr-2 " name="sort" id="sort">
          <option value="sortBy">Sort By</option>
          <option value="sortBy">Sort By</option>
          <option value="sortBy">Sort By</option>
        </select>
        <select  className="rounded-[7px] p-2 border-2 mr-2" name="sort" id="sort">
          <option value="sortBy">Price</option>
          <option value="sortBy"> $10</option>
          <option value="sortBy">$20</option>
        </select>
        <select  className="rounded-[7px] p-2 border-2 mr-2" name="sort" id="sort">
          <option value="sortBy">Gender</option>
          <option value="sortBy">Male</option>
          <option value="sortBy">Female</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-5 ">
      <div>
        <div>
      <img  className="cursor-pointer" src="/imageClothes/sample.png/" alt="clothes" onClick={()=> router.push("/chekout")}/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div><div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
        <Link href='/checkout'> <img src="/imageClothes/sample.png/" alt="clothes"/></Link> 
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      <div>
        <div>
          <img src="/imageClothes/sample.png/" alt="clothes"/>
        </div>
        <div className="flex items-center pt-3 pb23">
        <p className="text-sm">Rolex watch</p>
        <p className="text-[purple] text-sm">(Male)</p>
          </div>
       <p className="text-[purple]">$ 540</p>
       
      </div>
      </div>
      
      </div>
     
    </main>
  );
}
