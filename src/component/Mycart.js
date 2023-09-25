import React, { Component } from "react";
import { VscBellDot, VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import list from "../list.json";

class Mycart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [2, 4, 6],
      count: 0,
      subtotal: 0,
      total: 0,
      ii: 1,
    };
    console.log(this.props);
  }
  decrementCount1 = () => {
    // Update state with incremented value
    this.setState({ count: this.state.count - 1 });
  };

  // Function to increment count by 1
  incrementCount1 = () => {
    // Update state with incremented value
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
        <header className="bg-white flex items-center justify-evenly">
          <VscArrowLeft />
          <h2>Details</h2>
          <VscBellDot />
        </header>

        <div>
          {list.map((e) => {
            for (let i=0;i<this.state.products.length;i++ ){
            if (this.state.products[i] !== e.id) {
              //skipping
            } else {
              return (
                <div key={e.id}>
                  <div
                    className="flex flex-col items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-"
                    id="list1"
                  >
                    <img
                      className="  rounded-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={e.image}
                      alt=""
                    />

                    <div className="flex flex-row justify-evenly p-4">
                      <div>
                        <h2 className="   text-gray-900 mb-0">{e.title}</h2>
                        <span className="text-sm mt-0">Size L </span>
                        <h2 className="mt-3 font-normal text-gray-700 ">
                          {e.price}
                        </h2>
                      </div>
                      <RiDeleteBinLine color="red" />
                      <div>
                        <h6 className="hidden">{this.state.count *parseInt(e.price) }</h6>
                        <button id={e.id}
                          onClick={this.decrementCount1}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 right-2 border border-gray-400 rounded shadow"
                        >
                          -
                        </button>
                        {this.state.count}
                        <button id={e.id}
                          onClick={this.incrementCount1}
                          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            
              );
            }
          }
          })}


          <input
            type="type"
            className="block w-fit-content p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F2F2F2]"
            placeholder="Add a voucher"
          />
          <h4 id="sub-total">sub-total INR {this.state.subtotal}</h4>

          <h4>VAT % INR 0.00</h4>
          <h4>Shipping fee INR 80</h4>
          <hr></hr>
          <h3>Total INR{this.state.total}</h3>
        </div>

        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center "
          >
            Checkout
          </button>
          <VscArrowRight />
        </footer>
      </div>
    );
  }
}
export default Mycart;
