import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <span className={styles.favorites}>⭐ Favorites</span>
        <div className={styles.breadcrumb}>
          <div className={styles.div}></div>
        </div>
      </div>
    );
  }
}

export default Topbar;
