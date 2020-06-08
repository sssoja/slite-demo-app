import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/Info.png";
import noteIcon from "./assets/Note.png";

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
            <img src={infoIcon} className={styles.info}></img>{" "}
            <div className={styles.rectangle}></div>
          </div>
          <div className={styles.noteLinkList}>
            <div className={styles.ourCulture}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>Our Culture</div>
            </div>
            <div className={styles.values}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>Values</div>
            </div>
            <div className={styles.tipsTricks}>
              <img src={noteIcon} className={styles.note}></img>{" "}
              <div className={styles.text}>Tips & Tricks</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleAndCulture;
