import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/i-info.svg";
import noteIcon from "./assets/note.svg";

class PeopleAndCulture extends Component {
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
          <span className={styles.heading}>People and culture</span>
          <div className={styles.callout}>
            <div className={styles.calloutText}>
              Here you’ll find all the important information related to our
              internal culture. You can read about our story, learn about our
              values, and get the full overview of the tools we use.
            </div>
            <a href="url">
              <img src={infoIcon} className={styles.info}></img>
            </a>
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.noteLinkList}>
            <div className={styles.noteLink}>
              <img src={noteIcon}></img>{" "}
              <a href="url" className={styles.text}>
                Our Culture
              </a>
            </div>
            <div className={styles.noteLink}>
              <img src={noteIcon}></img>{" "}
              <a href="url" className={styles.text}>
                Values
              </a>
            </div>
            <div className={styles.noteLink}>
              <img src={noteIcon}></img>{" "}
              <a href="url" className={styles.text}>
                Tips & Tricks
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleAndCulture;
