import React, { useState } from "react";
import styles from "./style.module.css"; // Import css modules stylesheet as styles
import chevron from "./right.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, isActive] = useState(false);

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
          <NavLink to="/people-and-culture" onClick={() => isActive(!active)}>
            🥇 People and culture
          </NavLink>
        </div>
      </div>

      <NavLink to="/policies" onClick={() => isActive(!active)}>
        📚 Policies
      </NavLink>
      <NavLink to="/management-resources" onClick={() => isActive(!active)}>
        📖 Management resources
      </NavLink>
    </div>
  );
};

export default Sidebar;
