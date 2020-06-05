import React, { Component } from "react";
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padBackground: "transparent",
    };
    this.soundRef = React.createRef();
  }

  backgroundColors = [
    "linear-gradient(45deg, #333333, #dd1818)",
    "linear-gradient(45deg, #636363, #a2ab58)",
    "linear-gradient(45deg, #000046, #1cb5e0)",
    "linear-gradient(45deg, #007991, #78ffd6)",
    "linear-gradient(45deg, #eb5757, #000000)",
    "linear-gradient(45deg, #20002c, #cbb4d4)",
    "linear-gradient(45deg, #43c6ac, #191654)",
  ];

  getNewColor = () => {
    const randomNumber = Math.floor(
      Math.random() * this.backgroundColors.length
    );
    this.props.changeBackground(this.backgroundColors[randomNumber]);
  };

  changePadColor = () => {
    this.setState({ padBackground: "orange" });
    setTimeout(() => this.setState({ padBackground: "transparent" }), 120);
  };

  componentDidMount() {
    document.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
  }

  onClickHandler = () => {
    if (this.soundRef.current) {
      this.soundRef.current.play();
      const newAudio = this.soundRef.current.cloneNode();
      newAudio.play();
      this.changePadColor();
      this.getNewColor();
      this.props.saveLastSound();
    }
  };

  onKeyDownHandler = (event) => {
    if (event.keyCode === this.props.keyCode) {
      this.onClickHandler();
    }
  };

  render() {
    return (
      <div
        style={{ background: this.state.padBackground }}
        className="drum-pad DrumPad"
        id={this.props.padId}
        onClick={this.onClickHandler}
      >
        <div>{this.props.selectedKey}</div>
        <audio
          id={this.props.selectedKey}
          className="clip"
          ref={this.soundRef}
          src={this.props.soundSource}
        />
      </div>
    );
  }
}

export default DrumPad;