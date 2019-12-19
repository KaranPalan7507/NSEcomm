import StarsRating from "stars-rating";
import React from "react";
export default class StartRating extends React.Component {
  render() {
    return (
      <StarsRating
        count={5}
        onChange={this.ratingChanged}
        size={24}
        color1={"#d4d4d4"}
        color2={"#ffd700"}
        half={false}
      />
    );
  }
  ratingChanged = newRating => {
    console.log(newRating);
  };
}
