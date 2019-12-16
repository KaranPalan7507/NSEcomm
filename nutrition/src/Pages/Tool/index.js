import React from "react";
import "./style.scss";
export default class extends React.Component {
  name = "User";
  subHeading = "Lorem Ispum text";
  summary =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis";
  workroutine = [
    { exercise: "Dead Lift", sets: "3 sets of 15 Reps" },
    { exercise: "Lat Pull Down", sets: "3 sets of 15 Reps" },
    { exercise: "Close Grin Chin Up", sets: "3 sets of 8 Reps" },
    { exercise: "Seated Cable Row", sets: "3 sets of 15 Reps" },
    { exercise: "Burpees", sets: "3 sets of 20 Reps" },
    { exercise: "Crunches", sets: "3 sets of 20 Reps" },
    { exercise: "Sprint", sets: "3 sets of 1 Min" },
    { exercise: "Cycling", sets: "3 sets of 1 Min" },
    {
      exercise:
        "Moderate intensity and High load Cardio ( Treadmill walk with weights in your hands) ",
      sets: "30 Mins"
    }
  ];
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
  render() {
    return (
      <div className="tool-result-wrapper">
        <div className="title">Hi {this.name}</div>
        <div className="sub-heading">{this.subHeading}</div>
        <div className="summary">{this.summary}</div>
        <div className="recommended-products">
          <div className="title">Recommended Products</div>
        </div>
        <div className="dietchart">
          <div className="title">Diet Chart</div>
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
        <div className="workroutine">
          <div className="title">Work Routine</div>
          <table>
            <tbody>
              {this.workroutine.map((item, index) => (
                <tr className={index % 2 == 0 ? "even" : "odd"} key={index}>
                  <td>{item.exercise}</td>
                  <td>{item.sets}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
