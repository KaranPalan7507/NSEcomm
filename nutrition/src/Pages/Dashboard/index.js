import React from "react";
import "./style.scss";
import Carousel from "./mainSlider";
class Dashboard extends React.Component {
  mainInfo = [
    {
      text: "NEXT DISPATCH IN 1H 20MIn 09SEC",
      icon: "/images/next-dispatch.svg"
    },
    {
      text: "9.4/ 10 ON TRUSTPILOT",
      icon: "/images/trust.svg"
    },
    {
      text: "FINEST QUALITY",
      icon: "/images/quality.svg"
    },
    {
      text: "FREE COACHING",
      icon: "/images/coaching.svg"
    },
    {
      text: "FREE SHIPPING FROM $40",
      icon: "/images/truck.svg"
    }
  ];
  renderMainSlider() {
    return (
      <div className="main-slider">
        <Carousel />
        <div className="main-info-wrapper">
          <div className="center">
            {this.mainInfo.map((item, index) => {
              return (
                <div
                  className={
                    index === this.mainInfo.length - 1 ? "info last" : "info"
                  }
                  key={index}
                >
                  <div>
                    <img src={item.icon} />
                  </div>
                  <div className="text">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return <div className="dashboard-wrapper">{this.renderMainSlider()}</div>;
  }
}
export default Dashboard;
