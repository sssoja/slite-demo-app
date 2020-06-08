import React, { Component } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles

class EditorContainer extends Component {
  render() {
    return (
      <div className={styles.editorContainer}>
        <div className={styles.content}>
          <span className={styles.heading}>People and culture</span>
          <div className={styles.callout}></div>
        </div>
      </div>
    );
  }
}

export default EditorContainer;
