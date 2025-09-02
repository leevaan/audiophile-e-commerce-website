// "use client";
import type { Metadata } from "next";
// Components
import ZX7Speaker from "@/component_styles/ZX7Speaker/ZX7Speaker";
import BackButton from "@/component_styles/BackButton";

export const metadata: Metadata = {
  title: "ZX7 Speaker | Audiophile",
  description: "Discover the features and specifications of the ZX7 Speaker.",
};

export default function ZX7SpeakerPage() {
  return (
    <section className={`containerSize`}>
      <BackButton />
      <ZX7Speaker />
    </section>
  );
}
