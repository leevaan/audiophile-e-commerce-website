import styles from "@/components&styles/homePage/main/section/bodyOfSection/bodyOfSection.module.css";
import BodyOfSectionHeader from "@/components&styles/homePage/main/section/bodyOfSection/bodyOfSectionHeader/BodyOfSectionHeader";
import BodyOfSectionBody from "./bodyOfSectionBody/BodyOfSectionBody";

export default function BodyOfSection() {
  return (
    <section className={styles.bodyOfSection}>
      <BodyOfSectionHeader />
      <BodyOfSectionBody />
    </section>
  );
}
