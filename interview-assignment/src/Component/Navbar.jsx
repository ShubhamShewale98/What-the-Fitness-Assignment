import React from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../Style/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          {" "}
          <img
            width={"80px"}
            src="https://play-lh.googleusercontent.com/c71_mHD_9eJm0u898BfRfWsUiEzKg7p0qnLlOmgpeWAptEiwjYMhgl6zZWzhpSE_rmI=w240-h480-rw"
          ></img>
        </div>

        <div className={styles.rightContainer}>
          {" "}
          <Link className={styles.rightContainerLink} to="">
            Nutrition
          </Link>
          <Link className={styles.rightContainerLink} to="">
            Gyms
          </Link>
          <Link className={styles.rightContainerLink} to="">
            Become WTF Partner
          </Link>
          <Link className={styles.rightContainerLink} to="">
            About Us
          </Link>
          <Link className={styles.rightContainerLink}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
