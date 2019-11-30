import React from "react";
import "./style.scss";
import ProductGrid from "../ProductGrid";
import Filter from "./filter";

export default class Product extends React.Component {
  state = {
    view: "grid"
  };
  render() {
    return (
      <div className="product-wrapper">
        <div className="left-side">
          <Filter />
        </div>
        <div className="right-side">
          <div>sort section</div>
          <ProductGrid />
        </div>
      </div>
    );
  }
}
