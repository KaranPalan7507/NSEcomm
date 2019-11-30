import React from "react";
import "./style.scss";
import ProductGrid from "../ProductGrid";
import Filter from "./filter";
import Slider from "./slider";

export default class Product extends React.Component {
  state = {
    view: "grid"
  };
  render() {
    return (
      <React.Fragment>
        <Slider />

        <div className="product-wrapper">
          <div className="left-side">
            <Filter />
          </div>
          <div className="right-side">
            <div>
              <div>SORT BY:</div>
              <div>VIEWS:</div>
              <div>ITEMS</div>
            </div>
            <ProductGrid />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
