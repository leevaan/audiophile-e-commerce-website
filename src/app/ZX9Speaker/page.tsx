// "use client";
import type { Metadata } from "next";
// import { PageProps } from "@/components&styles/Types";
// Components
import ZX9Speaker from "@/components&styles/ZX9Speaker/ZX9Speaker";
import BackButton from "@/components&styles/BackButton";

export const metadata: Metadata = {
  title: "ZX9 Speaker | Audiophile",
  description: "Discover the features and specifications of the ZX9 Speaker.",
};

export default function ZX9SpeakerPage() {
  return (
    <section className={` containerSize`}>
      <BackButton />
      <ZX9Speaker />
    </section>
  );
}
