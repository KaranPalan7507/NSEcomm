import React, { Component } from "react";
import Slider from "react-slick";
import AspectRatioBackground from "./../Background/";
import "./style.scss";
import messages from "./../../utils/messages";
import StarRating from "./../StartRating";
import { withRouter } from "react-router";

const SamplePrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-left arrows"></i>
    </div>
  );
};
const SampleNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-right arrows"></i>
    </div>
  );
};

class Carousel extends Component {
  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
  };
  render() {
    return (
      <div className="trending-carousel">
        <div className="heading">{this.props.heading}</div>
        <div className="sub-heading">{this.props.subheading}</div>

        <Slider {...this.settings}>
          {this.props.data &&
            this.props.data.map((item, index) => (
              <div
                className="item"
                key={index}
                onClick={() =>
                  this.props.history.push("/productdetails/" + item.product_id)
                }
              >
                <div className="image-wrapper">
                  <img
                    src={item.images[0].image}
                    alt={item.images[0].alt_text}
                  />
                </div>
                <div className="title">{item.name}</div>
                <div className="product-final-offer">
                  <span className="current-price">
                    <span>&#8377;</span>
                    {item.current_price}
                  </span>
                  <strike className="original-price">
                    <span>&#8377;</span>
                    {item.price}
                  </strike>
                  <span className="discount">
                    {item.discount}
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
                    {item.total_reviews} {messages.common.reviews}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    );
  }
}
export default withRouter(Carousel);
