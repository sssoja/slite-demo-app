import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.divider}></div>
        <div className={styles.noteList}>
          <div className={styles.note}>
            <NavLink to="/">⭐ Favorites</NavLink>
          </div>
          <div className={styles.note}>
            <NavLink to="/people-and-culture">🥇 People and culture</NavLink>
          </div>
          <div className={styles.note}>
            <NavLink to="/policies">📚 Policies</NavLink>
          </div>
          <div className={styles.note}>
            <NavLink to="/management-resources">
              📖 Management resources
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
