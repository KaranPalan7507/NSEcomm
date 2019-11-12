import React from "react";
import "./style.scss";
export default class AfterOrder extends React.Component {
  success = {
    text: "Congratulations.\n Your Order was placed successfully.",
    imgSrc: "./images/happy builder.png",
    buttonText: "Continue Shopping"
  };
  failure = {
    text: "Sorry.\n Your Order was not placed due to (error).",
    imgSrc: "./images/sad builder.png",
    buttonText: "Retry"
  };

  render() {
    const data = this.props.success ? this.success : this.failure;
    return (
      <div className="success-order">
        <span className="text">{data.text}</span>
        <div className="bottom-wrapper">
          <img src={data.imgSrc} alt="happy builder" />
          <button className="button">{data.buttonText}</button>
        </div>
      </div>
    );
  }
}
