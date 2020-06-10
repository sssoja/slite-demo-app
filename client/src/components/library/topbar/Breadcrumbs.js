import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import chevron from "./right.svg";

const routes = [
  {
    path: "/people-and-culture",
    exact: true,
    label: () => <p className={styles.breadcrumb}>People and culture</p>,
  },
  {
    path: "/policies",
    exact: true,
    label: () => <p>className={styles.breadcrumb}>Policies</p>,
  },
  {
    path: "/management-resources",
    exact: true,
    label: () => <p className={styles.breadcrumb}>Management resources</p>,
  },
];

class Breadcrumbs extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.label}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default Breadcrumbs;

// '/': 'favorites',
// '/policies': 'Policies',
// '/management-resources': 'Management resources',
// 'people-and-culture': "People and culture",
