import React from "react";
import styles from "./products.module.css";

//

import Link from "next/link";

// catching data from api
async function getdata() {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("field to fetch data");
  }
  return res.json();
}
export default async function Products() {
  const data = await getdata();
  const products = data.products;

  return (
    <div className={styles.main_container}>
      {products.map((product) => (
        <Link
          href={`/pages/products/${product.id}`}
          className={styles.post}
          key={product.id}
        >
          <div className={styles.container}>
            <img className={styles.image} src={product.thumbnail} alt="post" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
