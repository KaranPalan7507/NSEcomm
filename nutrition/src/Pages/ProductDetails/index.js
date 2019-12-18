import React from "react";
import { API } from "../../axios";
import { apis } from "../../constants";
import "./style.scss";
import messages from "./../../utils/messages";
import Select from "react-select";
import Button from "@material-ui/core/Button";

class ProductDetails extends React.Component {
  state = { data: null };
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const id = this.props.match.params.id;

    const response = await API.GET(apis.productDetails + id);
    if (response.success) {
      this.setState({
        data: response.data,
        isLoaded: true,
        product: response.data.product
      });
    }
  };
  render() {
    const product = this.state.product;
    return (
      <React.Fragment>
        {this.state.product && (
          <div className="product-details-wrapper">
            <div className="product-info">
              <div className="left">
                <img src={product.images[0].image} />
              </div>
              <div className="right">
                <div className="vendor">
                  A <span>{product.prime_category}</span> Product
                </div>
                <div className="title">{product.name}</div>
                <div className="seperator"></div>
                <div className="desc">{product.long_desc}</div>
              </div>
            </div>
            <div className="buying-options-wrapper">
              <div className="heading">Buying Options</div>
              <div className="product-final-offer">
                <span className="current-price">
                  <span>&#8377;</span>
                  {product.price}
                </span>
                <strike className="original-price">
                  <span>&#8377;</span>
                  {product.price}
                </strike>
                <span className="discount">
                  {product.discount}
                  <span>
                    {"%"} {messages.common.off}
                  </span>
                </span>
              </div>
              <div>
                <span className="dd-label">Flavour</span>
                <Select
                  options={product.other_flavors}
                  placeholder="Pick your Flavour"
                  getOptionLabel={option => option["flavor"]}
                  getOptionValue={option => option["_id"]}
                  isSearchable={false}
                />
              </div>
              <div>
                <span className="dd-label">Weight</span>
                <Select
                  options={product.other_weights}
                  placeholder="Select Weight"
                  getOptionLabel={option => option["weight"]}
                  getOptionValue={option => option["_id"]}
                  isSearchable={false}
                />
              </div>
              <div className="btn-wrapper">
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  className="red-btn-outline"
                  color="secondary"
                >
                  Wishlist
                </Button>
              </div>
              <Button
                variant="outlined"
                className="red-btn-outline buy-now"
                color="secondary"
              >
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProductDetails;
