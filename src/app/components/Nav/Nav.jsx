// link
import Link from "next/link";
// styels
import styles from "./nav.module.css";
// data
import { links } from "./data";
// button component becase i used use client
import Button from "./Button";

// logo font
import { Lobster } from "next/font/google";
import Mode from '../darkmode/Mode';

const logoFont = Lobster({ subsets: ["latin"], weight: ["400"] });

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={`${styles.logo} ${logoFont.className}`}>
        Hexashop
      </Link>
      <div className={styles.links}>
      <Mode/>
        {links.map((link) => {
          return (
            <>
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            </>
          );
        })}
        <Button />
      </div>
    </div>
  );
}
