import AlsoLikeProduct from "./AlsoLikeProduct/AlsoLikeProduct";
import styles from "./alsoLike.module.css";

export default function AlsoLike({
  imgPathOne = "/alsoLike/xx99one.png",
  imgPathTwo = "/alsoLike/xx59.png",
  imgPathThree = "/alsoLike/zx9.png",
  titleOne = "XX99 MARK I",
  titleTwo = "XX59",
  titleThree = "ZX9 SPEAKER",
  seeProductPathOne = "",
  seeProductPathTwo = "",
  seeProductPaththree = "",
}: {
  imgPathOne?: string;
  imgPathTwo?: string;
  imgPathThree?: string;
  titleOne?: string;
  titleTwo?: string;
  titleThree?: string;
  seeProductPathOne?: string;
  seeProductPathTwo?: string;
  seeProductPaththree?: string;
}) {
  return (
    <section className={styles.alsoLike}>
      <h5 className={styles.alsoLikeTitle}>You may also like</h5>
      <div className={styles.alsoLikeComponentContainer}>
        <AlsoLikeProduct
          seeProductPath={seeProductPathOne}
          title={titleOne}
          img={imgPathOne}
        />
        <AlsoLikeProduct
          seeProductPath={seeProductPathTwo}
          title={titleTwo}
          img={imgPathTwo}
        />
        <AlsoLikeProduct
          seeProductPath={seeProductPaththree}
          title={titleThree}
          img={imgPathThree}
        />
      </div>
    </section>
  );
}
