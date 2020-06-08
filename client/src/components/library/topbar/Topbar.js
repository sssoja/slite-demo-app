import React, { Component } from "react";
import styles from "./styles.css"; // Import css modules stylesheet as styles

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className={styles.breadcrumb}>
          <span className={styles.favorites}></span>
          <div className={styles.div}></div>
        </div>
        ⭐ Favorites
      </div>
    );
  }
}

export default Topbar;
