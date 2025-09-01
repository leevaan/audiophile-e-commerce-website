import styles from "./YX1Earphones.module.css";
// components
import ShopProductsLine from "../ShopProductsLine";
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function YX1Earphones() {
  return (
    <section className={styles.YX1Earphones}>
      <ImageAndText
        title={
          <>
            YX1 WIRELESS
            <br />
            EARPHONES
          </>
        }
        text="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        imgPath="/productYX1Earphones/YX1.png"
        price="$ 599"
      />
      <Article
        text={
          <>
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
            <br />
            <br />
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </>
        }
        preOne="2x"
        preTwo="6x"
        one="Earphone Unit"
        two="Multi-size Earplugs"
        three="User Manual"
        four="USB-C Charging Cable"
        five="Travel Pouch"
      />
      <Images
        firstSmallImg="/productYX1Earphones/mobile/image-gallery-1.jpg"
        secondSmallImg="/productYX1Earphones/mobile/image-gallery-2.jpg"
        bigDesktopImg="/productYX1Earphones/desktop/image-gallery-3.jpg"
        bigMobileImg="/productYX1Earphones/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        imgPathOne="/alsoLike/XX99"
        imgPathTwo="/alsoLike/XX59"
        imgPathThree="/alsoLike/ZX9"
        titleOne="XX99 MARK I"
        titleTwo="XX59"
        titleThree="ZX9 SPEAKER"
        seeProductPathOne="/XX99MarkIHeadphones"
        seeProductPathTwo="/XX59Headphones   llbalance
        "
        seeProductPaththree="/ZX9Speaker"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
