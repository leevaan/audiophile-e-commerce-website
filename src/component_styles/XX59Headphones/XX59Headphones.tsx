import styles from "./XX59Headphones.module.css";
// components
import ShopProductsLine from "../ShopProductsLine";
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function XX59Headphones() {
  return (
    <section className={styles.XX59Headphones}>
      <ImageAndText
        title={
          <>
            XX59
            <br />
            Headphones
          </>
        }
        text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        imgPath="/productXX59Headphones/XX59.png"
        price="$ 899"
        overlineClass={styles.overline}
      />
      <Article
        text={
          <>
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
            <br />
            <br />
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
          </>
        }
        // preOne="1x"
        one="Headphone Unit"
        two="Replacement Earcups"
        three="User Manual"
        four="3.5mm 5m Audio Cable"
        fiveClass={styles.fiveClass}
      />
      <Images
        firstSmallImg="/productXX59Headphones/mobile/image-gallery-1.jpg"
        secondSmallImg="/productXX59Headphones/mobile/image-gallery-2.jpg"
        bigDesktopImg="/productXX59Headphones/desktop/image-gallery-3.jpg"
        bigMobileImg="/productXX59Headphones/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        imgPathOne="/alsoLike/xx99two.png"
        imgPathTwo="/alsoLike/xx99one.png"
        imgPathThree="/alsoLike/zx9.png"
        titleOne="XX99 MARK II"
        titleTwo="XX99 MARK I"
        titleThree="ZX9 SPEAKER"
        seeProductPathOne="/XX99MarkIIHeadphones"
        seeProductPathTwo="/XX99MarkIHeadphones"
        seeProductPaththree="/ZX9Speaker"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
