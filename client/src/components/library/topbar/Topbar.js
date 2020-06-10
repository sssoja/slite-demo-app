import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import starOnClick from "./i-star.svg";
import star from "./i-star-outline.svg";

class Topbar extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <span className={styles.favorites}>⭐ Favorites</span>
        <img src={star} className={styles.star}></img>
      </div>
    );
  }
}

export default Topbar;
