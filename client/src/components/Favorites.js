import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/Info.png";
import noteIcon from "./assets/Note.png";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  render() {
    return (
      <div className={styles.editorContainer}>
        <div className={styles.content}>
          <span className={styles.heading}>Favorites</span>
          <div className={styles.callout}>
            <div className={styles.calloutText}>
              Here you’ll find all your go-to pages.
            </div>
            <img src={infoIcon} className={styles.info}></img>{" "}
            <div className={styles.rectangle}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
