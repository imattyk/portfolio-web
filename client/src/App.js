import React from "react";
import "./App.scss";
import { Button, Content } from "carbon-components-react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import Gallery from "./content/Gallery";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
