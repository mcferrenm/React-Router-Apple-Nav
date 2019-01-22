import React, { Component } from "react";

import NavWrapper from "./components/NavWrapper";

import categoriesData from "./categoriesData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.setState({ categories: categoriesData });
  }

  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
