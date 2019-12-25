import React from "react";
import "./style.scss";
import { Doughnut } from "react-chartjs-2";
import messages from "./../../utils/messages";
import { API } from "../../axios";
import { apis } from "../../constants";
import Carousel from "./../../Common/TrendingCarousel";
const chartdata = {
  labels: ["Fat", "Carbs", "Protein"],
  datasets: [
    {
      data: [36, 164, 164],
      backgroundColor: ["#7F0114", "#C10320", "#FF052B"],
      hoverBackgroundColor: ["#7F0114", "#C10320", "#FF052B"]
    }
  ],
  text: "23%"
};
// // some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
// var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
// Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//   draw: function() {
//     originalDoughnutDraw.apply(this, arguments);

//     var chart = this.chart;
//     var width = chart.chart.width,
//       height = chart.chart.height,
//       ctx = chart.chart.ctx;

//     var fontSize = (height / 114).toFixed(2);
//     ctx.font = fontSize + "em sans-serif";
//     ctx.textBaseline = "middle";

//     var text = chart.config.data.text,
//       textX = Math.round((width - ctx.measureText(text).width) / 2),
//       textY = height / 2;

//     ctx.fillText(text, textX, textY);
//   }
// });
export default class extends React.Component {
  headings = [
    "6:00 - 6:15",
    "9:00 - 10:00",
    "11:00",
    "13:00 - 14:00",
    "16:00",
    "17:30 - 18:30",
    "19:30 - 20:30",
    "21:00 - 21:30"
  ];
  cols = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  dietText = "Lorem ipsum dolor sit amet, consectetuer adipiscing";
  state = { data: {}, products: [], exercise: [] };
  constructor(props) {
    super(props);
    this.getResult();
  }
  async getResult() {
    const response = await API.POST("/toolpage ", {
      ...this.props.location.state.data
    });
    if (response.success) {
      this.setState({
        data: response.data,
        products: response.data.products,
        exercise: response.data.exercise
      });
    }
  }
  render() {
    const data = this.state.data;
    return (
      <div className="tool-result-wrapper">
        <div className="title">Hi {data.username}</div>
        <div className="sub-heading">{data.title}</div>
        <div className="summary">{data.text}</div>
        <div className="chart-wrapper">
          <div className="left-side">
            <div className="bmr">
              Your BMR is
              <div>{data.bmr}</div>
            </div>
            <div className="category">
              Product | Diet Chart | Workout Routine
            </div>
          </div>
          <div className="right-side">
            <Doughnut
              data={chartdata}
              options={{
                cutoutPercentage: 80
              }}
            />
          </div>
        </div>
        {/* <div className="recommended-products">
          <div className="title">Recommended Products</div>
          <div className="product-wrapper">
            {this.products.map(item => (
              <div className="product">
                <div className="image-wrapper">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="product-title">{item.title}</div>
                <div className="product-final-offer">
                  <span className="current-price">
                    <span>&#8377;</span>
                    {item.currentPrice}
                  </span>
                  <strike className="original-price">
                    <span>&#8377;</span>
                    {item.originalPrice}
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
                    {item.reviews} {messages.common.reviews}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <Carousel
          heading="Recommended Products"
          subheading=""
          data={this.state.products}
        />
        <div className="dietchart">
          <div className="title">Diet Chart</div>
          <div className="table-overflow">
            <table>
              <thead>
                <tr>
                  <td></td>
                  {this.headings.map((heading, index) => (
                    <td key={index}>{heading}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {this.cols.map((item, index) => (
                  <tr key={index}>
                    <td>{item}</td>
                    {this.headings.map((heading, colindex) => (
                      <td key={colindex}>{this.dietText}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="workroutine">
          <div className="title">Work Routine</div>
          <div className="table-overflow">
            <table>
              <tbody>
                {this.state.exercise.map((item, index) => (
                  <tr className={index % 2 === 0 ? "even" : "odd"} key={index}>
                    <td>{item.name}</td>
                    <td>{item.reps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="tool-btns-wrapper">
          <button className="tool-btn">DOWNLOAD</button>
          <button className="tool-btn">EMAIL PLAN</button>
          <button className="tool-btn">CHANGE DETAILS</button>
        </div>
      </div>
    );
  }
}
