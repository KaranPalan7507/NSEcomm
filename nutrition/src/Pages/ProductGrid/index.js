import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
export default class ProductGrid extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3"></div>
          <div className="col-lg-9 col-md-9">
            <div className="product-grid-area">
              <div className="row">
                {this.props.data.map(item => {
                  return <ProductItem data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
