import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
export default class ProductGrid extends React.Component {
  size = 10;
  renderProcuct() {
    let items = [];
    for (let index = 0; index < 10; index++) {
      items.push(<ProductItem />);
    }
    return items;
  }
  render() {
    return <div className="product-grid">{this.renderProcuct()}</div>;
  }
}
