import styles from "./XX99MarkIIHeadphones.module.css";
// components
import ShopProductsLine from "../ShopProductsLine";
import ImageAndText from "../ImageAndText";
import Article from "../Article";
import Images from "../Images";
import AlsoLike from "../AlsoLike/AlsoLike";

export default function XX99MarkIIHeadphones() {
  return (
    <section className={styles.XX99MarkIIHeadphones}>
      <ImageAndText
        title="XX99 Mark II Headphones"
        text=" The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound."
        imgPath="/XX99MarkHeadphones/xx99-mark-two-headphones-desktop.png"
        price="$ 2,999"
      />
      <Article
        text={
          <>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
            <br /> <br />
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </>
        }
        one="in the box"
        two="Headphone Unit"
        three="Replacement Earcups"
        four="User Manual"
        five="3.5mm 5m Audio Cable"
      />
      <Images
        firstSmallImg="/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
        secondSmallImg="/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
        bigDesktopImg="/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
        bigMobileImg="/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
      />
      <AlsoLike
        seeProductPathOne="/XX99MarkIHeadphones"
        seeProductPathTwo="/XX59Headphones"
        seeProductPaththree="/ZX9Speaker"
      />
      <ShopProductsLine className={styles.shopProductsLine} />
    </section>
  );
}
