import styles from "./product.module.css";
import Image from "next/image";
import img from "/public/imgs/pixel.jpeg";

// catching data from api
async function getdata(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("field to fetch data");
  }
  return res.json();
}
export default async function Product({ params }) {
  const product = await getdata(params.id);
  console.log(product);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <img
            className={styles.image}
            src={product.thumbnail}
            alt="post"
            fill={true}
          />
          <span>{product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((img) => (
            <img
              src={img}
              width={100}
              height={100}
              alt="post"
              key={product.id}
            />
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          fugit veritatis, consectetur ducimus pariatur quidem ex odit
          exercitationem facilis molestias accusantium tenetur suscipit. Unde
          corrupti voluptas, velit tempora consectetur nulla, quibusdam maxime
          explicabo amet, quidem modi suscipit nihil nisi adipisci dolorem
          provident dolore soluta optio aut harum? Alias, at quo!
        </p>
      </div>
    </div>
  );
}
