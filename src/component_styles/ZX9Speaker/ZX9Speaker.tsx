import styles from "./ZX9Speaker.module.css";
// components
import ShopProductsLine from "../ShopProductsLine";
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function ZX9Speaker() {
  return (
    <section className={styles.ZX9Speaker}>
      <ImageAndText
        title={
          <>
            ZX9
            <br />
            SPEAKER
          </>
        }
        text=" Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        imgPath="/productZX9Speaker/ZX9.png"
        price="$ 4,500"
      />
      <Article
        text={
          <>
            Connect via Bluetooth or nearly any wired source. This speaker
            features optical, digital coaxial, USB Type-B, stereo RCA, and
            stereo XLR inputs, allowing you to have up to five wired source
            devices connected for easy switching. Improved bluetooth technology
            offers near lossless audio quality at up to 328ft (100m).
            <br />
            <br />
            Discover clear, more natural sounding highs than the competition
            with ZX9’s signature planar diaphragm tweeter. Equally important is
            its powerful room-shaking bass courtesy of a 6.5” aluminum alloy
            bass unit. You’ll be able to enjoy equal sound quality whether in a
            large room or small den. Furthermore, you will experience new
            sensations from old songs since it can respond to even the subtle
            waveforms.
          </>
        }
        preOne="2x"
        one="Speaker Unit"
        two="Speaker Cloth Panel"
        three="User Manual"
        four="3.5mm 10m Audio Cable"
        five="10m Optical Cable"
      />
      <Images
        firstSmallImg="/productZX9Speaker/mobile/image-gallery-1.jpg"
        secondSmallImg="/productZX9Speaker/mobile/image-gallery-2.jpg"
        bigDesktopImg="/productZX9Speaker/desktop/image-gallery-3.jpg"
        bigMobileImg="/productZX9Speaker/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        imgPathOne="/alsoLike/zx7.png"
        imgPathTwo="/alsoLike/xx99one.png"
        imgPathThree="/alsoLike/xx59.png"
        titleOne="ZX7 SPEAKER"
        titleTwo="XX99 MARK I"
        titleThree="XX59"
        seeProductPathOne="/ZX7Speaker"
        seeProductPathTwo="/XX99MarkIHeadphones"
        seeProductPaththree="/XX59Headphones"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
