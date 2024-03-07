
"use client";
import styles from "./mode.module.css";
import light from "../../../../public/imgs/crescent-moon.png";
import dark from "../../../../public/imgs/moon.png";
import Image from "next/image";
// context
import { useContext } from "react";
import { themeContext } from "../context/theme";
// context

export default function Mode() {
 const {mode,toggle}=useContext(themeContext)

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>
        <Image src={light} width={20} />
      </div>
      <div className={styles.icon}>
        <Image src={dark} width={20} />
      </div>
      <div
        className={styles.switcher}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}
