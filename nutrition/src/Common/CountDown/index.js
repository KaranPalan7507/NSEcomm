import React from "react";
export default class Countdown extends React.Component {
  state = {
    min: null,
    sec: null
  };
  componentDidMount() {
    this.secondsRemaining = this.props.secs;
    this.intervalHandle = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }
  tick() {
    let min = Math.floor(this.secondsRemaining / 60);
    let sec = this.secondsRemaining - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.setState({ min, sec });

    this.secondsRemaining--;
  }
  render() {
    return (
      <span>
        Time Left - {this.state.min}:{this.state.sec}
      </span>
    );
  }
}
