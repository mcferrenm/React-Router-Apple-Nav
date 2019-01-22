import React, { Component } from "react";

import NavList from "./components/NavList";

import categoriesData from "./categoriesData";
import AppContainer from "./components/Styles/AppContainer";

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
      <AppContainer>
        <NavList categories={this.state.categories} />
      </AppContainer>
    );
  }
}

export default App;
