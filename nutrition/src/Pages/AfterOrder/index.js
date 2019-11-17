import React from "react";
import "./style.scss";
import messages from "../../utils/messages";
export default class AfterOrder extends React.Component {
  success = {
    text: messages.common.order_success,
    imgSrc: "images/happybuilder.png",
    buttonText: messages.common.continue_shopping
  };
  failure = {
    text: messages.common.order_failure,
    imgSrc: "images/sadbuilder.png",
    buttonText: messages.common.retry
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
