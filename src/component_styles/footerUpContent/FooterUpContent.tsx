"use client";
import { usePathname } from "next/navigation";
import styles from "./footerUpContent.module.css";

export default function FooterUpContent() {
  const pathname = usePathname();
  const hideFooter = pathname === "/login" || pathname === "/register";
  if (hideFooter) return null;

  return (
    <section className={` ${styles.footerUpContent} containerSize`}>
      <div className={styles.footerUpContentLeft}>
        <h2 className={styles.footerUpContentLeftTitle}>
          Bringing you the <span className={styles.bestAudioGear}>best</span>{" "}
          audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.footerUpContentRight}></div>
    </section>
  );
}
