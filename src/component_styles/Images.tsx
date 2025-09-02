import Image from "next/image";
import styles from "./images.module.css";
export default function Images({
  firstSmallImg,
  secondSmallImg,
  bigDesktopImg,
  bigMobileImg,
}: {
  firstSmallImg: string;
  secondSmallImg: string;
  bigDesktopImg: string;
  bigMobileImg: string;
}) {
  return (
    <section className={styles.imageContainer}>
      <div className={styles.imageContainerLeftContent}>
        <Image
          src={firstSmallImg}
          alt="XX99 Mark II Headphones"
          width={445}
          height={280}
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image
          src={secondSmallImg}
          alt="XX99 Mark II Headphones"
          width={445}
          height={280}
          className={styles.img}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <Image
        src={bigDesktopImg}
        alt="XX99 Mark II Headphones"
        width={635}
        height={592}
        className={`${styles.img} ${styles.imgRightOne}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <Image
        src={bigMobileImg}
        alt="XX99 Mark II Headphones"
        width={635}
        height={370}
        className={`${styles.img} ${styles.imgRightTwo}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </section>
  );
}
