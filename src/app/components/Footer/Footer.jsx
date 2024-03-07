import styles from "./footer.module.css";
import Image from "next/image";
import { social_media } from "./data";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div>@2024 Hexashop. All rights reserved.</div>
      <div className={styles.social}>
        {social_media.map((icon) => {
          return (
            <>
              <Image
                key={icon.id}
                src={`/imgs/${icon.media}.png`}
                width={20}
                height={20}
                className={styles.icon}
                alt=""
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
