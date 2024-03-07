"use client";
import styles from "./nav.module.css";
export default function Button() {
  return (
    <>
      {" "}
      <button
        className={styles.logout}
        onClick={(e) => {
          console.log("log out");
        }}
      >
        Logout
      </button>
    </>
  );
}
