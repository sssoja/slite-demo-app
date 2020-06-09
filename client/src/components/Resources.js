import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/i-info.svg";
import noteIcon from "./assets/note.svg";

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
            <a href="url">
              <img src={infoIcon} className={styles.info}></img>
            </a>
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.noteLinkList}>
            <div className={styles.noteLink}>
              {" "}
              <a href="url">
                <img src={noteIcon}></img>{" "}
                <div className={styles.text}>1-1s handbook</div>
              </a>
            </div>
            <div className={styles.noteLink}>
              {" "}
              <a href="url">
                <img src={noteIcon}></img>{" "}
                <div className={styles.text}>Performance growth evaluation</div>
              </a>
            </div>
            <div className={styles.noteLink}>
              {" "}
              <a href="url">
                <img src={noteIcon}></img>{" "}
                <div className={styles.text}>Employee lifecycle</div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
