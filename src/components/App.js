import React from "react";
import Timer from "./Pomodoro/Timer.js";
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="Pomodoro timer" />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;
