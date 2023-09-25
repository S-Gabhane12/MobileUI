import React, { Component } from "react";





class Productdetail extends Component{
    constructor(props) {
      super(props);
      this.state = {};
        }

  
    render() {
     // console.log(this.state.id);
      return (
        
            
        <div className="px-8 py-6 m-2 grid grid-cols-2 gap-8 overflow-hidden">


           
             <div className=" w-[161px] h-[200px] mb-4 hover:scale-105 transition duration-500 cursor-pointer">
               <div className="relative">
               <img  className="rounded-lg" src={this.props.imgLink} alt="" />
                 <div className="absolute top-4 right-4  ">
                 <img  className="h-8 w-8 bg-slate-50" src="./Icon.jpg" />
                  </div>
               </div>
            <div className="py-2 px-1 bg-white">
                <h3 className="font-sans  w-64 text-base font-semibold">{this.props.title}</h3>
                <p className="font-sans text-sm font-normal">{this.props.price}</p>
               </div>
            </div>
          </div>
        
           
            

   
    
      
   

        );
  }
}


export default Productdetail;
