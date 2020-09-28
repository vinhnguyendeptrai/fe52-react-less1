import React, { Component } from "react";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card bg-light" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={product.src}
          alt="Card image"
          style={{ maxWidth: "100%", height: 250 }}
        />
        <div className="card-body text-center">
          <h4 className="card-title text-center">{product.name}</h4>
          <p className="card-text">{product.des}</p>
          <a href="#" className="btn btn-primary">
            Detail
          </a>
          <a href="#" className="btn btn-danger">
            Cart
          </a>
        </div>
      </div>
    );
  }
}
export default Product;
