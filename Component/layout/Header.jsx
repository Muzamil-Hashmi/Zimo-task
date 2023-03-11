import React from "react";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag} from "react-icons/hi";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg">
        <div className="container ">
          <img src="assets/logo.png" className=" mx-3" alt="" width={50} />
          <img src="assets/h2.svg" className="ms-3" alt="" width={120} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <small>
                  <Link
                    className="nav-link active pt-4 text-white "
                    aria-current="page"
                    href="/about"
                  >
                    ABOUT
                  </Link>
                </small>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="d-flex ">
                <img src="assets/h3.svg" alt="" width={150} />
              </li>
            </ul>
            <ul>
              <li>
              <img src="assets/head.png" alt="" className="pt-4" width={500} />

                {/* <small className="text-white ">
                  17:23 london united kingdom <br /> sunday 12 feb 2023
                </small> */}
              </li>
            </ul>
            {/* <ul className="navbar-nav  ms-5  mb-2 mb-lg-0">
              <li>
                <HiOutlineShoppingBag color="white" size={25} />
              </li>
              <li className="ms-5">
                <GoPerson color="white" size={25} />
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
