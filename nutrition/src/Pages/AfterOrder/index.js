import React from "react";
import "./style.scss";
import messages from "../../utils/messages";
export default class AfterOrder extends React.Component {
  success = {
    text: "Your Order was placed successfully.",
    imgSrc: "./images/happy builder.png",
    buttonText: "Continue Shopping"
  };
  failure = {
    text: "Your Order was not placed due to (error).",
    imgSrc: "./images/sad builder.png",
    buttonText: "Retry"
  };

  render() {
    const data = this.props.success ? this.success : this.failure;
    return (
      <div className="status-area">
        <div className="container">
          <div className="order-status-area">
            <span>{messages.common.congratulations}</span>
            <span>{data.text}</span>
            <div className="order-status-media">
              <img src={data.imgSrc} alt="happy builder" />
              <button className="btn btn-success">{data.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
