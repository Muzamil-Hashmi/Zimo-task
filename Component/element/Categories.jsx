import React from "react";
import Carousel from "react-multi-carousel";
// import Particles from 'react-particles-js';
import "react-multi-carousel/lib/styles.css";

export default function Categories() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" container-fluid my-5">
      {/* <Particles />  */}
      <h1 className="my-5" data-aos="flip-down">OUR CATEGORIES</h1>
      <Carousel responsive={responsive}>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a1.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a2.png" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a3.png" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a5.png" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a1.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a2.png" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a3.png" alt="" />
        </div>
        <div>
          {" "}
          <img className="w-75 rounded-4" src="assets/a5.png" alt="" />
        </div>
        
      </Carousel>
    </div>
  );
}
