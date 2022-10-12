import React, { Component } from "react";

import "./App.css";
import MainStripe from "./mainStripe";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      error: "",
      eee: "",
      text: ""
    };
  }
  




  render() {
    return (
      <div className="App">
       
           <MainStripe/>
   
      </div>
    );
  }
}

export default App;
