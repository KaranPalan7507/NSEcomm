import React from "react";
import "./style.scss";
import StarRating from "./../../../Common/StartRating";
export default class ProductItem extends React.Component {
  title = "MuscleBlaze Whey Gold Protein ,4 lb Rich Milk Chocolate";
  currentPrice = "3,999";
  originalPrice = "5,740";
  discount = "30% off";
  reviews = "1182 reviews";
  imgSrc = "./images/product-demo.png";
  state = { data: {} };
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    return (
      <div className="grid-item">
        <img
          className="product-image"
          src={this.state.data.product_thumb_image}
          alt={this.state.data.name}
        />
        <span className="offer">Limited time offer</span>
        <span className="title">{this.state.data.name}</span>
        <div>
          <span className="current-price">
            <span>&#8377;</span>
            {this.state.data.product_after_discount}
          </span>
          <span className="original-price">
            <span>&#8377;</span>
            {this.state.data.product_price}
          </span>
          <span className="discount">
            {this.state.data.product_discount_percentage}
            {"%"}
          </span>
        </div>
        <div>
          <StarRating />
          <span>({this.state.data.total_reviews})</span>
        </div>
      </div>
    );
  }
}
