import React from "react";
import "./App.scss";
import { Content } from "carbon-components-react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import Gallery from "./content/Gallery";
import TestPage from "./content/TestPage";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testPage" component={TestPage} />
        </Switch>
      </Content>
    </HttpsRedirect>
  );
}

export default App;
