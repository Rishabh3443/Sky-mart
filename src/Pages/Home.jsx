import React ,{ useRef } from 'react'

import Hero from "../components/Hero";
import Marquee from '../components/Marquee';
import ProductCard from '../components/ProductCard';
import Collection  from "../components/Collection";
import ProductTabs from '../components/ProductTabs';
import { Routes,Route } from "react-router";
import { useSelector  } from "react-redux";
import Footer from "../components/Footer";



const home = () => {

  
  const { currentUser, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  console.log(currentUser);
  console.log(isAuthenticated);

   const productRef = useRef(null);

  return (
    <div>
 
     
     <Hero productRef={productRef} />
     <Marquee/>
     <Collection/>
    
     

      

      <div ref={productRef}>
        <ProductTabs />
      </div>
      
      <Footer/>

    </div>
  )
}

export default home
