import { Metadata } from "next";
import styles from "./earphones.module.css";
import ShopProductsLine from "../../component_styles/ShopProductsLine";
// components
import Navtitle from "../../component_styles/NavTitle";
import ImageAndText from "@/component_styles/ImageAndText";

export const metadata: Metadata = {
  title: "Earphones | Audiophile",
  description: "Browse our premium earphones selection",
};

export default function EarphonesPage() {
  return (
    <>
      <div className={`${styles.navTitleBackground} `}>
        <div className={`containerSize`}>
          <Navtitle className={`${styles.navTitle} `} title="EARPHONE" />
        </div>
      </div>
      <section className={`${styles.earphones} containerSize`}>
        <ImageAndText
          countButtonContainerClass={styles.countButtonContainer}
          title={
            <>
              YX1 WIRELESS
              <br /> EARPHONES
            </>
          }
          text="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
          imgPath="/earphones/YX1.png"
          buttonName="see product"
          buttonPath="/YX1Earphones"
        />
        <ShopProductsLine className={styles.ShopProductsLine} />
      </section>
    </>
  );
}
