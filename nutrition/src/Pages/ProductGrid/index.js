import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
export default class ProductGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="product-grid-area">
          {this.props.data.map(item => {
            return <ProductItem data={item} />;
          })}
        </div>
      </div>
    );
  }
}
