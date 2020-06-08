import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import icon from "./assets/Info.png";

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
          <div className={styles.callout}></div>
          <div className={styles.calloutText}></div>
          <div className={styles.info}></div>
          <img src={icon} className={styles.info}></img>{" "}
          <div className={styles.rectangle}></div>
        </div>
      </div>
    );
  }
}

export default PeopleAndCulture;
