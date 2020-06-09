import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.div}>
          <NavLink to="/" className={styles.sidebar}>
            ⭐ Favorites
          </NavLink>

          <NavLink to="/people-and-culture" className={styles.sidebar}>
            🥇 People and culture
          </NavLink>

          <NavLink to="/policies" className={styles.sidebar}>
            📚 Policies
          </NavLink>

          <NavLink to="/management-resources" className={styles.sidebar}>
            📖 Management resources
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Sidebar;
