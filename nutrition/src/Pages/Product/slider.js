import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div className="product-slider">
          <img src="images/product_slider.png" alt="" />
        </div>
        <div className="product-slider">
          <img src="images/product_slider.png" alt="" />
        </div>
        <div className="product-slider">
          <img src="images/product_slider.png" alt="" />
        </div>
      </Slider>
    );
  }
}
