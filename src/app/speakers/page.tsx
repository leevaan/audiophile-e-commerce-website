import Navtitle from "@/component_styles/NavTitle";
import { Metadata } from "next";
import ShopProductsLine from "../../component_styles/ShopProductsLine";
import styles from "./speakers.module.css";
// components
import ImageAndText from "@/component_styles/ImageAndText";

export const metadata: Metadata = {
  title: "Speakers | Audiophile",
  description: "Explore our high-quality speakers collection",
};

export default function SpeakersPage() {
  return (
    <>
      <div className={`${styles.navTitleBackground} `}>
        <div className={`containerSize`}>
          <Navtitle className={`${styles.navTitle} `} title="SPEAKERS" />
        </div>
      </div>
      <section className={`${styles.speakers} containerSize`}>
        <ImageAndText
          countButtonContainerClass={styles.countButtonContainer}
          title={
            <>
              ZX9 <br /> SPEAKER
            </>
          }
          text="Upgrade your sound system with the all new ZX9 active speaker. 
          It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
          imgPath="/speakers/ZX9.png"
          buttonName="see product"
          buttonPath="/ZX9Speaker"
        />
        <ImageAndText
          containerClass={styles.XX99MarkI}
          overlineClass={styles.XX99MarkIOverline}
          countButtonContainerClass={styles.countButtonContainer}
          title={
            <>
              ZX7 <br /> SPEAKER
            </>
          }
          text=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          imgPath="/speakers/ZX7.png"
          buttonName="see product"
          buttonPath="/ZX7Speaker"
        />
        <ShopProductsLine className={styles.ShopProductsLine} />
      </section>
    </>
  );
}
