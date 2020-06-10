import React, { useState } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import star from "./i-star.svg";
import outline from "./i-star-outline.svg";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className={styles.topbar}>
      <NavLink to="/" className={styles.home}>
        ⭐ Favorites
      </NavLink>

      <div onClick={() => setFavorited(!favorited)}>
        {favorited ? (
          <img src={star} className={styles.star}></img>
        ) : (
          <img src={outline} className={styles.outline}></img>
        )}
      </div>
    </div>
  );
};

export default Topbar;
