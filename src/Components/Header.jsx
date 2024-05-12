import React from "react";
import styles from "./header.module.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.iconContainer}>
          <PermIdentityIcon />
        </div>
        <div className={styles.iconContainer}>
          <NotificationsNoneIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;


