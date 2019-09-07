import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import MainContainer from "./MainContainer";

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <MainContainer />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
