import React from "react";
export class OrderFailure extends React.Component {
  render() {
    return (
      <div className="success">
        <span>Sorry.</span>
        <span> Your Order was not placed due to (error).</span>
        <img src="./images/sad builder.png" alt="sad builder" />
        <button>Retry</button>
      </div>
    );
  }
}
