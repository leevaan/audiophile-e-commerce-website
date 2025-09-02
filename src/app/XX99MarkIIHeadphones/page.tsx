// "use client";
import type { Metadata } from "next";
// Components
import Xx99MarkIIHeadphones from "@/component_styles/XX99MarkIIHeadphones/XX99MarkIIHeadphones";
import BackButton from "@/component_styles/BackButton";

export const metadata: Metadata = {
  title: "XX99 Mark II Headphones | Audiophile",
  description:
    "Discover the features and specifications of the XX99 Mark II Headphones.",
};

export default function XX99MarkIIHeadphonesPage() {
  return (
    <section className={`containerSize`}>
      <BackButton />
      <Xx99MarkIIHeadphones />
    </section>
  );
}
