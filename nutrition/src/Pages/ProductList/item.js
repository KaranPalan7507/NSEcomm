import React from "react";
import "./style.scss";
import messages from "./../../utils/messages";
import StarRating from "./../../Common/StartRating";

export default class ProductItem extends React.Component {
  state = { data: {} };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    return (
      <div className="product-list-item">
        <div className="list-media">
          <img
            className="product-image"
            src={this.state.data.product_thumb_image}
            alt={this.state.data.name}
          />
        </div>
        <div className="product-details">
          <div>
            <span className="product-title">{this.state.data.name}</span>
          </div>
          <div>
            <span className="current-price">
              <span>&#8377;</span>
              {this.state.data.product_after_discount}
            </span>
            <strike className="original-price">
              <span>&#8377;</span>
              {this.state.data.product_price}
            </strike>
            <span className="discount">
              {this.state.data.product_discount_percentage}
              <span>
                {"%"} {messages.common.off}
              </span>
            </span>
          </div>
          <div className="rating">
            <StarRating />
            <span className="review-count">
              ( {this.state.data.total_reviews} {messages.common.reviews} )
            </span>
          </div>
        </div>
        <div className="product-action">
          <button type="button" className="btn btn-cart">
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
