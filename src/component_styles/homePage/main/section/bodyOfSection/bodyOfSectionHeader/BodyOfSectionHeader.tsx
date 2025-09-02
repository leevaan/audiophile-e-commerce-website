import Image from "next/image";
import styles from "@/component_styles/homePage/main/section/bodyOfSection/bodyOfSectionHeader/bodyOfSectionHeader.module.css";
import Button from "@/component_styles/Button";

export default function BodyOfSectionHeader() {
  return (
    <section className={styles.bodyOfSectionHeader}>
      <Image
        className={styles.bodyOfSectionHeaderDesktopImage}
        src="/home/desktop/image-speaker-zx9.png"
        alt="Image 1"
        width={375}
        height={455}
      />
      <Image
        className={styles.bodyOfSectionHeaderTabletImage}
        src="/home/tablet/image-speaker-zx9.png"
        alt="Image 1"
        width={190}
        height={230}
      />
      <Image
        className={styles.bodyOfSectionHeaderMobileImage}
        src="/home/mobile/image-speaker-zx9.png"
        alt="Image 1"
        width={170}
        height={200}
      />
      <div
        className={styles.bodyOfSectionHeaderRightContent}
        style={{ alignSelf: "center" }}
      >
        <h2>ZX9 SPEAKER</h2>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          path="/ZX9Speaker"
          className={styles.bodyOfSectionHeaderButton}
        />
      </div>
    </section>
  );
}
