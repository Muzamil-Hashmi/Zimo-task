import React from 'react'
import Hero from  '../Component/element/Hero'
import Personal from '../Component/element/Personal'
import Revolution from'../Component/element/Revolution'
import Global from '../Component/element/Global'
import Car from '../Component/element/Car'
import Civica from '../Component/element/Civica'
import Sea from '../Component/element/Sea'
import Listing from '../Component/element/Listing'
import AOS from 'aos'
import "aos/dist/aos.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Categories from '../Component/element/Categories'
import { useEffect } from 'react';
export default function Index() {
  useEffect(() => {    AOS.init({      duration : 2000    });  }, []);

  return (
    <div>
      
   <Hero/>
   <Revolution/>
   <Categories/>
   <Listing/>
   <Personal/>
   <Global/>
   <Civica/>
   <Sea/>
   <Car/>

    </div>
  )
}
