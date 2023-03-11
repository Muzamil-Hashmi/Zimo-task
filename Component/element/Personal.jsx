import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

function Personal() {
  return (
    <div className='container-fluid personal py-5 my-5'>
      <div className="container">
        <div className="row pt-5 mt-5">
            <div className="col-md-4 col-sm-4 col-12 mt-5 pt-5">
<div className="row mt-5 pt-5">
    <div className="col-md-12  ">
    <img src="assets/b6.png" className="w-100 " alt="" />

    </div>
</div>
            </div>
            <div className="col-md-4 col-sm-4  "></div>
            <div className="col-md-4 col-sm-4 col-12  ">
<h3 className='text-light'>PERSONALISED FOR YOU</h3>
<h6 className='text1'>DELIVERING THOUSANDS OF PERSONALISED ALERTS
EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN
THAT OPPORTUNITY OF A LIFETIME IS HERE.</h6>
<div  className='text-end mt-5 pt-5'>
<small  className='text-white'>CREATE USER ID <BsArrowRight/></small>

</div>

            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Personal
