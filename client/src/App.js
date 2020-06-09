import React from "react";
import Favorites from "./components/Favorites";
import PeopleAndCulture from "./components/PeopleAndCulture";
import Policies from "./components/Policies";
import Resources from "./components/Resources";
import Topbar from "./components/library/topbar/Topbar";
import Sidebar from "./components/library/sidebar/Sidebar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Topbar position="static"></Topbar>
        <Sidebar></Sidebar>
        <Switch>
          {" "}
          // load only one route at a time
          <Route path="/" exact component={Favorites} /> //renders only if it
          matches the full path
          <Route path="/policies" exact component={Policies} />
          <Route path="/management-resources" exact component={Resources} />
          <Route
            path="/people-and-culture"
            exact
            component={PeopleAndCulture}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
