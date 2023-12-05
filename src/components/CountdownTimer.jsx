import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: props.seconds || 60,
    };
  }
  // btw OOP in javascript is ridiculous

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState((prevState) => ({
      seconds: prevState.seconds - 1,
    }));

    if (this.state.seconds === 1) {
        clearInterval(this.timerID);
        if (this.props.onTimeout) {
            this.props.onTimeout(); // Callback when the timer reaches 0
      }
    }
  };

  render() {
    return (
        <h2>{this.state.seconds}</h2>
    );
  }
}

export default CountdownTimer;


// stolen from chatGPT because i don't know react :)