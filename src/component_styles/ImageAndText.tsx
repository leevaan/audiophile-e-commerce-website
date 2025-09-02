"use client";
import Button from "./Button";
import styles from "./imageAndText.module.css";
import Image from "next/image";
import { useState } from "react";
import { ReactNode } from "react";

export default function ImageAndText({
  containerClass = "",
  overlineClass = "",
  countButtonContainerClass = "",
  textWidthClass = "100%",
  title,
  text,
  price,
  imgPath,
  buttonName,
  buttonPath = "",
}: {
  containerClass?: string;
  overlineClass?: string;
  countButtonContainerClass?: string;
  textWidthClass?: string;
  title?: string | ReactNode;
  text?: string;
  price?: string;
  imgPath: string;
  buttonName?: string;
  buttonPath?: string;
}) {
  const [count, setCount] = useState(1);

  return (
    <section className={`${styles.imageAndText} ${containerClass}`}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.imageAndTextImage}
          src={imgPath}
          alt="Description"
          width={340}
          height={380}
          sizes="(max-width: 1024px)180px, 340px"
        />
      </div>
      <div className={styles.textContainer}>
        <span className={`${styles.textNewProduct} ${overlineClass}`}>
          NEW PRODUCT
        </span>
        <h2 className={styles.textTitle}>{title}</h2>
        <p className={`${styles.textDescription} ${textWidthClass}`}>{text}</p>
        <span className={`${styles.textPrice}`}>{price}</span>
        <div className={styles.buttonContainer}>
          <div
            className={`${styles.countButtonContainer} ${countButtonContainerClass}`}
          >
            <button
              className={styles.decrementButton}
              onClick={() => setCount(count == 0 ? 0 : count - 1)}
            >
              -
            </button>
            <span className={styles.count}>{count}</span>
            <button
              className={styles.incrementButton}
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <Button
            path={buttonPath}
            buttonName={buttonName ?? "add to cart"}
            className={styles.button}
          />
        </div>
      </div>
    </section>
  );
}
