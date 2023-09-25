import React, { Component } from "react";
import Productdetail from "./component/Productdetail";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Link } from "react-router-dom";
import list from "./list.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: list.products,
    };
  }
  render() {
    return (
      <div className="">
        <div>
          <Header />
          <div className="px-8 py-6 m-2 grid grid-cols-2 gap-8 overflow-hidden">
            {list.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <Productdetail
                      key={item.id}
                      imgLink={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
