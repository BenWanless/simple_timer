import React, { Component } from "react";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";
import "./Clock.scss"
export default class Clock extends Component {
  state = {
    time: 0,
    duration: 15*60*1000,
  };

  onTimerUpdate = ({ time, duration }) => {
    this.setState({
      time,
      duration,
    });
  };

  onFinish = () =>{
    alert("Done")
  }

  render() {
    const { time, duration } = this.state;
    const timer = duration-time;
    return (
      <div className="clock__wrapper">
        <Timer active duration={duration} onTimeUpdate={this.onTimerUpdate} onFinish={this.onFinish}/>
        <Timecode component="p" time={timer}/>
      </div>
    );
  }
}
