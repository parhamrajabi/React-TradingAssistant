import React from "react";
import PropTypes from "prop-types";
import styles from "./sidebaritem.module.css";
const SideBarItem = (props) => {
  const Icon = props.icon;
  return (
    <div className={`${styles.demosolutionflexbox} ${styles.active}`}>
      <div>
        <Icon />
      </div>
      <span className={styles.iconContaine}>{props.name}</span>
    </div>
  );
};

SideBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default SideBarItem;
