import styles from "./alsoLikeProduct.module.css";
import Image from "next/image";
// components
import Button from "../../Button";

export default function AlsoLikeProduct({
  title,
  img,
  seeProductPath = "",
}: {
  title: string;
  img: string;
  seeProductPath?: string;
}) {
  return (
    <div className={styles.alsoLikeProduct}>
      <div className={styles.imgContainer}>
        <Image src={img} alt="audiophile product" width={160} height={190} />
      </div>
      <h5>{title}</h5>
      <Button path={seeProductPath} />
    </div>
  );
}
