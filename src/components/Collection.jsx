import React from "react";
import left1 from "../assets/left1.png";
import left2 from "../assets/left2.png";
import right1 from "../assets/right1.png";
import right2 from "../assets/right2.png";
import { useNavigate } from "react-router";

const Collection = () => {

  const navigate = useNavigate();

  return (
    <section className="mt-16 px-10">

      <div className="grid grid-cols-3 gap-6 h-162.5">
        <div className="rounded-3xl bg-[#e8e8e8] flex justify-center items-end overflow-hidden">
          <img
            src={left1}
            alt=""
            className="h-full object-contain"
          />
        </div>

        <div className="rounded-3xl bg-[#e8e8e8] flex justify-center items-end overflow-hidden">
          <img
            src={left2}
            alt=""
            className="h-full object-contain"
          />
        </div>

        <div className="grid grid-rows-2 gap-6">

          <div className="rounded-3xl bg-[#e8e8e8] flex items-center justify-between px-4 overflow-hidden">
            <div className="flex flex-col gap-4 w-1/2">
              <h2 className="text-2xl font-semibold">
                Women Collection
              </h2>

              <p className="text-xl leading-8">
                Stylish Winter T-shirt
                <br />
                For Women
              </p>

              <button onClick={() => navigate("/collection/women")} className="border border-black px-5 py-2 w-fit font-medium hover:bg-black hover:text-white">
                Check Now
              </button>
            </div>

            <div className="w-1/2 flex justify-end items-end">
              <img
                src={right1}
                alt=""
                className="h-56 object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-[#e8e8e8] flex items-center justify-between px-6 overflow-hidden">
    <div className="flex flex-col gap-4 w-1/2">
        <h2 className="text-2xl font-semibold">
            Men Collection
        </h2>

        <p className="text-xl leading-8">
            Stylish Winter T-shirt
            <br />
            For Men
        </p>

        <button onClick={() => navigate("/collection/men")} className="  border border-black px-5 py-2 w-fit font-medium hover:bg-black hover:text-white">
            Check Now
        </button>
    </div>

    <div className="w-1/2 flex justify-end items-end">
        <img
            src={right2}
            alt=""
            className="h-60 object-cover"
        />
    </div>
          </div>
        </div>
        
      </div>
      <div className="flex justify-between mt-4">
        <p className='text-6xl font-bold font-[-apple-system,BlinkMacSystemFont,"Segoe_UI",Helvetica,Arial,sans-serif]' >OUR COLLECTION</p>
        <p className="text-l">Step into the world of Reflect, where each collection<br/> is a style statement. From casual wear to party <br/>looks, we have something for every occasion<br/> and every you.</p>
      </div>
      

    </section>
  );
};

export default Collection;