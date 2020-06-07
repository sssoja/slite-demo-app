import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <a href="/">Favorites</a>
            </li>
            <li>
              <a href="/policies">Policies</a>
            </li>
            <li>
              <a href="/management-resources">Management resources</a>
            </li>
            <li>
              <a href="/people-and-culture">People and culture</a>
            </li>
          </ul>
        </nav>
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

const Favorites = () => <h1>Favorites</h1>;

const Policies = () => <h1>Policies</h1>;

const Resources = () => <h1>Management resources</h1>;

const PeopleAndCulture = () => <h1>People and culture</h1>;

export default App;
