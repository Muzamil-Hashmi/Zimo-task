import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {BsChevronDown} from 'react-icons/bs'

export default function Hero() {
  return (
    <div className='container-fluid Hero'>
      <div className="container py-5">
        <div className="row mb-5 pb-5">
          <div className="col-md-12">
<small className='text-white small '><BiArrowBack size={20}/> BACK </small>

          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-light">
           <h1></h1>
           <h3>Discover</h3>

             <br /> 
             <h1>A  NEW  WORLD</h1>
             <h6 className='text1'>FOR THOSE WHO WISH FOR MORE...</h6>
          </div>
        </div>
        <div className="row pt-5 mt-5">
          <div className="col-md-12 text-center">
            <h6 className='text1'>BRING THE WORLD CLOSER TOGETHER</h6>
            <h3><BsChevronDown color='white' size={50}/></h3>
          </div>
        </div>
      </div>
      
    </div>
  )
}
