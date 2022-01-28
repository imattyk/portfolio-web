import React from "react";
import "./App.scss";
import { Content } from "carbon-components-react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import Gallery from "./content/Gallery";
import Contact from "./content/Contact";
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <HttpsRedirect>
      <Router>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Content>
      </Router>
    </HttpsRedirect>
  );
}

export default App;
