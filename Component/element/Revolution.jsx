import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function Revolution() {
  return (
    <div className="container-fluid  pt-5">
      <div className="container">
        <div className="row">
          <small className="text-center">
            A REAL ESTAET AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
          </small>
          <div className="col-md-6 my-5">
            <h5 className="">A REVOLUTIONARY PLATFORM</h5>
            <h3>ENTYRIES - SELLERS</h3>
            <h1 className="fw-bold">WORLSWIDE</h1>
          </div>
          <div className="col-md-6 mt-5 pt-5 text-center">
            <div className="pt-5 mt-5">
              <img className="w-50" src="assets/h8.svg" alt="" />
              <h5 className="my-4">
                A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PROAGENTS AND MODERATION TEAMS{" "}
              </h5>
            </div>
          </div>
          <div className="col-md-6 g-3">
            <h2>THE BEST OF THE BEST </h2>
            <h5 className="my-4">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
              MODERATION TEAM SELECTS THEHI GHEST QUALITY LISTINGSON THE MARKET
              FROM ACROSS THE WORLD
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mt-5">
            <h3>
              <BsChevronDown size={50} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
