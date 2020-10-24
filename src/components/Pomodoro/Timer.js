import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor() {
    super();

    //Estado inicial

    this.state = {
      alert: {
        type: "",
        message: "",
      },
      time: 0,
    };

    //Definirá los tiempos de trabajo, pausa corta y larga.

    this.times = {
      defaultTime: 1500, //25 min
      shortBreak: 300, //5 min
      longBreak: 900, //15 min
      cero: 0, // 0 min
    };
  }

  coponentDidMound() {
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    //tiempo por defecto 25 min
    this.setState({
      time: this.times.defaultTime,
    });
  };

  setTime = (newTime) => {
    this.restartInterval();

    this.setState({
      time: newTime,
    });
  };

  setTimeToCero = () => {
    //tiempo a cero
    this.setState({
      time: this.times.cero,
    });
  };


  restartInterval = () => {
    //Borre intervalo
    clearInterval(this.interval);

    //Ejecute countDown cada seg

    this.interval = setInterval(this.countDown, 1000);
  };

  countDown = () => {
    //si llega a cero, se muestra la alarma ¡Buzzzz!
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: "buz",
          message: "Buzzzzzzzzzzzz!",
        },
      });
    } else {
      //Descuente el tiempo seg a seg
      this.setState({
        time: this.state.time - 1,
      });
    }
  };

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: "work",
        message: "Working!",
      },
    });
    return this.setTime(this.times.defaultTime);
  };

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: "shortBreak",
        message: "Taking a Short Break!",
      },
    });
    return this.setTime(this.times.shortBreak);
  };

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: "longBreak",
        message: "Taking a Long Break!",
      },
    });
    return this.setTime(this.times.longBreak);
  };

  displayTimer(seconds) {
    //Formates el tiempo a mm:ss
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);

    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  }

  resetTimer = () => {
    this.setState({
      alert: {
        type: "cero",
        message: "Reseting timer!"
      },
    });
    return this.setTime(this.times.cero);
  };

  render() {
    const {
      alert: { message, type },
      time,
    } = this.state;
    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>{message}</div>

        <div className="timer">{this.displayTimer(time)}</div>

        <div className="types">
          <button className="start" onClick={this.setTimeForWork}>
            Start Working
          </button>
          <button className="short" onClick={this.setTimeForShortBreak}>
            Short Break
          </button>
          <button className="long" onClick={this.setTimeForLongBreak}>
            Long Break
          </button>
          <button className="reset" onClick={this.resetTimer}>
            Reset Timer
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
