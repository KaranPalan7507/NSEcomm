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
import LinearProgress from "@material-ui/core/LinearProgress";
import moment from "moment";
import Cookie from "js-cookie";

import Stepper from "./Stepper";

class ProductDetails extends React.Component {
  state = {
    data: null,
    product: null,
    similar: null,
    deals: [],
    graph: {},
    reviews: [],
    overallRating: 0,
    total: 0
  };
  componentDidMount() {
    this.getProducts();
    this.getTodaysDeals();
    this.isLogin = Cookie.get("token") ? true : false;
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getProducts();
    }
  }
  async getTodaysDeals() {
    //const date = "2019-07-18T21:33:46.097+00:00";
    const date = new Date().toISOString();
    const response = await API.POST(apis.deals, { date: date });
    if (response.success) {
      this.setState({
        deals: [...response.data.items]
      });
    }
  }
  async addToCart(id) {
    if (!this.isLogin) {
      window.alert("You need to login");
    } else {
      const response = await API.POST("/cart", { type: "add", id: id });
    }
  }
  async addToWishlist(id) {
    if (!this.isLogin) {
      window.alert("You need to login");
    } else {
      const response = await API.POST("/wishlist", { type: "add", id: id });
    }
  }
  getProducts = async () => {
    const id = this.props.match.params.id;

    API.POST("/post_review", {
      type: "new",
      id: id,
      rating: 2,
      text:
        "adgag adg aga ga g ag ag a ga g ag  gdad g adg adg da gad ga dg adg adg ad g"
    });
    const response = await API.GET(apis.productDetails + id);
    if (response.success) {
      this.setState(
        {
          data: response.data,
          isLoaded: true,
          product: response.data.product,
          similar: response.data.similar,
          graph: response.data.graph,
          reviews: response.data.reviews,
          overallRating: response.data.product.rating,
          total: response.data.product.total
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
                    <StarRating value={product.rating} />
                  </div>
                  <span className="review-count">
                    {product.total} {messages.common.reviews}
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
                <div className="stock-info">{this.state.product.stock}</div>
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

                <div className="dropdown">
                  <span className="dd-label">Flavour</span>
                  <Select
                    options={product.other_flavors}
                    placeholder="Pick your Flavour"
                    getOptionLabel={option => option["flavor"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />
                </div>
                <div className="dropdown">
                  <span className="dd-label">Weight</span>
                  <Select
                    options={product.other_weights}
                    placeholder="Select Weight"
                    getOptionLabel={option => option["weight"]}
                    getOptionValue={option => option["_id"]}
                    isSearchable={false}
                  />
                </div>
                <div className="stepper-detail">
                  <div>Quantity</div>
                  <Stepper />
                </div>
                <div className="btn-wrapper">
                  <Button
                    variant="outlined"
                    className="red-btn-outline"
                    color="secondary"
                    onClick={() => this.addToCart(product.product_id)}
                  >
                    {messages.common.add_to_cart}
                  </Button>
                  <Button
                    variant="outlined"
                    className="red-btn-outline"
                    color="secondary"
                    onClick={() => this.addToWishlist(product.product_id)}
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
            <div className="today-deals-wrapper">
              <Carousel
                heading="Today Deals"
                subheading="Lorem Ispum text"
                data={this.state.deals}
              />
            </div>
            <div className="nutrition-info-wrapper">
              <div className="maxwidth">
                <div className="heading">Nutrition info</div>
                <div className="content">{this.state.product.ingredients}</div>
              </div>
            </div>
            <div className="product-desc-wrapper">
              <div className="title">PRODUCT DECRIPTION</div>
              <div>{this.state.product.long_desc[0].content}</div>
            </div>
            <div className="rating-review-wrapper">
              <div className="title">
                RATING & REVIEW{" "}
                <Button
                  variant="outlined"
                  className="red-btn-outline add-review"
                >
                  Add Your Review
                </Button>
              </div>
              <div className="top-section">
                <div className="rating-section">
                  <div className="heading">Overall Rating</div>
                  <StarRating
                    size={36}
                    value={this.state.overallRating}
                    edit={false}
                  />
                  <div className="rating-info">
                    {this.state.overallRating} start out of 5
                  </div>
                  <div className="review-info">
                    {this.state.reviews.length} Reviews & {this.state.total}{" "}
                    Rating
                  </div>
                </div>
                <div className="review-graph">
                  <div className="heading">Review Graph</div>
                  {Object.keys(this.state.graph).map(item => (
                    <div className="graph-item">
                      <div className="star-name">{item + " Star"}</div>
                      <LinearProgress
                        variant="determinate"
                        value={
                          (this.state.graph[item] / this.state.reviews.length) *
                          100
                        }
                        color="secondary"
                      />
                      <div className="count">{this.state.graph[item]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {this.state.reviews.map(review => (
                  <div className="user-review">
                    <div className="review-top">
                      <div className="stars">
                        <StarRating value={review.rating} edit={false} />
                      </div>
                      <div className="review-title">{review.review_title}</div>
                    </div>
                    <div className="review-text">{review.review_text}</div>
                    <div className="review-bottom">
                      <img className="user-image" src={review.user_image} />
                      <div className="username">{review.username}</div>
                      <div className="date">
                        {moment(review.date).format("DD MMMM, YYYY")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
