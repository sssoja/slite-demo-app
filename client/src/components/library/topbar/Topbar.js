import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import star from "./i-star.svg";

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className={styles.div}></div>
        <span className={styles.favorites}>⭐ Favorites</span>
        <div className={styles.breadcrumb}></div>
        <img src={star} className={styles.star}></img> */}
      </div>
    );
  }
}

export default Topbar;
