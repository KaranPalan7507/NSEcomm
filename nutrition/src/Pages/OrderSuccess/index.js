import React from "react";
export class OrderSuccss extends React.Component {
  render() {
    return (
      <div className="success">
        <span>Congratulations.</span>
        <span> Your Order was placed successfully.</span>
        <img src="./images/happy builder.png" alt="happy builder" />
        <button>Continue Shopping</button>
      </div>
    );
  }
}
