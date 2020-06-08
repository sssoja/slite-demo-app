import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.notelist}>
          <div className={styles.favorites}>
            <span className={styles.favoritesText}>⭐ Favorites</span>
          </div>
          <div className={styles.divider}></div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
