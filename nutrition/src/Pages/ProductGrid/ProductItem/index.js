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
  render() {
    return (
      <div className="grid-item">
        <img className="product-image" src={this.imgSrc} alt={this.title} />
        <span className="offer">Limited time offer</span>
        <span className="title">{this.title}</span>
        <div>
          <span className="current-price">{this.currentPrice}</span>
          <span className="original-price">{this.originalPrice}</span>
          <span className="discount">{this.discount}</span>
        </div>
        <div>
          <StarRating />
          <span>({this.reviews})</span>
        </div>
      </div>
    );
  }
}
