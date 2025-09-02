// import styles from "./page.module.css";

// Components
import HeadOfMain from "@/component_styles/homePage/main/HeadOfMain";
import BodyOfSection from "@/component_styles/homePage/main/section/bodyOfSection/BodyOfSection";
import HeaderOfSection from "@/component_styles/homePage/main/section/headerOfSection/HeaderOfSection";

export default function Home() {
  return (
    // <main className={`${styles.main} `}>
    <>
      <HeadOfMain />
      {/* body of main section */}
      <section className={`containerSize`}>
        <HeaderOfSection />
        <BodyOfSection />
      </section>
    </>
    // </main>
  );
}
