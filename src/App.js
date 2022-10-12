import React, { Component } from "react";

import "./App.css";


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
  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/message`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (e) {
      console.log(e);
      this.setState({ error: "Did not get data from Express" });
    }
  };

  render() {
    return (
      <div className="App">
       
           <h1>asd</h1>
   
      </div>
    );
  }
}

export default App;
