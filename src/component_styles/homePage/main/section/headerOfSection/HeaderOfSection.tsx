import styles from "@/components&styles/homePage/main/section/headerOfSection/headerOfSection.module.css";

// Component
import HeaderOfSectionComponent from "@/component_styles/homePage/main/section/headerOfSection/HeaderOfSectionComponent";

export default function HeaderOfSection({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`${styles.headerOfSection} ${className} `}>
      <HeaderOfSectionComponent
        imageSrc="/thumbnail-headphones.png"
        alt="headphones img"
        title="HEADPHONES"
        linkHref="/headphones"
      />
      <HeaderOfSectionComponent
        imageSrc="/thumbnail-speakers.png"
        alt="speakers img"
        title="SPEAKERS"
        linkHref="/speakers"
      />
      <HeaderOfSectionComponent
        imageSrc="/thumbnail-earphones.png"
        alt="earphones img"
        title="EARPHONES"
        linkHref="/earphones"
      />
    </section>
  );
}
