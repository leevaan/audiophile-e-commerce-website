import styles from "./ZX7Speaker.module.css";
// components
import ShopProductsLine from "../ShopProductsLine";
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function ZX7Speaker() {
  return (
    <section className={styles.ZX7Speaker}>
      <ImageAndText
        title={
          <>
            ZX7
            <br />
            SPEAKER
          </>
        }
        text="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        imgPath="/productZX7Speaker/ZX7.png"
        price="$ 3,500"
        overlineClass={styles.overline}
      />
      <Article
        text={
          <>
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
            <br />
            <br />
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </>
        }
        preOne="2x"
        one="Speaker Unit"
        two="Speaker Cloth Panel"
        three="User Manual"
        four="3.5mm 10m Audio Cable"
        five="7.5m Optical Cable"
      />
      <Images
        firstSmallImg="/productZX7Speaker/mobile/image-gallery-1.jpg"
        secondSmallImg="/productZX7Speaker/mobile/image-gallery-2.jpg"
        bigDesktopImg="/productZX7Speaker/desktop/image-gallery-3.jpg"
        bigMobileImg="/productZX7Speaker/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        imgPathOne="/alsoLike/zx9.png"
        imgPathTwo="/alsoLike/xx99one.png"
        imgPathThree="/alsoLike/xx59.png"
        titleOne="ZX9 SPEAKER"
        titleTwo="XX99 MARK I"
        titleThree="XX59"
        seeProductPathOne="/ZX9Speaker"
        seeProductPathTwo="/XX99MarkIHeadphones"
        seeProductPaththree="/XX59Headphones"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
