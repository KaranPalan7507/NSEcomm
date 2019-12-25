import React from "react";
import "./style.scss";
import Carousel from "./mainSlider";
import { API } from "./../../axios";
import { apis } from "./../../constants";
import ProductCarousel from "./../../Common/TrendingCarousel";
import InstaPosts from "./../../Common/InstaPosts";
class Dashboard extends React.Component {
  state = {
    topseller: [],
    deals: []
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
    this.getTodaysDeals();
    this.getTrending();
  }
  async getTrending() {
    const response = await API.POST(apis.topseller);
    if (response.success) {
      this.setState({ topseller: response.data });
    }
  }
  async getTodaysDeals() {
    const date = new Date().toISOString();
    const response = await API.POST(apis.deals, { date: date });
    if (response.success) {
      this.setState({ deals: response.data.items });
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
  renderProductCarousel(heading, subheading, items) {
    return (
      <ProductCarousel heading={heading} subheading={subheading} data={items} />
    );
  }
  render() {
    return (
      <div className="dashboard-wrapper">
        {this.renderMainSlider()}
        <div className="dashboard-container">
          {this.state.deals.length &&
            this.renderProductCarousel(
              "Today Deals",
              "Lorem Ispum text",
              this.state.deals
            )}
          <div className="tools-section">
            <a href="/tool">
              <img src="/images/Group_962.png" />
            </a>
            <div className="heading">I-NUTRITION</div>
            <div className="questioniare">
              <div className="q-section">
                <div className="title">Title</div>
                <div className="wrapper">
                  <div>
                    <div className="question">What is your height?</div>
                  </div>
                  <div>
                    <div className="question">What is your weight?</div>
                  </div>
                  <div>
                    <div className="question">What is your Age?</div>
                  </div>
                </div>
              </div>
              <div className="q-section">
                <div className="title">Title</div>
                <div className="wrapper">
                  <div className="question">What is your Goal?</div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-belly" />
                    </div>
                    <div>
                      <div>Weight Loss</div>
                      <div className="sub-info">I want to lose Weight</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-gym" />
                    </div>
                    <div>
                      <div>Body Building</div>
                      <div className="sub-info">
                        I want to build muscle mass
                      </div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-weightlift" />
                    </div>
                    <div>
                      <div>General Fitbess</div>
                      <div className="sub-info">I want general fitness</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-fast" />
                    </div>
                    <div>
                      <div>Sports</div>
                      <div className="sub-info">I want to play sports</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="q-section">
                <div className="title">Title</div>
                <div className="wrapper">
                  <div className="question">How active are you?</div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-couch" />
                    </div>
                    <div>
                      <div>Sedentary</div>
                      <div className="sub-info">Inactive</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-walk" />
                    </div>
                    <div>
                      <div>Lightly Active</div>
                      <div className="sub-info">Minimal</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-workout" />
                    </div>
                    <div>
                      <div>Moderately Active</div>
                      <div className="sub-info">15-30 mins workout</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-fast" />
                    </div>
                    <div>
                      <div>Very Active</div>
                      <div className="sub-info">Regular Workout</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="q-section last">
                <div className="title">Title</div>
                <div className="wrapper">
                  <div className="question">Do you workout?</div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-gym-1" />
                    </div>
                    <div>
                      <div>Yes</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-walk" />
                    </div>
                    <div>
                      <div>No</div>
                    </div>
                  </div>
                  <div className="option">
                    <div className="icon-wrapper">
                      <em className="icon icon-gym-2" />
                    </div>
                    <div>
                      <div>Sometimes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.topseller &&
            this.renderProductCarousel(
              "Popular In Weight Loss",
              "Lorem Ispum text",
              this.state.topseller
            )}
          {this.state.topseller &&
            this.renderProductCarousel(
              "Trending In Whey Protein",
              "Lorem Ispum text",
              this.state.topseller
            )}
          {this.state.topseller &&
            this.renderProductCarousel(
              "Trending In Mass Gainer",
              "Lorem Ispum text",
              this.state.topseller
            )}
          <InstaPosts />
        </div>
      </div>
    );
  }
}
export default Dashboard;
