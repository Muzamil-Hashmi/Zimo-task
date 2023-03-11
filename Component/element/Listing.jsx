import React from "react";

export default function Listing() {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12  text-center">
            <h2>OUR PLATFORM FOR ALL PREMIUM LISTING</h2>
            <h4 className="pt-4">UNLIMITED POTENTIAL</h4>
          </div>
        </div>
        <div className="row  pt-5 mt-5 ">
          <div className="col-md-4 col-12 pt-5 mt-5">
            <img src="assets/h10.svg" className="w-50" alt="" />
            <h3>ONE SOURCE</h3>
            <h1>ENTRY TICKETS</h1>
            <small className="text1">FOR ALL PREMIUM LISTING</small>
          </div>
          <div className="col-md-8 col-12 text-center">
            <img src="assets/house.jpg" className="w-100 rounded-5" alt="" />
            <h5 className="mt-5">LET YOURS DREAMS FIND YOU</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
