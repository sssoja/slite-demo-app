import React from "react";
import Favorites from "./components/Favorites";
import PeopleAndCulture from "./components/PeopleAndCulture";
import Policies from "./components/Policies";
import Resources from "./components/Resources";
import Topbar from "./components/library/topbar/Topbar";
import Sidebar from "./components/library/sidebar/Sidebar";
import EditorContainer from "./components/library/editor-container/EditorContainer";
import styles from "./components/library/bg/style.module.css"; // Import css modules stylesheet as styles

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <main className={styles.background}>
        <Topbar position="static"></Topbar>
        <Sidebar></Sidebar>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Favorites</NavLink>
            </li>
            <li>
              <NavLink to="/policies">Policies</NavLink>
            </li>
            <li>
              <NavLink to="/management-resources">Management resources</NavLink>
            </li>
            <li>
              <NavLink to="/people-and-culture">People and culture</NavLink>
            </li>
          </ul>
        </nav>
        <EditorContainer></EditorContainer>

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