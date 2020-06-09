import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles

import infoIcon from "./assets/i-info.svg";
import noteIcon from "./assets/note.svg";

class Policies extends Component {
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
          <span className={styles.heading}>Policies</span>
          <div className={styles.callout}>
            <div className={styles.calloutText}>
              Here you’ll find all the important information related to our
              policies. You can read about the way we work, learn about our
              remote etiquette, and get the full overview of the team handbook.
            </div>
            <a href="url">
              <img src={infoIcon} className={styles.info}></img>
            </a>
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.noteLinkList}>
            <div className={styles.note}>
              <a href="url">
                {" "}
                <img src={noteIcon} className={styles.note}></img>{" "}
                <div className={styles.text}>1-1s handbook</div>
              </a>
            </div>
            <div className={styles.note}>
              <a href="url">
                <img src={noteIcon} className={styles.note}></img>{" "}
                <div className={styles.text}>Remote handbook</div>
              </a>
            </div>
            <div className={styles.note}>
              <a href="url">
                <img src={noteIcon} className={styles.note}></img>{" "}
                <div className={styles.text}>Onboarding @ Slite</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
