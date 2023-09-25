import React, { Component } from "react";
import { VscBellDot } from "react-icons/vsc";





class Header extends Component{
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3 mt-10 ml-5"> 
                <h1 className="text-3xl font-bold">Discover</h1>
                <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
      
                <VscBellDot color="black" />
            </span>
               
            </div>

            <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-2 mr-2">
                
<form>   
        <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F2F2F2] focus:ring-blue-500 focus:border-blue-500" placeholder="Search anything" required />
    
    </div>
</form>
<img className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3" src="./Frame 4.png" />

            </div>
        <div> 
<button type="button" className="py-2.5 px-5 mr-2  ml-4 mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">All</button>
<button type="button" className="py-2.5 px-5 mr-2  mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">Men</button>
<button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">Women</button>
<button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-black  bg-[#F2F2F2] rounded-lg border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 ">Kids</button>

</div>   
</div>
        );
    }
  }
  
  
  export default Header;