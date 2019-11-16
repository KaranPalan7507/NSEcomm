import React from "react";
import ProductItem from "./ProductItem";
import "./style.scss";
import { API } from "../../axios";
import { apis } from "../../constants";
export default class ProductGrid extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const response = await API.GET(apis.allProducts);
    if (response.success) {
      this.setState({ data: response.data });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3"></div>
          <div className="col-lg-9 col-md-9">
            <div className="product-grid-area">
              <div className="row">
                {this.state.data.map(item => {
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
