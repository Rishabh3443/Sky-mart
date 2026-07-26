import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between p-4 border-t-2 border-black mt-4">
      <div className="text-2xl">
        <p>
          At Reflect, we offer more than just clothing and <br/>footwear — we provide
          a canvas for your individuality. <br/>Our carefully curated collections are
          designed to<br/> help you make a statement with every step.
        </p>
      </div>
      <div className='flex flex-col items-end text-6xl font-bold font-[-apple-system,BlinkMacSystemFont,"Segoe_UI",Helvetica,Arial,sans-serif]'>
        <p>CLOTH AND FOOTWEAR </p>
        <p>COLLECTION</p>
      </div>
    </div>
  );
};

export default Footer;
