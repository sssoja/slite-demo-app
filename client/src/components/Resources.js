import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/Info.png";
import noteIcon from "./assets/Note.png";

class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleSubmit = () => {
    // pass data back up to parent using this.props.addToFavorites();
    this.props.addToFavorites({
      content: this.state.content,
    });
  };

  render() {
    return (
      <div className={styles.editorContainer}>
        <div className={styles.content}>
          <span className={styles.heading}>Management resources</span>
          <div className={styles.callout}>
            <div className={styles.calloutText}>
              Here you’ll find our management resources. You can read about the
              personal growth reviews, learn about roles and outcomes, and get
              the full overview of the employee lifecycle.
            </div>
            <img src={infoIcon} className={styles.info}></img>{" "}
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.noteLinkList}>
            <div className={styles.note1}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>1-1s handbook</div>
            </div>
            <div className={styles.note2}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>Performance growth evaluation</div>
            </div>
            <div className={styles.note3}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>Employee lifecycle</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
