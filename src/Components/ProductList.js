import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  showProductItem = (productList) => {
    var result = null;
    result = productList.map((product, index) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <Product product={product} key={index} />;
          </div>
        </div>
      );
    });
    return result;
  };
  render() {
    var productList = [
      {
        name: "Note 7",
        des:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        src: "./img/sp_note7.png",
      },
      {
        name: "iPhone X",
        des:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        src: "./img/sp_iphoneX.png",
      },
      {
        name: "Note 7",
        des:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        src: "./img/sp_note7.png",
      },
      {
        name: "Note 7",
        des:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        src: "./img/sp_iphoneX.png",
      },
    ];
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {this.showProductItem(productList)}
        </div>
      </section>
    );
  }
}
export default ProductList;
