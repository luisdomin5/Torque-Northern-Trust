import React from "react";
import Grid from "./components/PortraitGrids/Grid";
import { withRouter, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { AppContainer } from "./styles/appStyles";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";

function App(props) {
  const location = useLocation();
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route
          exact
          path="/grid"
          render={props => <Grid gridType="portrait" {...props} />}
        />
        <Route
          exact
          path="/icon-grid"
          render={props => <Grid gridType="icon" {...props} />}
        />
        <Route exact path="/events" render={props => <Events />} />
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </AppContainer>
  );
}

export default withRouter(App);
