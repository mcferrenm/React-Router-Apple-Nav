import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavList from "./components/NavList";

import AppContainer from "./components/Styles/AppContainer";

import categoriesData from "./categoriesData";

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
        <Route
          path="/"
          render={props => (
            <NavList {...props} categories={this.state.categories} />
          )}
        />
      </AppContainer>
    );
  }
}

export default App;
