import { Metadata } from "next";
import styles from "./headphones.module.css";
import ShopProductsLine from "../../component_styles/ShopProductsLine";
// components
import Navtitle from "@/component_styles/NavTitle";
import ImageAndText from "@/component_styles/ImageAndText";

export const metadata: Metadata = {
  title: "Headphones | Audiophile",
  description: "Discover our premium headphones collection",
};

export default function HeadphonesPage() {
  return (
    <>
      <div className={`${styles.navTitleBackground} `}>
        <div className={`containerSize`}>
          <Navtitle className={`${styles.navTitle} `} title="HEADPHONES" />
        </div>
      </div>
      <section className={`${styles.headphones} containerSize`}>
        <ImageAndText
          countButtonContainerClass={styles.countButtonContainer}
          title="XX99 Mark II Headphones"
          text=" The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound."
          imgPath="/XX99MarkHeadphones/xx99-mark-two-headphones-desktop.png"
          buttonName="see product"
          buttonPath="/XX99MarkIIHeadphones"
        />
        <ImageAndText
          containerClass={styles.XX99MarkI}
          overlineClass={styles.XX99MarkIOverline}
          countButtonContainerClass={styles.countButtonContainer}
          title="XX99 Mark I Headphones"
          text=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          imgPath="/headphones/XX99MarkI.png"
          buttonName="see product"
          buttonPath="/XX99MarkIHeadphones"
        />
        <ImageAndText
          // containerClass={styles.XX59}
          overlineClass={styles.XX59Overline}
          countButtonContainerClass={styles.countButtonContainer}
          title={
            <>
              XX59 <br />
              Headphones
            </>
          }
          text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
          imgPath="/headphones/XX59O.png"
          buttonName="see product"
          buttonPath="/XX59Headphones"
        />
        <ShopProductsLine className={styles.ShopProductsLine} />
      </section>
    </>
  );
}
