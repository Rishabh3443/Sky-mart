import { Home } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const About = () => {
   const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-white">
      
      
      <div className="w-full bg-gray-50 py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black">
          About Sky Mart
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg font-medium">
          Redefining fashion with premium quality, modern designs, and a passion for individuality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-center gap-16">
        
        
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-black">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Born out of a desire to make high-end fashion accessible, Sky Mart started as a small boutique and has grown into a global destination for trendsetters. We believe that what you wear is an extension of who you are, and our mission is to help you express your unique identity.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Every piece in our collection is carefully curated, ensuring that it meets our strict standards for quality, comfort, and style. From everyday essentials to statement pieces, we bring you fashion that speaks volumes.
          </p>
          <button onClick={()=>{navigate("/")}} className="mt-4 bg-black text-white px-8 py-3 w-max text-sm font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
            Explore Our Collection
          </button>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="w-full h-125 rounded-[30px] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
              alt="Inside our store" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      
      <div className="bg-black text-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            
            {/* Value 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl">
                <i className="ri-vip-diamond-line"></i>
              </div>
              <h3 className="text-xl font-bold uppercase">Premium Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                We use only the finest materials to ensure our clothing is durable, comfortable, and luxurious.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl">
                <i className="ri-leaf-line"></i>
              </div>
              <h3 className="text-xl font-bold uppercase">Sustainable Focus</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                Committed to reducing our environmental footprint through ethical manufacturing practices.
              </p>
            </div>

           
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl">
                <i className="ri-truck-line"></i>
              </div>
              <h3 className="text-xl font-bold uppercase">Fast Delivery</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">
                Get your favorite styles delivered to your doorstep quickly and securely, worldwide.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;