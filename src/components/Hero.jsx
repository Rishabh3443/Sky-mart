import React from 'react'
import hero from "../assets/hero.png";
import { useNavigate } from 'react-router';

const Hero = ({productRef}) => {

  const navigate = useNavigate()
  return (
    <div className='h-full justify-between flex  p-4 '>
      <div className='flex flex-col mt-9'>
        <p className='text-[120px] font-semibold leading-[0.8] font-[-apple-system,BlinkMacSystemFont,"Segoe_UI",Helvetica,Arial,sans-serif]'>SKYMART<br/><span className='text-[140px] inline-block ml-10 '>FASHION</span></p>
        <p className="text-gray-500 text-xl mt-3 p-2">
            Discover fashion that matches your personality.<br/>
            Shop premium collections with modern designs<br/> and
            elevate your everyday style.
          </p>
          <div className='inline-block  p-4'>
            <button onClick={()=>{navigate("shop")}} className='bg-black py-2 px-5  text-white inline-block cursor-pointer'>Buy Now</button>
           <button  onClick={() =>productRef.current.scrollIntoView({
           behavior: "smooth",})} className='border border-black px-5 py-2 ml-3 cursor-pointer'>Explore Products</button></div>
      </div>

      <div className='bg-gray-300 rounded-2xl object-cover h-full'>
        <img src={hero} alt="" className="height-[560px] width-[800px] "/>
      </div>
    </div>
  )
}

export default Hero
