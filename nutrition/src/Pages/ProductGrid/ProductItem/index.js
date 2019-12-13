import React from "react";
import "./style.scss";
import StarRating from "./../../../Common/StartRating";
import messages from "./../../../utils/messages";

export default class ProductItem extends React.Component {
  title = "MuscleBlaze Whey Gold Protein ,4 lb Rich Milk Chocolate";
  currentPrice = "3,999";
  originalPrice = "5,740";
  discount = "30% off";
  reviews = "1182 reviews";
  imgSrc = "./images/product-demo.png";

  state = { data: {}, isHovered: false };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  itemHover = () => {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  };

  render() {
    const { isHovered } = this.state;

    return (
      <div
        className={`product-item ${isHovered ? "active" : ""}`}
        onMouseEnter={this.itemHover}
        onMouseLeave={this.itemHover}
      >
        <div className="product-media">
          <img
            className="product-image"
            src={this.state.data.product_thumb_image}
            alt={this.state.data.name}
          />
          {/* <div className="product-overlay">
              <h6>Helps in Muscle Building</h6>
              <span>31gm of 64 serving contains</span>
              <ul>
                <li>25gm Protein</li>
                <li>11.75gm EAA</li>
                <li>5.51gm of BCAA</li>
                <li>4.38gm of Glutamic Acid</li>
              </ul>
            </div> */}
        </div>
        <div className="product-content">
          <span className="limited-time-tag">
            <em className="fa fa-tag" />
            {messages.common.limited_offer}
          </span>
          <span className="product-title">{this.state.data.name}</span>
          <div className="product-final-offer">
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
          <div className="product-rating">
            <div className="rating">
              <StarRating />
            </div>
            <span className="review-count">
              ( {this.state.data.total_reviews} {messages.common.reviews} )
            </span>
          </div>
          <div className="product-action">
            <div className="action-group">
              <button type="button" className="btn btn-cart">
                {messages.common.add_to_cart}
              </button>
              <button type="button" className="btn btn-buy">
                {messages.common.buy_now}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
