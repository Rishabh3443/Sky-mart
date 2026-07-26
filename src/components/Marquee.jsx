import React from "react";
import { Star } from "lucide-react";
import "../index.css";

const Marquee = () => {
  return (
    <section className=" marquee bg-black text-white py-4 overflow-hidden">
      <div className="marquee-track flex items-center justify-center gap-8 whitespace-nowrap">

        <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

        <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

        <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

        <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

        <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

         <div className="flex items-center gap-2">
          <Star size={25} fill="white" strokeWidth={1} />
          <h2 className="text-2xl font-bold uppercase">SKYMART FASHION</h2>
        </div>

      </div>
    </section>
  );
};

export default Marquee;