import React, { Component } from "react";
import { Route } from "react-router-dom";

import NavList from "./components/NavList";
import SubNavList from "./components/SubNavList";

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
        <NavList categories={this.state.categories} />
        <Route
          path="/:id"
          render={props => (
            <SubNavList {...props} categories={this.state.categories} />
          )}
        />
      </AppContainer>
    );
  }
}

export default App;
