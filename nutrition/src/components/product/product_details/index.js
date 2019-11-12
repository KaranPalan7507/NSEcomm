import React from "react";

import Header from "./../../../shared/header";
import DiscountOffer from "../../../shared/DiscountOffer";

class ProductDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DiscountOffer />
        <Header />
      </React.Fragment>
    );
  }
}

export default ProductDetails;
