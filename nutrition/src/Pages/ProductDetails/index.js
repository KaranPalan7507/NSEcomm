import React from "react";
import { API } from "../../axios";
import { apis } from "../../constants";
import "./style.scss";
import messages from "./../../utils/messages";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import Carousel from "./../../Common/TrendingCarousel";
import StarRating from "./../../Common/StartRating";
import CountDown from "./../../Common/CountDown";
import Stepper from "./Stepper";

class ProductDetails extends React.Component {
  state = { data: null, product: null, similar: null };
  componentDidMount() {
    this.getProducts();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getProducts();
    }
  }
  getProducts = async () => {
    const id = this.props.match.params.id;

    const response = await API.GET(apis.productDetails + id);
    if (response.success) {
      this.setState(
        {
          data: response.data,
          isLoaded: true,
          product: response.data.product,
          similar: response.data.similar
        },
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
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
                <div className="desc">{product.long_desc[0].content}</div>
                <div className="product-rating">
                  <div className="rating">
                    <StarRating />
                  </div>
                  <span className="review-count">
                    {product.reviews} {messages.common.reviews}
                  </span>
                  <span>Share</span>
                </div>
                <div>
                  <span>Shipping Area:Noida 201301 </span>
                  <span>Change</span>
                </div>
                <div>
                  <span>
                    Order in next 5 mins & get a shaker free
                    <CountDown secs={300} />
                  </span>
                  <span>Change</span>
                </div>
              </div>
              <div className="botom-section">
                <div className="info-point">
                  <em className="icon icon-coin-stack" />
                  <span>Earn Points on everthing</span>
                </div>
                <div className="info-point order">
                  <em className="icon icon-protein-powder" />
                  <span>Order in next 5 mins & get a shaker free</span>
                </div>
                <div className="info-point">
                  <em className="icon icon-delivery-truck" />
                  <span>Sample Text</span>
                </div>
                <div className="info-point last">
                  <em className="icon icon-credit-card" />
                  <span>Sample Text</span>
                </div>
              </div>
            </div>
            <div className="buying-options-wrapper">
              <div className="maxwidth">
                <div className="heading">Buying Options</div>
                <div className="stock-info">In Stock</div>
                <div className="product-final-offer">
                  <span className="current-price">
                    <span>&#8377;</span>
                    {product.current_price}
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
                <div className="stepper">
                  <div>Quantity</div>
                  <Stepper />
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
            <div className="today-deals-wrapper"> Todays deals</div>
            <div className="nutrition-info-wrapper">
              <div className="maxwidth">
                <div className="heading">Nutrition info</div>
              </div>
            </div>
            <div className="product-desc-wrapper">Product desc</div>
            <div className="rating-review-wrapper">Reviews </div>
            <div className="trending-wrapper">
              <Carousel
                data={this.state.similar}
                heading="Trending In Whey Protein"
                subheading="Lorem Ispum text"
              />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ProductDetails;
