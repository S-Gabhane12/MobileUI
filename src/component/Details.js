import React, { Component } from "react";
import list from "../list.json";

import { useParams } from "react-router-dom";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { VscBellDot, VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Details(props) {
  const params = useParams();
  const id = params.id;
  // console.log(id)
  const values = list.find((e) => e.id == id);
  return (
    <div>
      <header className="bg-white flex items-center justify-evenly">
        <VscArrowLeft />
        <h2>Details</h2>
        <VscBellDot />
      </header>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={values.image} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {values.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The name says it all, the right size slightly snugs the body leaving
            enough room for comfort in the sieeves and waist.
          </p>
          <h3> Choose Size</h3>
          <button
            type="button"
            className="py-2.5 px-5 mr-2  ml-4 mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            S
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2  mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            M
          </button>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            L
          </button>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <div>
          <h3>Price</h3>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            {values.price}
          </span>
        </div>

        <BiSolidShoppingBagAlt />
        <Link to={`/cart`}>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center "
          >
            Add to Cart
          </button>
        </Link>
      </footer>
    </div>
  );
}

export default Details;
