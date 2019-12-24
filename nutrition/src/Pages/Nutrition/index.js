import React from "react";
import Slider from "react-slick";
import "./style.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cookie from "js-cookie";

const SamplePrevArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-left arrows"></i>
    </div>
  );
};
const SampleNextArrow = props => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa fa-chevron-right arrows"></i>
    </div>
  );
};
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

class Nutrition extends React.Component {
  mealPreferance = [3, 4, 5, 6, "any"];
  dietPreference = [
    "Ketogenic",
    "Paleo",
    "Veg",
    "Vegan",
    "Mediterranean",
    "Anything"
  ];
  targets = ["Loose Weight", "Gain Weight", "Build Muscle"];
  fats = ["Low Below 14%", "Medium 14%-26%", "High Above 26%"];
  activities = [
    "Sedentary",
    "Lightly active",
    "Moderately active",
    "Very active",
    "Extremely active"
  ];
  state = {
    isLogedIn: false
  };
  constructor(props) {
    super(props);
    const token = Cookie.get("token") ? Cookie.get("token") : null;
    if (token) {
      this.setState({ isLogedIn: true });
    }
  }
  getOtherSlides() {
    if (this.state.isLogedIn) {
    } else {
    }
  }
  render() {
    const token = Cookie.get("token") ? Cookie.get("token") : null;
    return (
      <div className="tool-q-wrapper">
        <h1 className="page-title">I-Nutrition</h1>
        {token ? (
          <Slider {...settings}>
            <div className="tool-slide">
              <div className="title">Age</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Years</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Gender</div>
              <div className="button-wrapper">
                <Button
                  variant="contained"
                  className="button-red"
                  color="secondary"
                >
                  Male
                </Button>
                <Button
                  variant="contained"
                  className="button-red"
                  color="secondary"
                >
                  Female
                </Button>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Name</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Weight</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Kgs</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Height</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Cm</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Meal Preferance</div>
              <div className="button-wrapper">
                {this.mealPreferance.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Diet Preferance</div>
              <div className="button-wrapper">
                {this.dietPreference.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Target</div>
              <div className="button-wrapper">
                {this.targets.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Body Fat Percentage</div>
              <div className="button-wrapper">
                {this.fats.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title"> Activity Level</div>
              <div className="button-wrapper">
                {this.activities.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Weight Goal</div>
              <div>
                <TextField classes={{ root: "login-input" }} />{" "}
                <span className="sub-heading">Kgs</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Weight Gain/Loss rate per week</div>
              <div>
                <TextField classes={{ root: "login-input" }} />{" "}
                <span className="sub-heading">Kgs</span>
              </div>
            </div>
          </Slider>
        ) : (
          <Slider {...settings}>
            <div className="tool-slide">
              <div className="title">Age</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Years</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Gender</div>
              <div className="button-wrapper">
                <Button
                  variant="contained"
                  className="button-red"
                  color="secondary"
                >
                  Male
                </Button>
                <Button
                  variant="contained"
                  className="button-red"
                  color="secondary"
                >
                  Female
                </Button>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Name</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Weight</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Kgs</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Height</div>
              <div>
                <TextField classes={{ root: "login-input" }} />
                <span className="sub-heading"> Cm</span>
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Diet Preferance</div>
              <div className="button-wrapper">
                {this.dietPreference.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="tool-slide">
              <div className="title">Target</div>
              <div className="button-wrapper">
                {this.targets.map((item, index) => (
                  <Button
                    variant="contained"
                    className="button-red"
                    color="secondary"
                    key={index}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </Slider>
        )}
      </div>
    );
  }
}
export default Nutrition;
