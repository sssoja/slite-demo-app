import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import chevron from "./right.svg";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div>
          <NavLink to="/">
            ⭐ Favorites{" "}
            <a>
              <img src={chevron} className={styles.chevron}></img>
            </a>
          </NavLink>{" "}
        </div>
        <NavLink to="/people-and-culture">🥇 People and culture</NavLink>
        <NavLink to="/policies">📚 Policies</NavLink>
        <NavLink to="/management-resources">📖 Management resources</NavLink>
      </div>
    );
  }
}

export default Sidebar;
