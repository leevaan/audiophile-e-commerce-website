import styles from "./bodyOfSectionBody.module.css";
import Button from "@/component_styles/Button";

export default function BodyOfSectionBody() {
  return (
    <>
      <section className={styles.bodyOfSectionBodyOne}>
        <h2 className={styles.bodyOfSectionBodyOneTitle}>ZX7 SPEAKER</h2>
        <Button
          path="/ZX7Speaker"
          className={styles.bodyOfSectionBodyOneButton}
        />
      </section>
      <section className={styles.bodyOfSectionBodyTwo}>
        <div className={styles.bodyOfSectionBodyTwoLeft}></div>
        <div className={styles.bodyOfSectionBodyTwoRight}>
          <h2 className={styles.bodyOfSectionBodyTwoRightTitle}>
            YX1 EARPHONES
          </h2>
          <Button
            path="/YX1Earphones"
            className={styles.bodyOfSectionBodyTwoRightButton}
          />
        </div>
      </section>
    </>
  );
}
