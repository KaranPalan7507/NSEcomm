import React from "react";
import "./style.scss";
import Carousel from "./mainSlider";
import { API } from "./../../axios";
import { apis } from "./../../constants";
import ProductCarousel from "./../../Common/TrendingCarousel";
class Dashboard extends React.Component {
  state = {
    topseller: null
  };
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
  async componentDidMount() {
    const response = await API.POST(apis.topseller);
    if (response.success) {
      this.setState({ topseller: response.data });
    }
  }

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
  renderProductCarousel(heading, subheading) {
    return (
      <ProductCarousel
        heading={heading}
        subheading={subheading}
        data={this.state.topseller}
      />
    );
  }
  render() {
    return (
      <div className="dashboard-wrapper">
        {this.renderMainSlider()}
        <div className="dashboard-container">
          {this.renderProductCarousel("Today Deals", "Lorem Ispum text")}
          {this.renderProductCarousel(
            "Popular In Weight Loss",
            "Lorem Ispum text"
          )}
          {this.renderProductCarousel(
            "Trending In Whey Protein",
            "Lorem Ispum text"
          )}
          {this.renderProductCarousel(
            "Trending In Mass Gainer",
            "Lorem Ispum text"
          )}
        </div>
      </div>
    );
  }
}
export default Dashboard;
