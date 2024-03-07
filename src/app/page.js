import styles from "./page.module.css";
import Image from "next/image";
import hero from "/public/imgs/main.png";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col}>
          <h1>Your Best Online shop destination !</h1>
          <p>Discover a world of endless show</p>
          <button>Shop Now</button>
        </div>

        <div className={styles.col}>
          <Image src={hero} className={styles.main_img} alt="" />
        </div>
      </div>
    </>
  );
}
