import React, { useState } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import chevron from "./right.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.sidebar}>
      <div>
        <NavLink
          to="/"
          onClick={() => setExpanded(!expanded)}
          className={expanded ? styles.expanded : null}
        >
          ⭐ Favorites{" "}
          <img
            src={chevron}
            className={expanded ? styles.chevronDown : styles.chevronRight}
          />
        </NavLink>

        <div className={expanded ? styles.dropdown : styles.hidden}>
          {" "}
          <NavLink to="/people-and-culture">🥇 People and culture</NavLink>
        </div>
      </div>

      <NavLink to="/policies">📚 Policies</NavLink>
      <NavLink to="/management-resources">📖 Management resources</NavLink>
    </div>
  );
};

export default Sidebar;
