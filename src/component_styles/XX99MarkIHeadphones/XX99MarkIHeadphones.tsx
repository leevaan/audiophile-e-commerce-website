import styles from "./XX99MarkIHeadphones.module.css";
import ShopProductsLine from "../ShopProductsLine";
// components
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function XX99MarkIHeadphones() {
  return (
    <section className={styles.XX99MarkIHeadphones}>
      <ImageAndText
        title={
          <>
            XX99 Mark I<br />
            Headphones
          </>
        }
        text=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
        imgPath="/productXX99MarkIHeadphones/xx99markone.png"
        price="$ 1,750"
        overlineClass={styles.overline}
        textWidthClass={styles.textWidthClass}
      />
      <Article
        text={
          <>
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
            <br /> <br />
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
          </>
        }
        one="Headphone Unit"
        two="Replacement Earcups"
        three="User Manual"
        four="3.5mm 5m Audio Cable"
        fiveClass={styles.fiveClass}
      />
      <Images
        firstSmallImg="/productXX99MarkIHeadphones/mobile/image-gallery-1.jpg"
        secondSmallImg="/productXX99MarkIHeadphones/mobile/image-gallery-2.jpg"
        bigDesktopImg="/productXX99MarkIHeadphones/desktop/image-gallery-3.jpg"
        bigMobileImg="/productXX99MarkIHeadphones/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        imgPathOne="/alsoLike/xx99two.png"
        titleOne="XX99 MARK II"
        seeProductPathOne="/XX99MarkIIHeadphones"
        seeProductPathTwo="/XX59Headphones"
        seeProductPaththree="/ZX9Speaker"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
