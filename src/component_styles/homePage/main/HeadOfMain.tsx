import Image from "next/image";
import styles from "./hedOfMain.module.css";

// Components
import Button from "@/component_styles/Button";

export default function HeadOfMain() {
  return (
    <section className={styles.headOfMain}>
      <div className={`${styles.headOfMainContent} containerSize`}>
        <div className={`${styles.headOfMainContentContainer} `}>
          <div className={styles.headOfMainTextContainer}>
            <span className={styles.newProductLabel}>NEW PRODUCT</span>
            <h1 className={styles.headOfMainTitle}>XX99 Mark II Headphones</h1>
            <p className={styles.headOfMainDescription}>
              Experience naturaal, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button path={"/XX99MarkIIHeadphones"} />
          </div>
          <Image
            className={`${styles.headOfMainDesktopImage}`}
            src="/home/desktop/test.png"
            alt="XX99 Mark II Headphones"
            sizes="690px"
            width={690}
            height={610}
          />
          <Image
            fill
            className={`${styles.headOfMainMobileImage}`}
            src="/home/mobile/image-header.jpg"
            alt="XX99 Mark II Headphones"
          />
        </div>
      </div>
    </section>
  );
}
