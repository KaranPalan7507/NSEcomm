import React from "react";
import "./style.scss";
import messages from "./../../utils/messages";
import StarRating from "./../../Common/StartRating";
import { withRouter } from "react-router";
import { API } from "../../axios";
import { apis } from "../../constants";
import Cookie from "js-cookie";

class ProductItem extends React.Component {
  state = { data: { images: [{}] } };

  componentDidMount() {
    this.setState({ data: this.props.data });
    this.isLogin = Cookie.get("token") ? true : false;
  }
  async addToCart(id) {
    if (!this.isLogin) {
      window.alert("You need to login");
    } else {
      const response = await API.POST("/cart", { type: "add", id: id });
    }
  }
  render() {
    const { data } = this.state;

    const link = "/productdetails/" + data.product_id;

    return (
      <div
        className="product-list-item"
        onClick={() => this.props.history.push(link)}
      >
        <div className="list-media">
          <img
            className="product-image"
            src={this.state.data.images[0].image}
            alt={this.state.data.images[0].image_alt_text}
          />
        </div>
        <div className="product-details">
          <div>
            <span className="product-title">{this.state.data.name}</span>
          </div>
          <div>
            <span className="current-price">
              <span>&#8377;</span>
              {this.state.data.current_price}
            </span>
            <span className="original-price">
              <span>&#8377;</span>
              {this.state.data.price}
            </span>
            <span className="discount">
              {this.state.data.discount}
              <span>
                {"%"} {messages.common.off}
              </span>
            </span>
          </div>
          <div className="rating">
            <StarRating value={this.state.data.rating} edit={false} />
            <span className="review-count">
              ( {this.state.data.total} {messages.common.reviews} )
            </span>
          </div>
        </div>
        <div className="product-action">
          <button
            type="button"
            className="btn btn-cart"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();

              this.addToCart(this.state.data.product_id);
            }}
          >
            {messages.common.add_to_cart}
          </button>
          <button type="button" className="btn btn-buy">
            {messages.common.buy_now}
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductItem);
