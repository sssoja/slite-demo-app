import React, { Component } from "react";
import styles from "./library/editor-container/style.module.css"; // Import css modules stylesheet as styles
import infoIcon from "./assets/i-info.svg";
import PeopleAndCulture from "./PeopleAndCulture";
import Policies from "./Policies";
import Resources from "./Resources";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  addFavorite = (favorite) => {
    const { favorites } = this.state;

    if (
      !favorites.some(
        (alreadyFavorite) =>
          alreadyFavorite == PeopleAndCulture || Policies || Resources
      )
    ) {
      this.setState({
        favorites: [...this.state.favorites, favorite],
      });
    }
  };

  render() {
    return (
      <div className={styles.editorContainer}>
        <div className={styles.content}>
          <span className={styles.heading}>Favorites</span>
          <div className={styles.callout}>
            <div className={styles.calloutText}>
              Here you’ll find all your go-to pages.
            </div>{" "}
            <a href="url">
              <img src={infoIcon} className={styles.info}></img>
            </a>
            <div className={styles.rectangle}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
