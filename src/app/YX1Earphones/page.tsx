// "use client";
import type { Metadata } from "next";
// Components
import YX1Earphones from "@/component_styles/YX1Earphones/YX1Earphones";
import BackButton from "@/component_styles/BackButton";

export const metadata: Metadata = {
  title: "ZX7 Speaker | Audiophile",
  description: "Discover the features and specifications of the ZX7 Speaker.",
};

export default function YX1EarphonesPage() {
  return (
    <section className={`containerSize`}>
      <BackButton />
      <YX1Earphones />
    </section>
  );
}
